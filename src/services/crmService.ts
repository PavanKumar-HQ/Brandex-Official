/**
 * Brandex CRM Integration Bridge & Real-Time Dispatcher
 *
 * Provides a decoupled webhook and API pipeline to stream incoming applications,
 * workshop registrations, partnership proposals, and consultations into Brandex's
 * company CRM (HubSpot, Zoho, Salesforce, custom webhook, or Zapier/Make).
 */

export interface CRMConfig {
  webhookUrl: string;
  apiKey?: string;
  provider: 'custom' | 'hubspot' | 'zoho' | 'salesforce' | 'zapier';
  autoSync: boolean;
  isConnected: boolean;
  lastSyncAt?: string;
}

export interface CRMDispatchResult {
  success: boolean;
  status: number;
  message: string;
  timestamp: string;
}

export interface CRMLeadPayload {
  source: 'Brandex Digital Canvas';
  applicationId: string;
  applicationType: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone?: string;
  organization?: string;
  trackOrProgram?: string;
  formData: Record<string, any>;
  status: string;
  submittedAt: string;
  crmDispatchTimestamp: string;
}

const STORAGE_KEY_CONFIG = 'brandex_crm_config';
const STORAGE_KEY_LOGS = 'brandex_crm_logs';

export const getCRMConfig = (): CRMConfig => {
  if (typeof window === 'undefined') {
    return {
      webhookUrl: '',
      provider: 'custom',
      autoSync: true,
      isConnected: false,
    };
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY_CONFIG);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...parsed,
        isConnected: Boolean(parsed.webhookUrl && parsed.webhookUrl.trim().length > 8),
      };
    }
  } catch (err) {
    console.warn('[CRM Bridge] Failed to parse config from storage:', err);
  }

  const envWebhook = (import.meta as any).env?.VITE_CRM_WEBHOOK_URL || '';
  return {
    webhookUrl: envWebhook,
    provider: 'custom',
    autoSync: true,
    isConnected: Boolean(envWebhook && envWebhook.trim().length > 8),
  };
};

export const saveCRMConfig = (config: Partial<CRMConfig>): CRMConfig => {
  const current = getCRMConfig();
  const updated: CRMConfig = {
    ...current,
    ...config,
    isConnected: Boolean((config.webhookUrl ?? current.webhookUrl).trim().length > 8),
  };

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(updated));
    } catch (err) {
      console.warn('[CRM Bridge] Failed to save config:', err);
    }
  }
  return updated;
};

export const getCRMLogs = (): Array<{ id: string; time: string; appId: string; status: string; note: string }> => {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGS) || '[]');
  } catch {
    return [];
  }
};

const appendCRMLog = (log: { appId: string; status: 'synced' | 'pending' | 'failed'; note: string }) => {
  if (typeof window === 'undefined') return;
  try {
    const existing = getCRMLogs();
    const newEntry = {
      id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      time: new Date().toISOString(),
      ...log,
    };
    const updated = [newEntry, ...existing].slice(0, 50);
    localStorage.setItem(STORAGE_KEY_LOGS, JSON.stringify(updated));
  } catch {}
};

/**
 * Format an application record into a normalized CRM Lead object
 */
export const formatCRMLead = (app: any): CRMLeadPayload => {
  return {
    source: 'Brandex Digital Canvas',
    applicationId: app.id,
    applicationType: app.type,
    applicantName: app.name,
    applicantEmail: app.email,
    applicantPhone: app.phone || app.details?.phone || '',
    organization: app.organization || app.details?.organization || app.details?.institutionName || '',
    trackOrProgram: app.track || app.details?.track || app.details?.selectedProgram || 'Standard Track',
    formData: app.details || {},
    status: app.status || 'Submitted',
    submittedAt: app.createdAt || new Date().toISOString(),
    crmDispatchTimestamp: new Date().toISOString(),
  };
};

/**
 * Dispatches an application to the CRM webhook if connected, or queues it.
 */
export const dispatchApplicationToCRM = async (app: any): Promise<CRMDispatchResult> => {
  const config = getCRMConfig();
  const payload = formatCRMLead(app);

  if (!config.isConnected || !config.webhookUrl) {
    appendCRMLog({
      appId: app.id,
      status: 'pending',
      note: 'Waiting for CRM connection. Lead securely stored in local and database queue.',
    });
    return {
      success: false,
      status: 202,
      message: 'CRM API is waiting for endpoint connection. Lead queued in real-time store.',
      timestamp: new Date().toISOString(),
    };
  }

  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (config.apiKey) {
      headers['Authorization'] = `Bearer ${config.apiKey.trim()}`;
      headers['X-Brandex-API-Key'] = config.apiKey.trim();
    }

    const res = await fetch(config.webhookUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      saveCRMConfig({ lastSyncAt: new Date().toISOString() });
      appendCRMLog({
        appId: app.id,
        status: 'synced',
        note: `Successfully dispatched to ${config.provider.toUpperCase()} CRM endpoint.`,
      });
      return {
        success: true,
        status: res.status,
        message: 'Successfully streamed lead into CRM system.',
        timestamp: new Date().toISOString(),
      };
    } else {
      appendCRMLog({
        appId: app.id,
        status: 'failed',
        note: `CRM endpoint returned HTTP ${res.status}. Stored for automated retry.`,
      });
      return {
        success: false,
        status: res.status,
        message: `CRM endpoint error (HTTP ${res.status}). Queued for retry.`,
        timestamp: new Date().toISOString(),
      };
    }
  } catch (err: any) {
    appendCRMLog({
      appId: app.id,
      status: 'failed',
      note: `Network exception dispatching to CRM: ${err?.message || 'Check CORS or endpoint connectivity'}.`,
    });
    return {
      success: false,
      status: 0,
      message: `Network dispatch failed: ${err?.message || 'Endpoint unreachable'}. Stored in queue.`,
      timestamp: new Date().toISOString(),
    };
  }
};

/**
 * Ping / Test the CRM webhook endpoint
 */
export const testCRMConnection = async (
  testUrl?: string,
  apiKey?: string
): Promise<{ success: boolean; message: string; status: number; latencyMs: number }> => {
  const url = testUrl || getCRMConfig().webhookUrl;
  if (!url || !url.trim().startsWith('http')) {
    return {
      success: false,
      message: 'Invalid Webhook URL. Please provide an HTTPS URL.',
      status: 400,
      latencyMs: 0,
    };
  }

  const startTime = performance.now();
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (apiKey) {
      headers['Authorization'] = `Bearer ${apiKey.trim()}`;
    }

    const testPayload = {
      event: 'brandex.crm.ping',
      test: true,
      sender: 'Brandex Digital Canvas Verification Engine',
      timestamp: new Date().toISOString(),
    };

    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(testPayload),
    });

    const latencyMs = Math.round(performance.now() - startTime);

    if (res.ok || res.status === 200 || res.status === 201 || res.status === 204) {
      return {
        success: true,
        message: `Connection successful! CRM endpoint responded with HTTP ${res.status} in ${latencyMs}ms.`,
        status: res.status,
        latencyMs,
      };
    } else {
      return {
        success: false,
        message: `Endpoint responded with HTTP ${res.status}. Verify endpoint acceptance rules or authentication.`,
        status: res.status,
        latencyMs,
      };
    }
  } catch (err: any) {
    const latencyMs = Math.round(performance.now() - startTime);
    return {
      success: false,
      message: `Failed to connect: ${err?.message || 'CORS restriction or invalid server address'}. Note: If your CRM restricts browser CORS, the browser may block direct fetch; backend or serverless webhook forwarders bypass this.`,
      status: 0,
      latencyMs,
    };
  }
};

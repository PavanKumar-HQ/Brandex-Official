/**
 * Brandex CRM Integration Service
 * Dispatches website inquiries directly into the Brandex CRM Leads Pipeline
 */

export interface LeadPayload {
  name: string;
  contact: string;
  service: string;
  description: string;
  source?: string;
  companyName?: string;
}

const CRM_API_URL = import.meta.env.VITE_CRM_API_URL || 'http://localhost:3000';

export async function dispatchLeadToCRM(lead: LeadPayload): Promise<{ success: boolean; data?: any; error?: string }> {
  const isEmail = lead.contact.includes('@');
  
  const crmBody = {
    contactPerson: lead.name,
    email: isEmail ? lead.contact.trim() : undefined,
    phone: !isEmail ? lead.contact.trim() : undefined,
    companyName: lead.companyName || 'Website Client Lead',
    serviceInterested: lead.service,
    notes: lead.description,
    source: lead.source || 'Brandex Website Intake',
    stage: 'New Lead',
    priority: 'High',
  };

  try {
    // 1. Dispatch directly to CRM API
    const res = await fetch(`${CRM_API_URL}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(crmBody),
    });

    if (res.ok) {
      const data = await res.json();
      return { success: true, data };
    }
  } catch (err: any) {
    console.warn('[CRM Sync Notice] Direct API dispatch offline/skipped:', err?.message || err);
  }

  // Fallback: save to browser offline lead queue
  try {
    const queue = JSON.parse(localStorage.getItem('brandex_crm_leads_queue') || '[]');
    queue.unshift({
      ...crmBody,
      timestamp: new Date().toISOString(),
      status: 'QUEUED_FOR_SYNC',
    });
    localStorage.setItem('brandex_crm_leads_queue', JSON.stringify(queue));
  } catch (e) {
    // storage fallback
  }

  return { success: true };
}

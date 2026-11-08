import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Webhook,
  Activity,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  RefreshCw,
  Send,
  ShieldCheck,
  Database,
  ArrowRight,
  ExternalLink,
  Sliders,
  Clock,
  Layers,
  Sparkles,
  Code2,
  Terminal,
  Zap,
} from 'lucide-react';
import SEOTags from '@/components/SEOTags';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  getCRMConfig,
  saveCRMConfig,
  testCRMConnection,
  dispatchApplicationToCRM,
  getCRMLogs,
  CRMConfig,
} from '@/services/crmService';
import {
  getAllApplicationsSync,
  getApplicationsStats,
  ApplicationRecord,
} from '@/services/applicationService';

export const CRMBridgePage: React.FC = () => {
  const [config, setConfig] = useState<CRMConfig>(getCRMConfig());
  const [webhookUrlInput, setWebhookUrlInput] = useState(config.webhookUrl);
  const [apiKeyInput, setApiKeyInput] = useState(config.apiKey || '');
  const [providerInput, setProviderInput] = useState(config.provider || 'custom');

  const [applications, setApplications] = useState<ApplicationRecord[]>([]);
  const [stats, setStats] = useState(getApplicationsStats());
  const [activeFilter, setActiveFilter] = useState<'all' | 'pending' | 'synced'>('all');

  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    message: string;
    status: number;
    latencyMs: number;
  } | null>(null);

  const [isSyncingAll, setIsSyncingAll] = useState(false);
  const [syncFeedback, setSyncFeedback] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string>('');
  const [copiedCurl, setCopiedCurl] = useState(false);
  const [selectedPayload, setSelectedPayload] = useState<ApplicationRecord | null>(null);

  const loadData = () => {
    const apps = getAllApplicationsSync();
    setApplications(apps);
    setStats(getApplicationsStats());
    setConfig(getCRMConfig());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = saveCRMConfig({
      webhookUrl: webhookUrlInput.trim(),
      apiKey: apiKeyInput.trim(),
      provider: providerInput as any,
    });
    setConfig(updated);
    setTestResult(null);
    setSyncFeedback('CRM configuration saved successfully.');
    setTimeout(() => setSyncFeedback(''), 4000);
  };

  const handleTestConnection = async () => {
    setIsTesting(true);
    setTestResult(null);
    try {
      const result = await testCRMConnection(webhookUrlInput.trim(), apiKeyInput.trim());
      setTestResult(result);
    } finally {
      setIsTesting(false);
    }
  };

  const handleSyncAllPending = async () => {
    setIsSyncingAll(true);
    setSyncFeedback('');
    try {
      const pending = applications.filter(
        (a) => a.crmStatus === 'pending' || a.crmStatus === 'waiting_connection'
      );
      if (pending.length === 0) {
        setSyncFeedback('All applications are already synced to CRM.');
        return;
      }

      let successCount = 0;
      let failCount = 0;

      for (const app of pending) {
        const res = await dispatchApplicationToCRM(app);
        if (res.success) {
          app.crmStatus = 'synced';
          app.crmSyncedAt = new Date().toISOString();
          successCount++;
        } else {
          failCount++;
        }
      }

      localStorage.setItem('brandex_applications', JSON.stringify(applications));
      loadData();
      setSyncFeedback(
        `Sync completed: ${successCount} leads streamed to CRM${failCount > 0 ? `, ${failCount} queued for retry` : ''}.`
      );
    } finally {
      setIsSyncingAll(false);
      setTimeout(() => setSyncFeedback(''), 5000);
    }
  };

  const handleDispatchSingle = async (app: ApplicationRecord) => {
    const res = await dispatchApplicationToCRM(app);
    if (res.success) {
      app.crmStatus = 'synced';
      app.crmSyncedAt = new Date().toISOString();
      localStorage.setItem('brandex_applications', JSON.stringify(applications));
      loadData();
      setSyncFeedback(`Successfully streamed application ${app.id} into CRM.`);
    } else {
      setSyncFeedback(`CRM dispatch failed: ${res.message}`);
    }
    setTimeout(() => setSyncFeedback(''), 4000);
  };

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(''), 2000);
  };

  const curlExample = `curl -X POST "${config.webhookUrl || 'https://api.yourcrm.com/v1/leads'}" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${config.apiKey || 'YOUR_CRM_API_KEY'}" \\
  -d '{
    "source": "Brandex Digital Canvas",
    "applicationId": "BX-COM-2026-8812",
    "applicationType": "community",
    "applicantName": "Pavan Kumar",
    "applicantEmail": "pavan@brandex.co.in",
    "track": "Artificial Intelligence",
    "status": "Under Review"
  }'`;

  const filteredApps = applications.filter((app) => {
    if (activeFilter === 'pending') {
      return app.crmStatus === 'pending' || app.crmStatus === 'waiting_connection';
    }
    if (activeFilter === 'synced') {
      return app.crmStatus === 'synced';
    }
    return true;
  });

  return (
    <>
      <SEOTags
        title="Brandex CRM Bridge & Real-Time Lead Pipeline | Brandex"
        description="Connect Brandex digital canvas applications, workshop registrations, cohorts, and consultations directly into your company CRM with real-time webhooks."
        canonicalUrl="https://www.brandex.co.in/crm-bridge"
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl pt-8 sm:pt-10">
        <Breadcrumb
          items={[
            { label: 'Application Status', href: '/status' },
            { label: 'CRM Bridge Pipeline' },
          ]}
          className="mb-4"
        />
      </div>

      <div className="min-h-screen pb-20 bg-background text-foreground">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl space-y-8">
          {/* Header Banner */}
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Ambient Violet/Indigo Halo */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-violet-950/80 border border-violet-700/50 text-violet-300 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        config.isConnected ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400 animate-pulse'
                      }`}
                    />
                    <span>
                      {config.isConnected
                        ? 'CRM Bridge Connected & Active'
                        : 'API Waiting for CRM Connection'}
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <NavLink
                    to="/status"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                  >
                    <span>Track Applications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </NavLink>
                </div>
              </div>

              <div className="space-y-2 max-w-3xl">
                <h1 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight">
                  Brandex CRM Bridge &amp; Real-Time Lead API
                </h1>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Every user submission across Brandex—community guild memberships, technical cohorts,
                  institutional MoU partnerships, career leads, and consultation inquiries—generates a
                  guaranteed Unique Application ID and is automatically queued to feed into your company's CRM.
                </p>
              </div>

              {/* Real-Time Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3.5">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                    Total Applications
                  </div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">
                    {stats.total}
                  </div>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3.5">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                    Synced to CRM
                  </div>
                  <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">
                    {stats.syncedCRM}
                  </div>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3.5">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                    Waiting / In Queue
                  </div>
                  <div className="text-2xl font-bold font-mono text-amber-400 mt-1">
                    {stats.pendingCRM}
                  </div>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3.5">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                    Webhook Provider
                  </div>
                  <div className="text-sm font-bold uppercase text-indigo-300 mt-2 truncate">
                    {config.provider}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Toast Notification Alert */}
          {syncFeedback && (
            <div className="p-4 bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-900 rounded-2xl text-violet-800 dark:text-violet-200 text-sm font-semibold flex items-center justify-between animate-fade-in shadow-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-violet-600 dark:text-violet-400 shrink-0" />
                <span>{syncFeedback}</span>
              </div>
              <button
                onClick={() => setSyncFeedback('')}
                className="text-xs underline text-violet-600 hover:text-violet-800 font-bold"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Main Grid: CRM Config & Waiting API */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: CRM Config Panel */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-card border-2 border-border/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800 flex items-center justify-center text-violet-600 dark:text-violet-400">
                      <Webhook className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold font-display text-foreground">
                        CRM Webhook Configuration
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        Connect your company CRM endpoint to receive real-time application events
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSaveConfig} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="webhookUrl" className="text-xs font-bold uppercase text-muted-foreground">
                      CRM Webhook URL / REST Ingestion Endpoint *
                    </Label>
                    <Input
                      id="webhookUrl"
                      type="url"
                      value={webhookUrlInput}
                      onChange={(e) => setWebhookUrlInput(e.target.value)}
                      placeholder="https://crm.yourcompany.com/api/webhooks/brandex-leads"
                      className="font-mono text-xs h-11"
                      required
                    />
                    <p className="text-[11px] text-muted-foreground">
                      Brandex will issue an automated HTTP POST request to this URL whenever a form is submitted.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="apiKey" className="text-xs font-bold uppercase text-muted-foreground">
                      Bearer Token / API Authorization Key (Optional)
                    </Label>
                    <Input
                      id="apiKey"
                      type="password"
                      value={apiKeyInput}
                      onChange={(e) => setApiKeyInput(e.target.value)}
                      placeholder="e.g. sk_live_crm_9480944727..."
                      className="font-mono text-xs h-11"
                    />
                    <p className="text-[11px] text-muted-foreground">
                      Sent via <code>Authorization: Bearer &lt;key&gt;</code> and <code>X-Brandex-API-Key</code> headers.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="provider" className="text-xs font-bold uppercase text-muted-foreground">
                      Target CRM Architecture
                    </Label>
                    <select
                      id="provider"
                      value={providerInput}
                      onChange={(e) => setProviderInput(e.target.value as any)}
                      className="w-full h-11 px-3 text-xs bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-600"
                    >
                      <option value="custom">Brandex Internal CRM / Custom Webhook</option>
                      <option value="hubspot">HubSpot Enterprise Leads API</option>
                      <option value="zoho">Zoho CRM Ingestion</option>
                      <option value="salesforce">Salesforce REST Gateway</option>
                      <option value="zapier">Zapier / Make Automation Webhook</option>
                    </select>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <Button
                      type="submit"
                      className="flex-1 bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs h-11 rounded-xl"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-1.5" /> Save &amp; Connect CRM
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleTestConnection}
                      disabled={isTesting || !webhookUrlInput.trim()}
                      className="h-11 rounded-xl text-xs font-semibold"
                    >
                      {isTesting ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 mr-1.5 animate-spin" /> Testing...
                        </>
                      ) : (
                        <>
                          <Activity className="w-3.5 h-3.5 mr-1.5 text-violet-600" /> Test Ping
                        </>
                      )}
                    </Button>
                  </div>
                </form>

                {/* Ping Result Box */}
                {testResult && (
                  <div
                    className={`p-4 rounded-2xl border text-xs space-y-1.5 animate-fade-in ${
                      testResult.success
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                        : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold">
                      {testResult.success ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-rose-600" />
                      )}
                      <span>
                        {testResult.success
                          ? `Connection Verified (Latency: ${testResult.latencyMs}ms)`
                          : `Connection Notice (Code ${testResult.status})`}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed">{testResult.message}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Waiting API Specification */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-card border-2 border-border/80 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold font-display text-foreground">
                        Waiting API Specification
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        Standard JSON payload delivered into your company CRM
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(curlExample);
                      setCopiedCurl(true);
                      setTimeout(() => setCopiedCurl(false), 2000);
                    }}
                    className="p-2 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground text-xs flex items-center gap-1 font-semibold transition-colors"
                  >
                    {copiedCurl ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy cURL</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Brandex dispatches HTTP POST payloads with strict JSON schema containing verified candidate metadata,
                    program tracks, and deterministic Unique Application IDs:
                  </div>

                  <div className="bg-slate-950 text-slate-200 rounded-2xl p-4 font-mono text-[11px] overflow-x-auto border border-slate-800 space-y-1">
                    <div className="text-slate-500">// Real-time CRM Payload Structure</div>
                    <pre className="text-emerald-400">{`{
  "source": "Brandex Digital Canvas",
  "applicationId": "BX-COM-2026-8812",
  "applicationType": "community" | "cohort" | "institution" | "career" | "contact",
  "applicantName": "Pavan Kumar",
  "applicantEmail": "pavan@brandex.co.in",
  "applicantPhone": "+91 94809 44727",
  "organization": "Brandex Technologies Bangalore",
  "trackOrProgram": "Artificial Intelligence & Distributed Systems",
  "formData": {
    "experienceLevel": "Senior",
    "domains": ["AI", "Systems", "Swiss UI"]
  },
  "status": "Submitted" | "Under Review",
  "submittedAt": "${new Date().toISOString()}"
}`}</pre>
                  </div>
                </div>

                <div className="p-3.5 bg-violet-50/70 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-900/50 rounded-2xl text-xs space-y-1">
                  <div className="font-bold text-violet-900 dark:text-violet-200 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-violet-600" />
                    <span>Automatic Retry Queue &amp; Resilience</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                    If your CRM is temporarily offline, applications are securely buffered in the database queue
                    and re-attempted when the connection re-establishes or when you trigger "Sync All".
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Incoming Applications / CRM Queue Table */}
          <div className="bg-card border-2 border-border/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
              <div>
                <h3 className="text-xl font-bold font-display text-foreground">
                  Incoming Applications &amp; CRM Sync Queue
                </h3>
                <p className="text-xs text-muted-foreground">
                  Real-time applications ready to be streamed or verified
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex bg-secondary/70 p-1 rounded-xl text-xs font-semibold">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      activeFilter === 'all' ? 'bg-background shadow-xs text-foreground font-bold' : 'text-muted-foreground'
                    }`}
                  >
                    All ({applications.length})
                  </button>
                  <button
                    onClick={() => setActiveFilter('pending')}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      activeFilter === 'pending' ? 'bg-background shadow-xs text-amber-600 font-bold' : 'text-muted-foreground'
                    }`}
                  >
                    Waiting ({stats.pendingCRM})
                  </button>
                  <button
                    onClick={() => setActiveFilter('synced')}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      activeFilter === 'synced' ? 'bg-background shadow-xs text-emerald-600 font-bold' : 'text-muted-foreground'
                    }`}
                  >
                    Synced ({stats.syncedCRM})
                  </button>
                </div>

                <Button
                  onClick={handleSyncAllPending}
                  disabled={isSyncingAll || stats.pendingCRM === 0}
                  className="bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs h-9 rounded-xl"
                >
                  <Send className="w-3.5 h-3.5 mr-1.5" />
                  <span>Sync {stats.pendingCRM} Pending</span>
                </Button>
              </div>
            </div>

            {/* Applications List */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-border text-muted-foreground uppercase tracking-wider text-[10px]">
                    <th className="py-3 px-3">Unique ID</th>
                    <th className="py-3 px-3">Applicant Name</th>
                    <th className="py-3 px-3">Type &amp; Track</th>
                    <th className="py-3 px-3">Submitted</th>
                    <th className="py-3 px-3">CRM Status</th>
                    <th className="py-3 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {filteredApps.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-muted-foreground">
                        No applications found under this filter.
                      </td>
                    </tr>
                  ) : (
                    filteredApps.map((app) => {
                      const isSynced = app.crmStatus === 'synced';
                      return (
                        <tr key={app.id} className="hover:bg-secondary/30 transition-colors">
                          <td className="py-3.5 px-3">
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono font-bold text-violet-600 dark:text-violet-400">
                                {app.id}
                              </span>
                              <button
                                onClick={() => handleCopyId(app.id)}
                                title="Copy Unique ID"
                                className="p-1 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground"
                              >
                                {copiedId === app.id ? (
                                  <Check className="w-3 h-3 text-emerald-600" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </button>
                            </div>
                          </td>

                          <td className="py-3.5 px-3">
                            <div className="font-bold text-foreground">{app.name}</div>
                            <div className="text-[11px] text-muted-foreground">{app.email}</div>
                          </td>

                          <td className="py-3.5 px-3">
                            <span className="inline-block px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-[10px] font-bold uppercase mb-1">
                              {app.type}
                            </span>
                            <div className="text-[11px] text-muted-foreground truncate max-w-xs">
                              {app.track || app.organization || 'General Inquiry'}
                            </div>
                          </td>

                          <td className="py-3.5 px-3 text-muted-foreground">
                            {new Date(app.createdAt).toLocaleDateString()}
                          </td>

                          <td className="py-3.5 px-3">
                            {isSynced ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                <span>Synced</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-[10px] font-bold">
                                <Clock className="w-3 h-3 text-amber-600" />
                                <span>Waiting Connection</span>
                              </span>
                            )}
                          </td>

                          <td className="py-3.5 px-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              {!isSynced && (
                                <button
                                  onClick={() => handleDispatchSingle(app)}
                                  className="px-2.5 py-1 rounded-lg bg-violet-50 hover:bg-violet-100 dark:bg-violet-950 dark:hover:bg-violet-900 text-violet-700 dark:text-violet-300 font-semibold text-[11px] transition-colors"
                                >
                                  Dispatch
                                </button>
                              )}
                              <NavLink
                                to={`/status?id=${app.id}`}
                                className="px-2.5 py-1 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground font-semibold text-[11px] inline-flex items-center gap-1 transition-colors"
                              >
                                <span>Inspect</span>
                                <ExternalLink className="w-3 h-3 text-muted-foreground" />
                              </NavLink>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CRMBridgePage;

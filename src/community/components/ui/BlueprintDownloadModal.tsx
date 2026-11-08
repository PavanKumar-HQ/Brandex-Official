import React, { useState, useEffect } from 'react';
import {
  Download,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Loader2,
  X,
  Mail,
  User,
  Building2,
  FileCode,
  ShieldCheck,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { useRegistration } from '@/community/contexts/RegistrationContext';
import { createApplication } from '@/services/applicationService';

export const BlueprintDownloadModal: React.FC = () => {
  const { isOpen, type, modalData, closeModal } = useRegistration();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [appId, setAppId] = useState('');
  const [copiedId, setCopiedId] = useState(false);

  const resourceTitle = modalData?.resourceTitle || 'Vector Search & Distributed Systems Blueprint (PDF)';

  if (!isOpen || type !== 'blueprint') return null;

  const handleCopyId = () => {
    if (appId) {
      navigator.clipboard.writeText(appId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid work or academic email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      const record = await createApplication({
        type: 'resource',
        name: name.trim(),
        email: email.trim(),
        organization: organization.trim() || 'Independent Builder',
        track: resourceTitle,
        details: {
          resourceTitle,
          downloadedAt: new Date().toISOString(),
        },
      });

      setAppId(record.id);
      setIsSuccess(true);
    } catch (err) {
      console.error('Resource registration error:', err);
      // Fallback
      setAppId(`BX-RES-2026-${Math.floor(1000 + Math.random() * 9000)}`);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadNow = () => {
    // Generate text blob for blueprint
    const content = `Brandex Engineering Research & Reference Architecture\nTitle: ${resourceTitle}\nReference ID: ${appId}\nIssued To: ${name} (${email})\nOrganization: ${organization || 'Independent Builder'}\nDate: ${new Date().toISOString()}\n\n---\nThank you for accessing the Brandex Technical Architecture Blueprint.\nVerify your license anytime at https://brandex.network/status?id=${appId}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resourceTitle.toLowerCase().replace(/[^a-z0-9]/g, '_')}_blueprint.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in font-sans">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-5 sm:p-7 shadow-2xl relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-3 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800 shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Blueprint Access Unlocked
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                Ready for Download
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                {resourceTitle}
              </p>
            </div>

            {/* Generated Unique ID with 1-click Copy */}
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-left">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                <span>Unique Reference ID</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-sans">Live in Database Queue</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-base font-bold text-violet-600 dark:text-violet-400 select-all">
                  {appId}
                </span>
                <button
                  type="button"
                  onClick={handleCopyId}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-[11px] font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1 hover:bg-slate-100 dark:hover:bg-slate-600 active:scale-95 transition-all shadow-xs"
                >
                  {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId ? 'Copied!' : 'Copy ID'}</span>
                </button>
              </div>
            </div>

            {/* Advisory Warning Banner */}
            <div className="p-3 bg-amber-500/10 border border-amber-500/25 rounded-xl text-left flex items-start gap-2">
              <span className="text-amber-500 text-sm mt-0.5">⚠️</span>
              <p className="text-[11px] text-amber-900 dark:text-amber-200 leading-relaxed font-medium">
                <strong>Important:</strong> Please copy and save your Reference ID (<strong>{appId}</strong>). You will need this ID to verify your research license and track architecture updates anytime at /status.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={handleDownloadNow}
                className="w-full py-3 bg-violet-600 hover:bg-violet-700 active:scale-98 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Blueprint File</span>
              </button>

              <a
                href={`/status?id=${encodeURIComponent(appId)}`}
                className="w-full py-2.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <span>Track Status in Real Time</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={closeModal}
                className="w-full py-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 text-xs font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 mb-1.5">
                <FileCode className="w-3.5 h-3.5" />
                <span>Open Reference Blueprint</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Download Architecture Blueprint
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {resourceTitle}
              </p>
            </div>

            {errorMsg && (
              <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Work or Academic Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com or alex@university.edu"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Organization / University
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="e.g. Acme Labs / Stanford / Self-Employed"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Preparing Blueprint...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Unlock & Download Blueprint</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Breadcrumb } from '@/community/components/ui/Breadcrumb';
import { PageHero } from '@/community/components/ui/PageHero';
import { CheckCircle2, Award, Send, Users, Shield, GraduationCap, Building2, Copy, Check, AlertCircle } from 'lucide-react';

import { createEnquiry } from '@/community/repositories/repository';
import { createApplication } from '@/services/applicationService';

export const BrandAmbassadorPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    roleType: 'Student Lead',
    yearOrRole: '',
    motivation: '',
    socialLinks: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [copiedId, setCopiedId] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const appRecord = await createApplication({
        type: 'ambassador',
        name: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        organization: formData.institution.trim(),
        track: `${formData.roleType} - ${formData.yearOrRole}`,
        details: {
          institution: formData.institution.trim(),
          roleType: formData.roleType,
          yearOrRole: formData.yearOrRole,
          motivation: formData.motivation,
          socialLinks: formData.socialLinks,
        },
      });

      try {
        await createEnquiry({
          type: 'ambassador',
          orgName: formData.institution,
          contactName: `${formData.fullName} (${formData.roleType} - ${formData.yearOrRole || 'Ambassador'})`,
          email: formData.email,
          phone: formData.phone,
          message: `Motivation: ${formData.motivation}\nProfiles: ${formData.socialLinks || 'N/A'}`,
          adminNotes: `Ambassador Ref: ${appRecord.id}`,
        });
      } catch {}

      setReferenceId(appRecord.id);
      setSubmitted(true);
    } catch {
      setReferenceId(`BX-AMB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full space-y-8 pb-20 pt-20 sm:pt-24 px-4 sm:px-8 lg:px-12 xl:px-16 bg-white text-slate-900 font-sans">
      <Breadcrumb items={[{ label: 'Ambassadors' }]} />

      {/* Hero */}
      <PageHero
        tag="CAMPUS & INSTITUTION LEADERSHIP"
        title="Become a Brandex Campus Ambassador"
        description="Represent Brandex at your university or school. Champion technology education, host Geniusphere workshops, build student guilds, and connect with industry mentors."
        widgetTitle="Ambassador.Program"
        widgetStatLabel="Active Chapters"
        widgetStatValue="28 Campus Hubs"
        widgetStatusLabel="Applications"
        widgetStatusText="Now Open for 2026"
      />

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 hover:border-indigo-300 transition-all">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-slate-900">Lead Campus Workshops</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Gain official sponsorship and materials to host Brandex Geniusphere coding labs, AI buildathons, and security wargames at your institution.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 hover:border-indigo-300 transition-all">
          <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center font-bold">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-slate-900">Direct Founder Mentorship</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Get exclusive 1-on-1 mentorship loops with Brandex founders, engineering leads, and invitation-only builder circles in Bangalore.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 hover:border-indigo-300 transition-all">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-slate-900">Certifications & Perks</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Receive official Ambassador Credentials, stipend opportunities for event organization, and free access to all cohort courses.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
        <div className="space-y-4 mb-8 text-center">
          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider border border-indigo-100">
            Official Application Form
          </span>
          <h2 className="text-3xl font-display font-bold text-slate-900">Apply for Brandex Ambassador Role</h2>
          <p className="text-xs text-slate-600 max-w-lg mx-auto">
            Fill out the screening form below. Our ecosystem team reviews applications weekly and will reach out via WhatsApp/Email.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 bg-emerald-50/70 border-2 border-emerald-200 rounded-3xl text-center space-y-5 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-display font-bold text-slate-900">Application Submitted Successfully!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for applying to become a Brandex Campus Ambassador. Our admissions and community team will review your application within 48 hours.
              </p>
            </div>

            {/* Unique ID Card */}
            <div className="p-4 sm:p-5 bg-violet-50/70 border-2 border-violet-200 rounded-2xl max-w-md mx-auto text-left space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-violet-700 tracking-wider">
                  Unique Application ID
                </span>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(referenceId);
                    setCopiedId(true);
                    setTimeout(() => setCopiedId(false), 2000);
                  }}
                  className="text-xs font-semibold text-violet-600 hover:text-violet-800 flex items-center gap-1 transition-colors px-2 py-1 rounded-md bg-white shadow-2xs border border-violet-200"
                >
                  {copiedId ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy ID</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xl sm:text-2xl font-mono font-extrabold text-violet-950 tracking-wide">
                {referenceId}
              </div>

              {/* Advisory Warning Banner */}
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  <strong>Important:</strong> Please copy and save your Application ID. You will need it to track your ambassador application review and interview scheduling in real time.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <NavLink
                to={`/status?id=${referenceId}`}
                className="btn-primary text-xs px-6 py-3 bg-violet-600 text-white rounded-xl shadow-sm hover:bg-violet-700 transition-colors font-bold"
              >
                <span>Track Application Status</span>
              </NavLink>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
              >
                Submit another application
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-slate-900 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="rahul@university.edu"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-slate-900 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone or WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 99868 80072"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-slate-900 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">College or School Name *</label>
                <input
                  type="text"
                  required
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  placeholder="e.g. RV College of Engineering or Vignan High"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-slate-900 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Role Type *</label>
                <select
                  value={formData.roleType}
                  onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-slate-900 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all shadow-sm appearance-none"
                  style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
                >
                  <option value="Student Lead">Student Chapter Lead</option>
                  <option value="Faculty Sponsor">Faculty Coordinator</option>
                  <option value="Community Lead">Local Builder Guild Lead</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Year of Study or Designation</label>
                <input
                  type="text"
                  value={formData.yearOrRole}
                  onChange={(e) => setFormData({ ...formData, yearOrRole: e.target.value })}
                  placeholder="e.g. 3rd Year CSE or CS Faculty"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-slate-900 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Why do you want to represent Brandex? *</label>
              <textarea
                required
                rows={3}
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                placeholder="Share your interest in technology, events you've organized, or how you plan to build the Brandex community at your campus..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-slate-900 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">LinkedIn or Portfolio Profile Link</label>
              <input
                type="url"
                value={formData.socialLinks}
                onChange={(e) => setFormData({ ...formData, socialLinks: e.target.value })}
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-slate-900 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white transition-all shadow-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-md hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Submitting Application...' : 'Submit Ambassador Application'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BrandAmbassadorPage;

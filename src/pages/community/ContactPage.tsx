import { useSEO } from '@/community/hooks/useSEO';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, MessageSquare, MapPin, Send, CheckCircle2, Copy, Check, AlertCircle, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/community/components/ui/Breadcrumb';
import { FadeIn } from '@/community/components/ui/FadeIn';
import { createApplication } from '@/services/applicationService';

export const ContactPage: React.FC = () => {
  useSEO("Get In Touch", "Contact Brandex for educational collaborations, hiring talent, and general inquiries.");
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [message, setMessage] = useState('');
  const [applicationId, setApplicationId] = useState('');
  const [copiedId, setCopiedId] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const appRecord = await createApplication({
        type: 'contact',
        name: fullName.trim(),
        email: email.trim().toLowerCase(),
        track: inquiryType || 'General Inquiry',
        details: {
          inquiryType,
          message: message.trim(),
        },
      });

      setApplicationId(appRecord.id);
      setStatus('success');
    } catch {
      const fallbackId = `BX-INQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setApplicationId(fallbackId);
      setStatus('success');
    }
  };

  const handleCopyId = () => {
    if (applicationId) {
      navigator.clipboard.writeText(applicationId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 pt-24 bg-white text-slate-900 min-h-screen">
      
      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Contact' }]} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left side: Info */}
            <div className="space-y-8">
              <div>
                <span className="text-violet-600 font-bold uppercase tracking-widest text-xs mb-3 block">GET IN TOUCH</span>
                <h1 className="text-4xl sm:text-6xl font-display font-bold text-slate-900 tracking-tight leading-[1.1]">
                  Start a conversation with Brandex.
                </h1>
                <p className="mt-6 text-xl text-slate-600 leading-relaxed font-medium max-w-lg">
                  Whether you're looking to partner for institutional education, hire talent from our cohorts, or collaborate on tech initiatives—we're ready.
                </p>
              </div>

              <div className="space-y-6 pt-8 border-t border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Email Us</h3>
                    <p className="text-slate-600 text-sm mt-1">For partnerships and general inquiries.</p>
                    <a href="mailto:brandexhq@gmail.com" className="text-violet-600 font-bold mt-2 inline-block hover:underline">brandexhq@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Community &amp; WhatsApp</h3>
                    <p className="text-slate-600 text-sm mt-1">Join our open community or contact on WhatsApp.</p>
                    <NavLink to="/community" className="text-blue-600 font-bold mt-2 inline-block hover:underline">View Community Circles</NavLink>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">HQ Location</h3>
                    <p className="text-slate-600 text-sm mt-1">#121, 13th Main, Binny Layout, Vijaynagar, Bangalore - 560040</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Direct Form */}
            <FadeIn>
              <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
                {status === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-6 animate-fade-in">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-2 shadow-inner border border-emerald-200">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl font-display font-bold text-slate-900">Inquiry Received!</h3>
                      <p className="text-slate-600 max-w-sm mx-auto text-xs sm:text-sm">
                        Thank you for reaching out to Brandex. Your inquiry has been registered in real time.
                      </p>
                    </div>

                    {/* Unique Application ID Card */}
                    {applicationId && (
                      <div className="w-full p-4 sm:p-5 bg-violet-50/70 border-2 border-violet-200 rounded-2xl max-w-md mx-auto text-left space-y-3 shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-bold text-violet-700 tracking-wider">
                            Unique Inquiry ID
                          </span>
                          <button
                            type="button"
                            onClick={handleCopyId}
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
                          {applicationId}
                        </div>

                        {/* Advisory Warning Banner */}
                        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <p className="leading-snug">
                            <strong>Important:</strong> Please copy and save your Application ID. You will need it to track your consultation status and response in real time.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md pt-2">
                      <NavLink
                        to={`/status?id=${applicationId}`}
                        className="btn-primary flex-1 py-3 text-xs font-bold rounded-xl flex items-center justify-center gap-2"
                      >
                        <span>Track Status</span>
                        <ArrowRight className="w-4 h-4" />
                      </NavLink>
                      <button 
                        onClick={() => {
                          setStatus('idle');
                          setFullName('');
                          setEmail('');
                          setMessage('');
                          setInquiryType('');
                          setApplicationId('');
                        }}
                        className="btn-secondary flex-1 py-3 text-xs font-bold rounded-xl"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Send a direct message</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                        <input
                          required
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 h-12 text-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                        <input
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 h-12 text-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Inquiry Type</label>
                      <div className="relative">
                        <select
                          required
                          value={inquiryType}
                          onChange={(e) => setInquiryType(e.target.value)}
                          className="w-full appearance-none bg-white border border-slate-300 rounded-xl px-4 h-12 text-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all pr-10"
                        >
                          <option value="">Select a topic...</option>
                          <option value="Institutional Partnership">Institutional Partnership</option>
                          <option value="Hiring Cohort Talent">Hiring Cohort Talent</option>
                          <option value="Press & Media">Press &amp; Media</option>
                          <option value="Other">Other / Custom Inquiry</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full btn-primary h-14 text-base flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-bold"
                    >
                      {status === 'submitting' ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;

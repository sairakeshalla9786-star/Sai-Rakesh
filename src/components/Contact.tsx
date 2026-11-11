import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, AlertCircle, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'pending' | 'success' | 'activation_required' | 'fallback'>('pending');

  const constructWhatsAppUrl = (name: string, email: string, msg: string) => {
    const text = `Hello Sai Rakesh,\n\nI am contacting you from your portfolio website.\n\n*Name:* ${name || 'Visitor'}\n*Email:* ${email || 'Not provided'}\n\n*Message:*\n${msg}`;
    return `https://api.whatsapp.com/send?phone=${PERSONAL_INFO.whatsappRaw}&text=${encodeURIComponent(text)}`;
  };

  const constructMailtoUrl = (name: string, email: string, msg: string) => {
    const subject = `Portfolio Inquiry from ${name || 'Visitor'}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}\n\n---\nSent via portfolio contact form to ${PERSONAL_INFO.email}`;
    return `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waUrl = constructWhatsAppUrl(formData.name, formData.email, formData.message);
    const mailUrl = constructMailtoUrl(formData.name, formData.email, formData.message);

    // 1. SYNCHRONOUSLY open WhatsApp tab directly in the user click gesture stack
    // (Calling window.open synchronously avoids browser popup-blocker restrictions)
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn('Popup blocked or failed to open WhatsApp synchronously', err);
    }

    // 2. Concurrently dispatch email to sairakeshalla9786@gmail.com via FormSubmit API
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name || 'Visitor'}`,
          _template: 'table',
        }),
      });

      const data = await response.json();
      if (data.message && data.message.toLowerCase().includes('activation')) {
        setEmailStatus('activation_required');
      } else if (data.success === 'true' || data.success === true) {
        setEmailStatus('success');
      } else {
        setEmailStatus('activation_required');
      }
    } catch (error) {
      console.warn('FormSubmit request failed, using mailto fallback', error);
      setEmailStatus('fallback');
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Send a Message
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Fill in your details below. Clicking <strong className="text-slate-900 dark:text-white">Send the Message</strong> will directly send your message to both WhatsApp and Email.
          </p>
        </div>

        {/* Clean Centered Contact Form Card */}
        <div className="max-w-2xl mx-auto p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-sm">
          {submitted ? (
            <div className="py-6 text-center space-y-5">
              <div className="inline-flex p-3.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Message Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mt-1 leading-relaxed">
                  Your message has been dispatched to WhatsApp (<span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{PERSONAL_INFO.whatsappNumber}</span>) and Email (<span className="font-mono text-cyan-600 dark:text-cyan-400 font-semibold">{PERSONAL_INFO.email}</span>).
                </p>
              </div>

              {/* One-Time Activation Reminder Notice */}
              <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 text-left text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-2 font-mono font-semibold text-cyan-900 dark:text-cyan-300">
                  <AlertCircle className="w-4 h-4 shrink-0 text-cyan-500" />
                  <span>Important for Sai Rakesh (Email Delivery Setup)</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  To complete automated inbox delivery to <strong className="text-slate-900 dark:text-white font-mono">{PERSONAL_INFO.email}</strong>, check your Gmail inbox (or Spam folder) for an email from <strong>FormSubmit</strong> titled <em>"Action Required: Activate FormSubmit"</em> and click <strong>"Activate Form"</strong> once. After that one-time click, all future portfolio messages will arrive automatically in your inbox!
                </p>
              </div>

              {/* Direct Instant Action Links */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Direct Links to verify or re-open:
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={constructWhatsAppUrl(formData.name, formData.email, formData.message)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Chat</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={constructMailtoUrl(formData.name, formData.email, formData.message)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open Mail App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-mono rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Name <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Email <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message <span className="text-cyan-500">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-y"
                />
              </div>

              {/* Single Submission Button: Send the Message */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-mono font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 disabled:opacity-50 transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send the Message'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

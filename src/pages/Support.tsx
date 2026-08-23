import { useState } from 'react';
import { Send, CheckCircle, HelpCircle, Mail, MessageSquare, Globe, ChevronDown } from 'lucide-react';

export default function Support() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  
  const categories = [
    'Bug Report',
    'Payment Issue',
    'Account/Login Issue',
    'Game Download/Installation Issue',
    'Feedback / Suggestions'
  ];

  const faqs = [
    { q: 'Game not launching?', a: 'Restart the launcher or verify your game files in the library.' },
    { q: 'Download stuck?', a: 'Check your internet connection or clear the download cache in settings.' },
    { q: 'Login failed?', a: 'Reset your password using the "Forgot Password" link on the login screen.' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a random ticket ID
    const randomId = Math.floor(1000 + Math.random() * 9000);
    setTicketId(`NP-${randomId}`);
    setIsSubmitted(true);
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
      <div className="max-w-4xl mx-auto space-y-12 pb-20">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-brand/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-brand" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Nexus Play Support</h1>
          <p className="text-[#a0a5b8]">
            We're here to help! Report issues, ask questions, and communicate with the Nexus Play team efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Form Section */}
          <div className="md:col-span-2">
            <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-8 shadow-xl">
              <h2 className="text-xl font-bold text-white mb-6">Submit a Request</h2>
              
              {isSubmitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center flex flex-col items-center animate-in fade-in zoom-in duration-300">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Request Submitted!</h3>
                  <p className="text-[#a0a5b8] mb-6">
                    Your request has been submitted successfully. Our support team will get back to you shortly.
                  </p>
                  <div className="bg-[#2a2a2a] px-6 py-3 rounded-lg text-white font-mono text-lg border border-[#3a3a3a] mb-6 inline-block">
                    Ticket ID: <span className="text-brand font-bold">{ticketId}</span>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand hover:text-white transition-colors underline font-medium"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#a0a5b8]">Username / Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. game4purpose" 
                        className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl px-4 py-3 text-white placeholder-[#666] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#a0a5b8]">Email ID</label>
                      <input 
                        type="email" 
                        required
                        placeholder="your@email.com" 
                        className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl px-4 py-3 text-white placeholder-[#666] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#a0a5b8]">Issue Category</label>
                    <div className="relative">
                      <select 
                        required
                        className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                      >
                        <option value="" disabled selected>Select an issue category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a0a5b8] pointer-events-none w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#a0a5b8]">Message</label>
                    <textarea 
                      required
                      placeholder="Describe your issue in detail..." 
                      rows={5}
                      className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl px-4 py-3 text-white placeholder-[#666] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-brand text-white font-bold rounded-xl px-4 py-4 flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-brand/20 active:scale-[0.98]"
                  >
                    <Send className="w-5 h-5" />
                    Submit Ticket
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar Info Section */}
          <div className="space-y-6">
            
            {/* Quick Help / FAQ */}
            <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-purple-400" />
                Quick Solutions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-[#2a2a2a] rounded-xl p-4 border border-[#3a3a3a]">
                    <h4 className="text-white font-medium text-sm mb-1">{faq.q}</h4>
                    <p className="text-[#a0a5b8] text-xs leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Alternatives */}
            <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-white mb-4">Other ways to reach us</h3>
              <div className="space-y-3">
                <a href="mailto:support@nexusplay.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#2a2a2a] border border-transparent hover:border-[#3a3a3a] transition-all group">
                  <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500 text-blue-400 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Email Us</div>
                    <div className="text-[#a0a5b8] text-xs">support@nexusplay.com</div>
                  </div>
                </a>
                
                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#2a2a2a] border border-transparent hover:border-[#3a3a3a] transition-all group text-left">
                  <div className="bg-green-500/20 p-2 rounded-lg group-hover:bg-green-500 text-green-400 group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Live Chat</div>
                    <div className="text-[#a0a5b8] text-xs">Available 24/7</div>
                  </div>
                </button>

                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#2a2a2a] border border-transparent hover:border-[#3a3a3a] transition-all group text-left">
                  <div className="bg-[#5865F2]/20 p-2 rounded-lg group-hover:bg-[#5865F2] text-[#5865F2] group-hover:text-white transition-colors">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Community Discord</div>
                    <div className="text-[#a0a5b8] text-xs">Join 50k+ members</div>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

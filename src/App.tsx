import React, { useState } from 'react';
import { Users, Calendar, Phone, ChevronLeft, Sparkles } from 'lucide-react';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfSevhCBxU11iJtjW3qvoPK6f0EeCphKV6TeTCjYhZjRgPv1g/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      setFormSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => setFormSubmitted(false), 3000);
    } catch (error) {
      alert('Error submitting the form. Our team will resolve this issue soon.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Consult Your Rutvik
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-300 mb-8">
            <Sparkles className="w-5 h-5" />
            <p className="text-xl">Expert guidance for your sacred rituals</p>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-purple-500/20">
          <form onSubmit={handleSubmit} className="space-y-6" target="hidden_iframe">
            {/* Personal Details Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-purple-300 mb-4">
                <Users className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Personal Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-300">Husband Name</label>
                  <input
                    type="text"
                    name="entry.1329160210"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 text-white placeholder-purple-300/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-300">Wife Name</label>
                  <input
                    type="text"
                    name="entry.1296700235"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 text-white placeholder-purple-300/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-300">Other Name</label>
                  <input
                    type="text"
                    name="entry.2085991295"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 text-white placeholder-purple-300/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Nakshatram Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-purple-300 mb-4">
                <Sparkles className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Nakshatram Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-300">Husband Nakshatram</label>
                  <input
                    type="text"
                    name="entry.141097842"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 text-white placeholder-purple-300/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-300">Wife Nakshatram</label>
                  <input
                    type="text"
                    name="entry.608599130"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 text-white placeholder-purple-300/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-300">Other Nakshatram</label>
                  <input
                    type="text"
                    name="entry.1120162163"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 text-white placeholder-purple-300/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Birth Details Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-purple-300 mb-4">
                <Calendar className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Birth Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-purple-300">Husband DOB</label>
                    <input
                      type="date"
                      name="entry.1734469024"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-purple-300">Husband Time of Birth</label>
                    <input
                      type="time"
                      name="entry.1675682512"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-purple-300">Wife DOB</label>
                    <input
                      type="date"
                      name="entry.85633826"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-purple-300">Wife Time of Birth</label>
                    <input
                      type="time"
                      name="entry.1645408357"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-purple-300">Others DOB</label>
                    <input
                      type="date"
                      name="entry.1093203031"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-purple-300">Others Time of Birth</label>
                    <input
                      type="time"
                      name="entry.577654357"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-purple-300 mb-4">
                <Phone className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Contact Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-300">Contact Number</label>
                  <input
                    type="tel"
                    name="entry.564577423"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 text-white placeholder-purple-300/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-300">Alternative Contact Number</label>
                  <input
                    type="tel"
                    name="entry.144817109"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/30 text-white placeholder-purple-300/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900 transition-all duration-300"
              >
                Submit Details
              </button>
              <a
                href="https://upadrastaharshavardhan.github.io/rutvikservices/"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-900/50 text-purple-300 font-semibold rounded-lg hover:bg-purple-900/70 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
                Back
              </a>
            </div>
          </form>

          <iframe name="hidden_iframe" className="hidden" />
        </div>

        {/* Success Message */}
        {formSubmitted && (
          <div className="fixed inset-0 flex items-center justify-center px-4 z-50">
            <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-2 animate-fade-in">
              <Sparkles className="w-5 h-5" />
              <p className="font-medium">Form submitted successfully! Our team will connect with you soon.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
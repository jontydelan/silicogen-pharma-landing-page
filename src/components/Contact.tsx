import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 1. Save to Firebase Firestore
      try {
        await addDoc(collection(db, 'contactMessages'), {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          createdAt: serverTimestamp()
        });
      } catch (error) {
        handleFirestoreError(error, OperationType.CREATE, 'contactMessages');
      }

      // 2. Send Email via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      if (data.simulated) {
        alert(data.message + '\n\n(However, your message WAS successfully saved to the Firebase database!)');
      } else {
        alert('Thank you for your message. We will get back to you soon.');
      }
      
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      alert(error.message || 'An error occurred while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-cyan uppercase mb-3">Get in Touch</h2>
          <p className="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-white sm:text-4xl">
            Ready to accelerate your research?
          </p>
          <p className="mt-4 text-xl text-zinc-400">
            Contact us to discuss how our specialized brain trust can support your next breakthrough.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                  placeholder="Dr. Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                  placeholder="jane@biotech.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formState.subject}
                onChange={handleChange}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                placeholder="Inquiry about Molecular Scouting"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                value={formState.message}
                onChange={handleChange}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-zinc-950 bg-gradient-to-r from-brand-cyan to-brand-emerald hover:opacity-90 transition-opacity duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

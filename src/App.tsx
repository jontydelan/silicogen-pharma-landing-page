/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-brand-cyan/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


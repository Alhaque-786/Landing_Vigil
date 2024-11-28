'use client';

import React from 'react';
import { Shield, FileText, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">PropGuard</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={() => router.push('/register')}>
            Register Property
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Instant Property Verification for Police
          </h1>
          <p className="mt-4 text-xl text-gray-800 max-w-2xl mx-auto">
            Stop squatters before they establish residency. Get your digital property passport that police can verify instantly.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Get Started
            </button>
            <button className="border border-gray-400 px-6 py-3 rounded-lg text-gray-800">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Three Steps to Protect Your Property
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Upload Deed</h3>
              <p className="text-gray-800">
                Register your property with official documents.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. Get Digital ID</h3>
              <p className="text-gray-800">
                Receive your verified property passport.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. Instant Verification</h3>
              <p className="text-gray-800">
                Police can verify ownership immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Protect Your Property Today
          </h2>
          <p className="text-gray-800 mb-8">
            Join property owners who are safeguarding their investments.
          </p>
          <button onClick={() => router.push('/register')} className="bg-blue-600 text-white px-8 py-3 rounded-lg">
            Register Your Property
          </button>
        </div>
      </div>
    </div>
  );
}

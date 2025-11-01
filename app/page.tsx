'use client';

import { useState } from 'react';
import { Music2, Code2, GraduationCap, Menu, X } from 'lucide-react';
import { MusicPortfolio } from './components/MusicPortfolio';
import { EngineeringPortfolio } from './components/EngineeringPortfolio';
import { EducationPortfolio } from './components/EducationPortfolio';

type PortfolioSection = 'home' | 'music' | 'engineering' | 'education';

export default function App() {
  const [activeSection, setActiveSection] = useState<PortfolioSection>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'music' as const, label: 'Music', icon: Music2, color: 'text-orange-600' },
    { id: 'engineering' as const, label: 'Engineering', icon: Code2, color: 'text-blue-600' },
    { id: 'education' as const, label: 'Education', icon: GraduationCap, color: 'text-indigo-600' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'music':
        return <MusicPortfolio />;
      case 'engineering':
        return <EngineeringPortfolio />;
      case 'education':
        return <EducationPortfolio />;
      default:
        return <HomePage />;
    }
  };

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(236,72,153,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.2),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl mb-6 text-white">
              Welcome
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-12">
              Explore my journey through music, technology, and education
            </p>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-16">
              A multifaceted portfolio showcasing my passion for Carnatic music, expertise in software engineering,
              and commitment to academic excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Music Card */}
          <button
            onClick={() => setActiveSection('music')}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 p-8 text-left hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="relative">
              <Music2 className="w-16 h-16 text-white mb-6" />
              <h2 className="text-white mb-4">Music</h2>
              <p className="text-orange-100 mb-6">
                Discover my journey through Carnatic classical music and modern fusion performances
              </p>
              <div className="flex items-center text-white">
                <span className="mr-2">Explore</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>

          {/* Engineering Card */}
          <button
            onClick={() => setActiveSection('engineering')}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-8 text-left hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="relative">
              <Code2 className="w-16 h-16 text-white mb-6" />
              <h2 className="text-white mb-4">Engineering</h2>
              <p className="text-blue-100 mb-6">
                Explore my technical expertise in building scalable systems and innovative solutions
              </p>
              <div className="flex items-center text-white">
                <span className="mr-2">Explore</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>

          {/* Education Card */}
          <button
            onClick={() => setActiveSection('education')}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-left hover:shadow-2xl hover:shadow-indigo-500/50 transition-all hover:scale-105"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="relative">
              <GraduationCap className="w-16 h-16 text-white mb-6" />
              <h2 className="text-white mb-4">Education</h2>
              <p className="text-indigo-100 mb-6">
                Learn about my academic background and professional certifications
              </p>
              <div className="flex items-center text-white">
                <span className="mr-2">Explore</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-slate-400">
          <p>© 2025 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      {activeSection !== 'home' && (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <button
                onClick={() => setActiveSection('home')}
                className="text-slate-900 hover:text-slate-600 transition-colors"
              >
                <span className="sr-only">Home</span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600" />
                  <span>Portfolio</span>
                </div>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'bg-slate-100 text-slate-900'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${activeSection === item.id ? item.color : ''}`} />
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'bg-slate-100 text-slate-900'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${activeSection === item.id ? item.color : ''}`} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>
      )}

      {/* Main Content */}
      {renderContent()}
    </div>
  );
}

import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

/**
 * WolfStack Portfolio - Home Page
 * Design: Minimalist Monochrome Elegance
 * - Extreme whitespace utilization
 * - Geometric precision and clean alignment
 * - Monochromatic depth through tonal variations
 * - Steel accent highlights for CTAs and key information
 * - Smooth, subtle animations reflecting calm execution
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-xl font-semibold tracking-tight">WolfStack</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="transition-colors hover:text-accent">About</a>
            <a href="#expertise" className="transition-colors hover:text-accent">Expertise</a>
            <a href="#process" className="transition-colors hover:text-accent">Process</a>
            <a href="#contact" className="transition-colors hover:text-accent">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: 'url(/images/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />
        
        <div className="container">
          <div className="max-w-3xl">
            {/* Tagline */}
            <div className="mb-6 inline-block">
              <span className="text-accent text-sm font-medium tracking-widest uppercase">Senior iOS Developer</span>
            </div>

            {/* Main heading */}
            <h1 className="mb-6 leading-tight">
              Silent execution.
              <br />
              Strong architecture.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              I build iOS applications with clean architecture, performance optimization, and long-term maintainability. 5+ years crafting production apps that scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#process" className="cta-button inline-block text-center">
                View My Process
              </a>
              <a href="#contact" className="cta-button-secondary inline-block text-center">
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 text-accent" />
        </div>
      </section>

      {/* Divider */}
      <div className="steel-divider" />

      {/* About Section */}
      <section id="about" className="section-spacing">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="mb-8">About WolfStack</h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I'm a Senior iOS Developer with a focus on building production-grade applications that prioritize clean architecture, performance, and maintainability. My approach is calm, methodical, and grounded in engineering principles rather than trends.
              </p>

              <p>
                Over 5+ years, I've architected and shipped iOS applications serving millions of users. I specialize in translating complex business requirements into elegant, scalable solutions using Swift and modern iOS frameworks.
              </p>

              <p>
                My philosophy: <span className="text-accent font-semibold">strong architecture beats quick fixes</span>. I believe in writing code that lasts, systems that scale, and solutions that don't require constant refactoring.
              </p>

              <p>
                When I'm not building apps, I'm studying architecture patterns, performance optimization techniques, and the intersection of design and engineering. I'm driven by the craft of building software that feels intentional.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-semibold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-accent mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Apps Shipped</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-accent mb-2">10M+</div>
                <div className="text-sm text-muted-foreground">Users Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="steel-divider" />

      {/* iOS Expertise Section */}
      <section id="expertise" className="section-spacing">
        <div className="container">
          <h2 className="mb-12">iOS Technical Stack</h2>

          {/* Background image */}
          <div 
            className="absolute left-0 right-0 -z-10 h-96"
            style={{
              backgroundImage: 'url(/images/expertise-bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.15,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Languages & Frameworks */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-accent">Languages & Frameworks</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-2">Swift & SwiftUI</div>
                  <p className="text-muted-foreground">Modern declarative UI development with SwiftUI, async/await patterns, and reactive programming.</p>
                </div>
                <div>
                  <div className="font-semibold mb-2">UIKit</div>
                  <p className="text-muted-foreground">Deep expertise in UIViewController lifecycle, custom layouts, and performance optimization.</p>
                </div>
                <div>
                  <div className="font-semibold mb-2">Combine Framework</div>
                  <p className="text-muted-foreground">Reactive streams, publishers, subscribers, and complex data flow management.</p>
                </div>
              </div>
            </div>

            {/* Architecture & Patterns */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-accent">Architecture & Patterns</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-2">MVVM & Clean Architecture</div>
                  <p className="text-muted-foreground">Separation of concerns, testable code, and maintainable project structure.</p>
                </div>
                <div>
                  <div className="font-semibold mb-2">Dependency Injection</div>
                  <p className="text-muted-foreground">Loose coupling, testability, and flexible component composition.</p>
                </div>
                <div>
                  <div className="font-semibold mb-2">State Management</div>
                  <p className="text-muted-foreground">Redux patterns, MVVM+C, and predictable state flows.</p>
                </div>
              </div>
            </div>

            {/* Networking & Data */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-accent">Networking & Data</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-2">REST APIs & GraphQL</div>
                  <p className="text-muted-foreground">URLSession, Alamofire, and efficient API client architecture.</p>
                </div>
                <div>
                  <div className="font-semibold mb-2">Firebase & Realtime</div>
                  <p className="text-muted-foreground">Cloud Firestore, Realtime Database, and push notifications.</p>
                </div>
                <div>
                  <div className="font-semibold mb-2">Local Persistence</div>
                  <p className="text-muted-foreground">Core Data, Realm, and UserDefaults optimization.</p>
                </div>
              </div>
            </div>

            {/* Security & Performance */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-accent">Security & Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-2">Security</div>
                  <p className="text-muted-foreground">Keychain integration, biometric authentication, and secure data handling.</p>
                </div>
                <div>
                  <div className="font-semibold mb-2">Performance</div>
                  <p className="text-muted-foreground">Memory profiling, battery optimization, and smooth 60fps animations.</p>
                </div>
                <div>
                  <div className="font-semibold mb-2">Testing</div>
                  <p className="text-muted-foreground">Unit testing, integration testing, and UI testing with XCTest.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="steel-divider" />

      {/* iOS Development Process Section */}
      <section id="process" className="section-spacing">
        <div className="container">
          <h2 className="mb-4">How I Build iOS Apps</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            A professional, step-by-step approach to building production-grade iOS applications.
          </p>

          {/* Background image */}
          <div 
            className="absolute left-0 right-0 -z-10 h-96"
            style={{
              backgroundImage: 'url(/images/process-bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.15,
            }}
          />

          {/* Process steps */}
          <div className="space-y-12">
            {[
              {
                number: '01',
                title: 'Understanding Product & Business Requirements',
                description: 'Deep dive into business goals, user needs, and technical constraints. I align with stakeholders on success metrics and scope before writing a single line of code.',
              },
              {
                number: '02',
                title: 'UX/UI Collaboration & Apple HIG',
                description: 'Work with designers to translate mockups into iOS-native experiences. Adherence to Apple Human Interface Guidelines ensures consistency and user familiarity.',
              },
              {
                number: '03',
                title: 'Architecture Selection',
                description: 'Choose the right architecture pattern (MVVM, Clean Architecture, or VIPER) based on project complexity. Establish clear boundaries between presentation, business logic, and data layers.',
              },
              {
                number: '04',
                title: 'Networking & Data Layer',
                description: 'Build robust API clients with error handling, retry logic, and offline support. Implement efficient local persistence strategies for optimal performance.',
              },
              {
                number: '05',
                title: 'State Management & Business Logic',
                description: 'Implement predictable state management using Combine or Redux patterns. Ensure business logic is testable and decoupled from UI.',
              },
              {
                number: '06',
                title: 'Testing & Quality Assurance',
                description: 'Write comprehensive unit tests, integration tests, and UI tests. Aim for high code coverage and catch regressions early.',
              },
              {
                number: '07',
                title: 'Performance Optimization',
                description: 'Profile memory usage, optimize battery consumption, and ensure smooth 60fps animations. Measure and iterate based on real device performance.',
              },
              {
                number: '08',
                title: 'App Store Delivery & Maintenance',
                description: 'Prepare for App Store submission, manage versioning, and establish processes for ongoing maintenance and feature updates.',
              },
            ].map((step, index) => (
              <div key={index} className="fade-in-up">
                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-secondary border border-accent/20">
                      <span className="text-lg font-semibold text-accent">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < 7 && <div className="divider-thin my-12" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="steel-divider" />

      {/* Work Philosophy Section */}
      <section className="section-spacing bg-secondary/30">
        <div className="container">
          <h2 className="mb-12">Work Philosophy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">Calm Execution</h3>
              <p className="text-muted-foreground leading-relaxed">
                No panic-driven decisions. I approach challenges methodically, breaking complex problems into manageable pieces. Quality over speed. Sustainable over heroic.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">Strong Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">
                Architecture is the foundation. Invest time upfront to build systems that scale. Good architecture makes future changes easy and reduces technical debt.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">Clean Code Over Hype</h3>
              <p className="text-muted-foreground leading-relaxed">
                I focus on fundamentals: readability, testability, and maintainability. Trends come and go. Clean code is timeless. I choose proven patterns over bleeding-edge frameworks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">Reliability & Ownership</h3>
              <p className="text-muted-foreground leading-relaxed">
                I own my work. Every line of code, every decision, every trade-off. I measure success by how well the app performs in production, not by how quickly I shipped it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="steel-divider" />

      {/* Contact Section */}
      <section id="contact" className="section-spacing">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              I'm available for senior iOS development roles, consulting projects, and technical leadership opportunities. Let's discuss how I can help build something great.
            </p>

            {/* Contact methods */}
            <div className="space-y-4 mb-12">
              <a 
                href="mailto:hello@wolfstack.dev"
                className="flex items-center gap-3 p-4 rounded border border-border hover:border-accent transition-colors group"
              >
                <Mail className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-semibold group-hover:text-accent transition-colors">Email</div>
                  <div className="text-sm text-muted-foreground">hello@wolfstack.dev</div>
                </div>
              </a>

              <a 
                href="https://github.com/wolfstack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded border border-border hover:border-accent transition-colors group"
              >
                <Github className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-semibold group-hover:text-accent transition-colors">GitHub</div>
                  <div className="text-sm text-muted-foreground">github.com/wolfstack</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/wolfstack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded border border-border hover:border-accent transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-semibold group-hover:text-accent transition-colors">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">linkedin.com/in/wolfstack</div>
                </div>
              </a>
            </div>

            {/* CTA */}
            <a href="mailto:hello@wolfstack.dev" className="cta-button inline-block">
              Send me an email
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="steel-divider" />

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-sm text-muted-foreground">
                WolfStack — Senior iOS Developer
              </div>
              <div className="text-xs text-muted-foreground/60 mt-2">
                Designed for clarity. Built for scale.
              </div>
            </div>
            <div className="text-xs text-muted-foreground/60">
              © 2024 WolfStack. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

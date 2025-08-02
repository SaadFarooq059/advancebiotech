import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight, Heart, Shield, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Vision', href: '/vision' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const services = [
    { name: 'Pharmaceutical Supply', href: '/services' },
    { name: 'Medical Equipment', href: '/services' },
    { name: 'Distribution Services', href: '/services' },
    { name: 'Quality Assurance', href: '/services' },
    { name: 'Healthcare Consultation', href: '/services' }
  ];

  // Update achievements icons
  const achievements = [
    { icon: <Award className="h-5 w-5 text-purple-400" />, text: "6+ Years Experience" },
    { icon: <Users className="h-5 w-5 text-green-400" />, text: "500+ Happy Clients" },
    { icon: <Shield className="h-5 w-5 text-purple-400" />, text: "100% Quality Assured" },
    { icon: <Heart className="h-5 w-5 text-green-400" />, text: "24/7 Support" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements - Updated to purple/green */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Company Info - Updated colors */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                    Advance Biotech
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                  Leading pharmaceutical supplier in Pakistan, committed to providing
                  high-quality healthcare solutions since 2018. We bridge the gap between
                  healthcare providers and patients with reliable pharmaceutical products.
                </p>
                
                {/* Achievements Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      {achievement.icon}
                      <span className="text-gray-300 text-sm font-medium">{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links - Updated accent color */}
            <div>
              <h4 className="text-xl font-bold text-white mb-8 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full mr-3"></div>
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services - Updated accent color */}
            <div>
              <h4 className="text-xl font-bold text-white mb-8 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-green-600 rounded-full mr-3"></div>
                Our Services
              </h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href} 
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information Cards - Updated to purple/green */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-300 text-lg">Ready to discuss your pharmaceutical supply needs?</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Phone - Purple */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Call Us</h4>
                  <p className="text-purple-400 font-medium">0335 5359327</p>
                </CardContent>
              </Card>

              {/* Email - Green */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Email Us</h4>
                  <p className="text-green-400 font-medium text-sm">info@advancebiotech.net</p>
                </CardContent>
              </Card>

              {/* Location - Purple */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Visit Us</h4>
                  <p className="text-purple-400 font-medium text-sm">I-9/2 Islamabad</p>
                </CardContent>
              </Card>

              {/* Hours - Green */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Since</h4>
                  <p className="text-green-400 font-medium">2018</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section - Updated buttons */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Partner with Pakistan&apos;s Leading Pharmaceutical Supplier?
              </h3>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Contact us today for competitive quotes and reliable pharmaceutical supply solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 0335 5359327
                </Button>
                <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 text-lg">
                  <Link href="/contact" className="flex items-center">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Updated logo */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <p className="text-gray-400">
                  © 2024 Advance Biotech. All rights reserved.
                </p>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Heart className="h-4 w-4 text-purple-400" />
                <span>Designed with excellence for healthcare</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
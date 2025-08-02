'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CardsParallax, type iCardItem } from '@/components/ui/scroll-cards';
import { 
  ArrowRight, 
  Shield, 
  Users, 
  Award, 
  Truck, 
  Clock, 
  CheckCircle, 
  Phone,
  Microscope,
  Heart,
  Globe,
  Star
} from 'lucide-react';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import { BouncyCardsFeatures } from '@/components/ui/bounce-card-features';
import InteractiveBentoGallery from '@/components/ui/interactive-bento-gallery';
import AboutUsSection from '@/components/ui/about-us-section';

// Dynamic imports for client-side only components
const BackgroundAnimation = dynamic(() => import('@/components/hero/BackgroundAnimation'), { ssr: false });
const FloatingStats = dynamic(() => import('@/components/hero/FloatingStats'), { ssr: false });
const DecorativeElements = dynamic(() => import('@/components/hero/DecorativeElements'), { ssr: false });

export default function Home() {
  const services = [
    {
      icon: <Microscope className="h-8 w-8 text-purple-600" />,
      title: "Pharmaceutical Supply",
      description: "High-quality medicines and pharmaceutical products from trusted manufacturers"
    },
    {
      icon: <Truck className="h-8 w-8 text-purple-600" />,
      title: "Distribution Network",
      description: "Extensive distribution network covering major cities across Pakistan"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Quality Assurance",
      description: "Stringent quality control measures ensuring safe and effective products"
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      title: "Healthcare Solutions",
      description: "Comprehensive healthcare solutions for hospitals, clinics, and pharmacies"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-6 w-6 text-purple-600" />,
      title: "Trusted Experience",
      description: "Over 6 years of excellence in pharmaceutical supply"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Expert Team",
      description: "Professional team with deep healthcare industry knowledge"
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: "Timely Delivery",
      description: "Reliable delivery schedules to meet your urgent requirements"
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-600" />,
      title: "Wide Network",
      description: "Extensive supplier network ensuring product availability"
    }
  ];

  const whyChooseUsCards: iCardItem[] = [
    {
      title: "Trusted Experience",
      description: "Over 6 years of excellence in pharmaceutical supply across Pakistan",
      tag: "experience",
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
      link: "#",
      color: "#6b46c1",
      textColor: "white",
    },
    {
      title: "Expert Team",
      description: "Professional team with deep healthcare industry knowledge",
      tag: "expertise",
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
      link: "#",
      color: "#805ad5",
      textColor: "white",
    },
    {
      title: "Quality Assurance",
      description: "Stringent quality control ensuring safe and effective products",
      tag: "quality",
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      link: "#",
      color: "#9f7aea",
      textColor: "white",
    },
    {
      title: "Nationwide Network",
      description: "Extensive distribution network covering all major cities",
      tag: "network",
      src: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?auto=format&fit=crop&w=800&q=80",
      link: "#",
      color: "#f0eafc",
      textColor: "#6b46c1",
    }
  ];

  const expertise = [
    "Generic Medicines",
    "Branded Pharmaceuticals", 
    "Medical Devices",
    "Surgical Instruments",
    "Laboratory Equipment",
    "Healthcare Supplies"
  ];

  const expertiseItems = [
    {
      id: 1,
      type: "image",
      title: "Generic Medicines",
      desc: "High-quality generic pharmaceuticals at competitive prices",
      url: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 2,
      type: "image",
      title: "Branded Pharmaceuticals",
      desc: "Premium branded medicines from leading manufacturers",
      url: "https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "Medical Devices",
      desc: "Advanced medical equipment and diagnostic tools",
      url: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 4,
      type: "image",
      title: "Surgical Instruments",
      desc: "Precision surgical tools and medical instruments",
      url: "https://images.pexels.com/photos/4021773/pexels-photo-4021773.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 5,
      type: "image",
      title: "Laboratory Equipment",
      desc: "State-of-the-art laboratory and diagnostic equipment",
      url: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 6,
      type: "image",
      title: "Healthcare Supplies",
      desc: "Complete range of healthcare and medical supplies",
      url: "https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
    }
  ];

  const faqs = [
    {
      question: "What types of pharmaceutical products do you supply?",
      answer: "We supply a comprehensive range including generic medicines, branded pharmaceuticals, medical devices, surgical instruments, and laboratory equipment to healthcare facilities across Pakistan."
    },
    {
      question: "How do you ensure product quality and authenticity?",
      answer: "We maintain strict quality control measures, work only with licensed manufacturers, and ensure all products meet international standards and regulatory requirements."
    },
    {
      question: "What is your delivery coverage area?",
      answer: "We serve major cities across Pakistan with our extensive distribution network, ensuring timely delivery to hospitals, clinics, and pharmacies nationwide."
    },
    {
      question: "Do you provide emergency or urgent deliveries?",
      answer: "Yes, we understand the critical nature of healthcare supplies and offer emergency delivery services to ensure patient care is never compromised."
    },
    {
      question: "How can I place an order or get a quote?",
      answer: "You can contact us through phone, email, or our website contact form. Our team will provide detailed quotes and assist you with the ordering process."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        {/* <div className="absolute inset-0">
          <BackgroundAnimation />
        </div> */}
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-green-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 min-h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-4">
                Serving Healthcare Since 2018
              </Badge>
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Leading{" "}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-green-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Pharmaceutical
                </motion.span>{" "}
                Supplier in Pakistan
              </motion.h1>
              <p className="text-xl text-gray-600 mb-8">
                Advance Biotech delivers high-quality pharmaceutical products and healthcare solutions 
                to hospitals, clinics, and pharmacies across Pakistan with reliability and excellence.
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl transition-shadow">
                  Get Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  View Our Services
                </Button>
              </motion.div>
              </motion.div>
              
              {/* Right side - Professional Image */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative">
                  {/* Main Image */}
                  <motion.div 
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src="/hero.jpg" 
                      alt="Pharmaceutical professional" 
                      width={800}
                      height={500}
                      className="w-full h-96 lg:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
                  </motion.div>
                  
                  {/* Floating Stats Cards */}
                  <FloatingStats />
                  
                  {/* Decorative Elements */}
                  <DecorativeElements />
                </div>
              </motion.div>
            </div>
                  </div>
                </div>
      </section>

      {/* About Section */}
      <AboutUsSection />

      {/* Services Section */}
      <BouncyCardsFeatures />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
              Why Choose Advance Biotech?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We stand out in the pharmaceutical supply industry through our 
              commitment to quality, reliability, and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[800px] overflow-hidden">
              <CardsParallax items={whyChooseUsCards} />
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-white">
                <CardHeader className="text-center pb-4">
                  <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl text-gray-900">
                    Quality Commitment
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    &ldquo;We ensure every product meets the highest standards of quality 
                    and safety, because your health is our priority.&rdquo;
                  </p>
                  <div className="text-sm text-gray-500">
                    - Mudassar Saghir, CEO
                  </div>
                </CardContent>
              </Card>
              <div className="mt-8 space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-purple-50 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">
              Our Expertise
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Pharmaceutical Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of pharmaceutical products and healthcare solutions
            </p>
          </div>
        </div>
        <InteractiveBentoGallery
          mediaItems={expertiseItems}
          title=""
          description=""
        />
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our pharmaceutical supply services.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* FAQ Questions - Left Side */}
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-purple-100">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:text-purple-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            {/* Photo - Right Side */}
            <div className="relative">
              <div className="bg-purple-50 rounded-3xl p-8 overflow-hidden">
                <Image 
                  src="/FAQ.jpg" 
                  alt="Pharmaceutical consultation" 
                  width={800}
                  height={384}
                  className="w-full h-96 object-cover rounded-2xl"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-300 rounded-full opacity-30"></div>
              
              {/* Info card overlay */}
              <Card className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm border-purple-100">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Phone className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Need More Help?</p>
                      <p className="text-sm text-gray-600">Call us: 0335 5359327</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="bg-purple-50 rounded-3xl p-8 overflow-hidden">
                <Image 
                  src="cta.jpg" 
                  alt="Pharmaceutical professional" 
                  width={800}
                  height={384}
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div>
              <div className="mb-8">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">
                  Get Started
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We are committed to providing exceptional pharmaceutical supply services 
                  that make a real difference in healthcare delivery across Pakistan.
                </p>
              </div>
              
              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-6 bg-purple-50 border-purple-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Expert Team You Can Trust</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Licensed professionals committed to your health and wellbeing.
                  </p>
                </Card>
                
                <Card className="p-6 bg-purple-50 border-purple-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Award className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Member-Only Savings</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Licensed professionals committed to your health and wellbeing.
                  </p>
                </Card>
                
                <Card className="p-6 bg-purple-50 border-purple-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Heart className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">All-in-One Services</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Licensed professionals committed to your health and wellbeing.
                  </p>
                </Card>
                
                <Card className="p-6 bg-purple-50 border-purple-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Shield className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Compassionate, Personal Care</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Licensed professionals committed to your health and wellbeing.
                  </p>
                </Card>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 0335 5359327
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <Link href="/contact" className="flex items-center">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
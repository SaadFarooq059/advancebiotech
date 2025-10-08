'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User,
  MessageCircle,
  Send,
  CheckCircle,
  Star,
  Award,
  Shield,
  Heart,
  Zap
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-12 w-12 text-purple-600" />,
      title: "Phone Number",
      details: "+92 333 5395327",
      description: "Call us for immediate assistance",
      gradient: "from-blue-50 to-purple-50"
    },
    {
      icon: <Mail className="h-12 w-12 text-green-600" />,
      title: "Email Address",
      details: "info@advancebiotech.net\nmudassar@advancebiotech.net",
      description: "Send us your queries anytime",
      gradient: "from-green-50 to-purple-50"
    },
    {
      icon: <MapPin className="h-12 w-12 text-purple-600" />,
      title: "Office Address",
      details: "Plot No. 86, Street 08\nI-9/2 Islamabad, Pakistan",
      description: "Visit our office during business hours",
      gradient: "from-purple-50 to-green-50"
    },
    {
      icon: <Clock className="h-12 w-12 text-green-600" />,
      title: "Business Hours",
      details: "Monday - Saturday\n9:00 AM - 6:00 PM",
      description: "Emergency support available 24/7",
      gradient: "from-green-50 to-purple-50"
    }
  ];

  const services = [
    { icon: <Award className="h-5 w-5 text-purple-600" />, text: "Pharmaceutical Supply" },
    { icon: <Shield className="h-5 w-5 text-green-600" />, text: "Medical Equipment" },
    { icon: <Heart className="h-5 w-5 text-purple-600" />, text: "Distribution Services" },
    { icon: <Star className="h-5 w-5 text-green-600" />, text: "Quality Assurance" },
    { icon: <MessageCircle className="h-5 w-5 text-purple-600" />, text: "Healthcare Consultation" },
    { icon: <Zap className="h-5 w-5 text-green-600" />, text: "Emergency Supply" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-green-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="bg-purple-800/50 text-purple-100 hover:bg-purple-900/50 mb-6 px-6 py-2">
            Contact Us
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Get in Touch with
            <br />
            <span className="text-green-200">Advance Biotech</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Ready to discuss your pharmaceutical supply needs? Contact our expert team 
            for personalized solutions and competitive quotes.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-4">
              Contact Information
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to get in touch with our pharmaceutical supply experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br ${info.gradient} overflow-hidden`}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl w-fit shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-900 font-semibold mb-3 whitespace-pre-line text-lg">
                    {info.details}
                  </p>
                  <p className="text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and CEO Info */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">
                Send Message
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              {!isSubmitted ? (
                <Card className="p-8 bg-white shadow-xl border-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-2 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-2 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-gray-700 font-medium">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-2 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-2 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        placeholder="What is this regarding?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-2 min-h-[150px] border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        placeholder="Please describe your pharmaceutical supply requirements..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="bg-purple-600 hover:bg-purple-700 w-full py-4 text-lg">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              ) : (
                <Card className="p-12 text-center bg-gradient-to-br from-green-50 to-white border-green-200 shadow-xl">
                  <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-green-800 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700 text-lg">
                    Thank you for contacting us. Our team will get back to you within 24 hours.
                  </p>
                </Card>
              )}
            </div>

            {/* CEO Information and Services */}
            <div className="space-y-8">
              {/* CEO Info */}
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-white border-0 shadow-xl">
                <CardHeader className="p-0 pb-6">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-purple-100 rounded-2xl">
                      <User className="h-12 w-12 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">Mudassar Saghir</CardTitle>
                      <p className="text-purple-600 font-medium text-lg">Chief Executive Officer</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Feel free to reach out directly to our CEO for strategic partnerships, 
                    bulk orders, or any business inquiries.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm">
                      <Mail className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700 font-medium">mudassar@advancebiotech.net</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm">
                      <Phone className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700 font-medium">+92 333 5395327</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services We Offer */}
              <Card className="p-8 bg-white border-0 shadow-xl">
                <CardHeader className="p-0 pb-6">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                    <span>Services We Offer</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 gap-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
                        {service.icon}
                        <span className="text-gray-700 font-medium">{service.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="p-8 bg-gradient-to-br from-purple-600 to-green-600 text-white border-0 shadow-xl">
                <CardHeader className="p-0 pb-6">
                  <CardTitle className="text-2xl text-white">Need Immediate Assistance?</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-purple-100 mb-6 text-lg">
                    For urgent pharmaceutical supply requirements, call us directly 
                    or send a WhatsApp message.
                  </p>
                  <div className="flex flex-col space-y-4">
                    <Button className="bg-white text-purple-600 hover:bg-gray-100 py-3 text-lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: 0335 5359327
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 py-3 text-lg">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
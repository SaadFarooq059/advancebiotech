import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PharmaceuticalServices } from '@/components/ui/landing-page';
import { 
  Microscope, 
  Truck, 
  Shield, 
  Heart, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Phone,
  Stethoscope,
  Pill,
  Activity,
  Star,
  Award,
  Globe,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Hero Section */}
      <PharmaceuticalServices />
      
      {/* Rest of the existing content */}
      <div className="relative -mt-10"> {/* Reduced negative margin */}
        {renderExistingContent()}
      </div>
    </div>
  );
}

function renderExistingContent() {
  const mainServices = [
    {
      icon: <Microscope className="h-12 w-12 text-orange-600" />,
      title: "Pharmaceutical Supply",
      description: "Complete range of prescription and over-the-counter medicines from trusted manufacturers worldwide.",
      image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Generic and branded medicines",
        "Quality-assured pharmaceuticals", 
        "Regulatory compliant products",
        "Bulk and retail supply options"
      ]
    },
    {
      icon: <Truck className="h-12 w-12 text-orange-600" />,
      title: "Distribution & Logistics",
      description: "Efficient distribution network ensuring timely delivery across Pakistan with proper cold chain management.",
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Nationwide delivery network",
        "Cold chain logistics",
        "Real-time tracking",
        "Emergency delivery services"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-orange-600" />,
      title: "Quality Assurance",
      description: "Comprehensive quality control measures to ensure all products meet international safety standards.",
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Batch testing and verification",
        "Storage condition monitoring",
        "Expiry date management",
        "Regulatory compliance"
      ]
    },
    {
      icon: <Heart className="h-12 w-12 text-orange-600" />,
      title: "Healthcare Solutions",
      description: "Customized healthcare supply solutions for hospitals, clinics, pharmacies, and healthcare institutions.",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Hospital supply contracts",
        "Pharmacy partnerships",
        "Clinic support services",
        "Institutional healthcare plans"
      ]
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-orange-600" />,
      title: "Medical Equipment",
      description: "Supply of medical devices, diagnostic equipment, and surgical instruments for healthcare facilities.",
      image: "https://images.pexels.com/photos/4021773/pexels-photo-4021773.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Diagnostic equipment",
        "Surgical instruments",
        "Medical devices",
        "Laboratory equipment"
      ]
    },
    {
      icon: <Activity className="h-12 w-12 text-orange-600" />,
      title: "Consultation Services",
      description: "Expert consultation on pharmaceutical procurement, inventory management, and regulatory compliance.",
      image: "https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Procurement consulting",
        "Inventory optimization",
        "Regulatory guidance",
        "Cost optimization strategies"
      ]
    }
  ];

  const serviceCategories = [
    {
      title: "Hospital Services",
      description: "Comprehensive pharmaceutical supply solutions for hospitals of all sizes.",
      icon: <Heart className="h-8 w-8 text-orange-600" />,
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Pharmacy Support",
      description: "Reliable supply chain support for retail and institutional pharmacies.",
      icon: <Pill className="h-8 w-8 text-orange-600" />,
      image: "https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Clinic Solutions",
      description: "Tailored pharmaceutical supply for clinics and medical centers.",
      icon: <Stethoscope className="h-8 w-8 text-orange-600" />,
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Emergency Supply",
      description: "24/7 emergency pharmaceutical supply for critical healthcare needs.",
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      image: "https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Contact Us",
      description: "Get in touch with your requirements via phone, email, or our website.",
      icon: <Phone className="h-6 w-6 text-orange-600" />
    },
    {
      number: "02", 
      title: "Get Quote",
      description: "Receive detailed quotation with competitive pricing and delivery terms.",
      icon: <Award className="h-6 w-6 text-orange-600" />
    },
    {
      number: "03",
      title: "Place Order",
      description: "Confirm your order with our team and receive order confirmation.",
      icon: <CheckCircle className="h-6 w-6 text-orange-600" />
    },
    {
      number: "04",
      title: "Fast Delivery",
      description: "Receive your pharmaceutical products with our reliable delivery service.",
      icon: <Truck className="h-6 w-6 text-orange-600" />
    }
  ];

  const guarantees = [
    { icon: <CheckCircle className="h-6 w-6 text-orange-600" />, text: "100% Quality Assured Products" },
    { icon: <Clock className="h-6 w-6 text-orange-600" />, text: "On-Time Delivery Guarantee" },
    { icon: <Star className="h-6 w-6 text-orange-600" />, text: "Competitive Pricing" },
    { icon: <Users className="h-6 w-6 text-orange-600" />, text: "24/7 Customer Support" },
    { icon: <Shield className="h-6 w-6 text-orange-600" />, text: "Secure and Safe Handling" },
    { icon: <Globe className="h-6 w-6 text-orange-600" />, text: "Nationwide Coverage" }
  ];

  return (
    <>
      {/* Main Services Grid */}
      <section className="py-24 bg-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
              Core Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Pharmaceutical Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of pharmaceutical supply and healthcare solutions 
              designed to meet the diverse needs of healthcare providers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl">
                    {service.icon}
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
              Specialized Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tailored Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We cater to different healthcare sectors with specialized service offerings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <Image 
                    src={category.image}
                    alt={category.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <CardHeader className="text-center relative -mt-6">
                  <div className="mx-auto mb-4 p-3 bg-white rounded-xl shadow-lg w-fit">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simple & Efficient Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures you get the pharmaceutical products you need 
              quickly and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-orange-200 to-orange-300 -translate-x-1/2"></div>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    {step.icon}
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
                Our Promise
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
                Service Guarantees You Can
                <span className="text-orange-600"> Trust</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We stand behind our services with comprehensive guarantees that ensure 
                your complete satisfaction and peace of mind.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    {guarantee.icon}
                    <span className="text-gray-700 font-medium">{guarantee.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 overflow-hidden">
                <Image 
                  src="/cta.webp"
                  alt="Healthcare professional"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  priority
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-300 rounded-full opacity-40"></div>
              
              {/* Fix: Add margin bottom to accommodate the overlay card */}
              <div className="mt-8">
                <Card className="bg-white/95 backdrop-blur-sm border-orange-100 shadow-xl">
                  <CardContent className="p-6 text-center">
                    <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600 mb-4">
                      Round-the-clock assistance for all your pharmaceutical needs
                    </p>
                    <Button className="bg-orange-600 hover:bg-orange-700 w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl text-orange-100 mb-12 leading-relaxed">
            Contact us today to discuss your pharmaceutical supply requirements. 
            Our expert team is ready to provide customized solutions for your healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call: 0335 5359327
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
              <Link href="/contact" className="flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
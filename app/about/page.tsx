import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { 
  User, 
  Calendar, 
  MapPin, 
  Award, 
  Users, 
  Target, 
  CheckCircle,
  Heart,
  Shield,
  Clock,
  Star,
  Globe,
  Zap,
  TrendingUp
} from 'lucide-react';

export default function About() {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Advance Biotech was established with a vision to improve healthcare accessibility in Pakistan.",
      icon: <Star className="h-6 w-6 text-orange-600" />
    },
    {
      year: "2019",
      title: "First Major Partnership",
      description: "Secured partnerships with leading pharmaceutical manufacturers and healthcare facilities.",
      icon: <Users className="h-6 w-6 text-orange-600" />
    },
    {
      year: "2020",
      title: "Expansion Phase",
      description: "Expanded operations to serve major cities across Pakistan with improved distribution network.",
      icon: <Globe className="h-6 w-6 text-orange-600" />
    },
    {
      year: "2021",
      title: "Quality Certification",
      description: "Achieved quality certifications and compliance with international pharmaceutical standards.",
      icon: <Award className="h-6 w-6 text-orange-600" />
    },
    {
      year: "2022",
      title: "Digital Transformation",
      description: "Implemented digital systems for better inventory management and customer service.",
      icon: <Zap className="h-6 w-6 text-orange-600" />
    },
    {
      year: "2023-2024",
      title: "Market Leadership",
      description: "Emerged as one of the leading pharmaceutical suppliers in Pakistan with 500+ satisfied clients.",
      icon: <TrendingUp className="h-6 w-6 text-orange-600" />
    }
  ];

  const teamValues = [
    {
      icon: <Heart className="h-12 w-12 text-orange-600" />,
      title: "Patient-Centric Approach",
      description: "Every decision we make is guided by what's best for patient health and safety.",
      gradient: "from-red-50 to-orange-50"
    },
    {
      icon: <Shield className="h-12 w-12 text-orange-600" />,
      title: "Quality Commitment",
      description: "We never compromise on quality, ensuring every product meets the highest standards.",
      gradient: "from-orange-50 to-yellow-50"
    },
    {
      icon: <Users className="h-12 w-12 text-orange-600" />,
      title: "Partnership Focus",
      description: "We build long-term partnerships based on trust, reliability, and mutual growth.",
      gradient: "from-blue-50 to-orange-50"
    },
    {
      icon: <Clock className="h-12 w-12 text-orange-600" />,
      title: "Reliability",
      description: "Our clients depend on us for timely delivery and consistent service excellence.",
      gradient: "from-green-50 to-orange-50"
    }
  ];

  const achievements = [
    { number: "6+", label: "Years of Excellence", icon: <Calendar className="h-8 w-8 text-orange-600" /> },
    { number: "500+", label: "Satisfied Clients", icon: <Users className="h-8 w-8 text-orange-600" /> },
    { number: "1000+", label: "Products Supplied", icon: <Award className="h-8 w-8 text-orange-600" /> },
    { number: "50+", label: "Partner Manufacturers", icon: <Globe className="h-8 w-8 text-orange-600" /> },
    { number: "24/7", label: "Customer Support", icon: <Clock className="h-8 w-8 text-orange-600" /> },
    { number: "100%", label: "Quality Assured", icon: <Shield className="h-8 w-8 text-orange-600" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="bg-orange-800/50 text-orange-100 hover:bg-orange-900/50 mb-6 px-6 py-2">
            About Advance Biotech
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Leading Pharmaceutical Supplier
            <br />
            <span className="text-orange-200">Since 2018</span>
          </h1>
          <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
            Built on the foundation of trust, quality, and commitment to healthcare excellence, 
            Advance Biotech has been serving Pakistan&apos;s healthcare sector with dedication and integrity.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <Image 
                  src="/servicescta.jpg" 
                  alt="Pharmaceutical professional" 
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-200 rounded-full opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-300 rounded-full opacity-40"></div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-white hover:shadow-lg transition-shadow">
                    <div className="text-3xl font-bold text-orange-600 mb-2">2018</div>
                    <div className="text-gray-600 font-medium">Established</div>
                  </Card>
                  <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-white hover:shadow-lg transition-shadow">
                    <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                    <div className="text-gray-600 font-medium">Happy Clients</div>
                  </Card>
                </div>
            </div>
            
            <div>
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
                About Advance Biotech
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Advance Biotech is a leading pharmaceutical supplier based in Islamabad, Pakistan. 
                Since our establishment in 2018, we have been committed to bridging the gap between 
                healthcare providers and patients by ensuring reliable access to quality pharmaceutical 
                products across Pakistan.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Our comprehensive approach to pharmaceutical supply chain management has made us a 
                trusted partner for hospitals, clinics, and pharmacies nationwide. We focus on 
                quality, reliability, and building long-term partnerships in the healthcare sector.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                  <span className="text-gray-700 font-medium">Quality Assured Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                  <span className="text-gray-700 font-medium">Nationwide Distribution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                  <span className="text-gray-700 font-medium">24/7 Customer Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                  <span className="text-gray-700 font-medium">Regulatory Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
              Leadership
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leadership driving innovation and excellence in Pakistan&apos;s pharmaceutical industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 overflow-hidden">
                  <Image 
                    src="/founder.jpeg" 
                    alt="Mudassar Saghir - CEO Advance Biotech" 
                    width={600}
                    height={700}
                    className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-200 rounded-full opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-300 rounded-full opacity-40"></div>
              </div>
              
              {/* Achievement Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="text-center p-6 bg-white border-orange-100 hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-orange-600 mb-2">6+</div>
                  <div className="text-gray-600 font-medium text-sm">Years Leading</div>
                </Card>
                <Card className="text-center p-6 bg-white border-orange-100 hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-orange-600 mb-2">500+</div>
                  <div className="text-gray-600 font-medium text-sm">Clients Served</div>
                </Card>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">Mudassar Saghir</h3>
                <p className="text-xl text-orange-600 font-semibold mb-4">Chief Executive Officer & Founder</p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-600">Founded in 2018</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-600">Islamabad, Pakistan</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mudassar Saghir founded Advance Biotech in 2018 with a clear vision: to transform 
                  Pakistan&apos;s pharmaceutical supply chain through innovation, quality, and unwavering 
                  commitment to healthcare excellence.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Under his leadership, Advance Biotech has grown from a startup to one of Pakistan&apos;s 
                  most trusted pharmaceutical suppliers, serving over 500 healthcare facilities 
                  across the country.
                </p>
                
                <Card className="p-6 bg-gradient-to-r from-orange-50 to-white border-orange-100">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-100 rounded-full flex-shrink-0">
                      <Target className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Vision Statement</h4>
                      <p className="text-gray-700 leading-relaxed">
                        &ldquo;To make quality healthcare accessible to every corner of Pakistan through 
                        reliable pharmaceutical supply and innovative distribution solutions.&rdquo;
                      </p>
                    </div>
                  </div>
                </Card>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-orange-100">
                    <Heart className="h-6 w-6 text-orange-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Patient First</div>
                      <div className="text-sm text-gray-600">Healthcare Focus</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-orange-100">
                    <Award className="h-6 w-6 text-orange-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Excellence</div>
                      <div className="text-sm text-gray-600">Quality Standards</div>
                    </div>
                  </div>
                </div>
                
                <Card className="p-6 bg-gradient-to-br from-gray-50 to-white border-orange-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-orange-600" />
                      <span className="text-gray-700">mudassar@advancebiotech.net</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-orange-600" />
                      <span className="text-gray-700">0335 5359327</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
              Our Journey
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Milestones of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a leading pharmaceutical supplier - here&apos;s how we&apos;ve grown 
              and evolved over the years to serve Pakistan&apos;s healthcare sector better.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 px-4 py-2">
                      {milestone.year}
                    </Badge>
                    <div className="p-2 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors">
                      {milestone.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-orange-600 transition-colors">
                    {milestone.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
              Core Values
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Values That Drive Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The values that guide our decisions, shape our culture, and drive our commitment 
              to excellence in pharmaceutical supply.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br ${value.gradient} overflow-hidden`}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl w-fit shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-orange-600 transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
              Our Impact
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Achievements in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our clients place in us.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-0">
                  <div className="mb-4 p-3 bg-orange-50 rounded-xl w-fit mx-auto group-hover:bg-orange-100 transition-colors">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-6">
            Our Mission
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12">
            Mission Statement
          </h2>
          <Card className="p-12 bg-gradient-to-br from-orange-50 via-white to-orange-50 shadow-2xl border-0">
            <CardContent className="text-center">
              <Target className="h-16 w-16 text-orange-600 mx-auto mb-8" />
              <p className="text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                &ldquo;To revolutionize pharmaceutical supply in Pakistan by delivering the highest 
                quality medicines and healthcare products through innovative distribution 
                solutions, ensuring every healthcare provider has the tools they need to 
                save lives and improve patient outcomes.&rdquo;
              </p>
              <div className="flex justify-center items-center space-x-8 text-orange-600">
                <div className="text-center">
                  <div className="text-2xl font-bold">Quality</div>
                  <div className="text-sm">First</div>
                </div>
                <div className="w-px h-12 bg-orange-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Patient</div>
                  <div className="text-sm">Focused</div>
                </div>
                <div className="w-px h-12 bg-orange-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Innovation</div>
                  <div className="text-sm">Driven</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
            Get in Touch with Our Team
          </h2>
          <p className="text-xl text-orange-100 mb-12">
            Ready to partner with Pakistan&apos;s leading pharmaceutical supplier? 
            Contact us today to discuss your healthcare supply requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white/95 backdrop-blur-sm border-0">
              <CardHeader className="text-center p-0 pb-4">
                <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Visit Our Office</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-center">
                <p className="text-gray-600">
                  Plot No. 86, Street 08<br />
                  I-9/2 Islamabad, Pakistan
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 bg-white/95 backdrop-blur-sm border-0">
              <CardHeader className="text-center p-0 pb-4">
                <User className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Contact CEO</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-center">
                <p className="text-gray-600">
                  Mudassar Saghir<br />
                  mudassar@advancebiotech.net<br />
                  0335 5359327
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Call: 0335 5359327
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
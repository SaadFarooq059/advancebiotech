import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, Eye, Heart, Users, Globe, Award, Sparkles, Zap, Star, ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Vision() {
  const visionPoints = [
    {
      icon: <Eye className="h-12 w-12 text-purple-600" />,
      title: "Clear Vision",
      description: "To become Pakistan's most trusted pharmaceutical supplier, ensuring quality healthcare reaches every corner of the nation.",
      gradient: "from-blue-50 to-purple-50"
    },
    {
      icon: <Target className="h-12 w-12 text-green-600" />,
      title: "Strategic Mission",
      description: "Bridging the gap between healthcare providers and patients through reliable, quality-assured pharmaceutical supply chain solutions.",
      gradient: "from-green-50 to-purple-50"
    },
    {
      icon: <Heart className="h-12 w-12 text-purple-600" />,
      title: "Core Values",
      description: "Integrity, quality, reliability, and customer-centricity guide every decision we make in our pharmaceutical supply operations.",
      gradient: "from-purple-50 to-green-50"
    }
  ];

  const goals = [
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "National Coverage",
      description: "Expand our distribution network to serve every major healthcare facility across Pakistan.",
      color: "bg-purple-50"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Healthcare Access",
      description: "Improve healthcare accessibility by ensuring timely availability of essential medicines.",
      color: "bg-green-50"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Quality Excellence",
      description: "Maintain the highest standards of quality in all pharmaceutical products we supply.",
      color: "bg-purple-50"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Innovation Drive",
      description: "Continuously innovate our supply chain processes to better serve healthcare providers.",
      color: "bg-yellow-50"
    },
    {
      icon: <Star className="h-8 w-8 text-orange-600" />,
      title: "Excellence Standard",
      description: "Set new benchmarks in pharmaceutical distribution that others aspire to achieve.",
      color: "bg-pink-50"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-orange-600" />,
      title: "Future Ready",
      description: "Prepare for tomorrow's healthcare challenges with advanced supply solutions.",
      color: "bg-indigo-50"
    }
  ];

  const achievements = [
    { number: "2018", label: "Established", icon: <Star className="h-6 w-6 text-orange-600" /> },
    { number: "500+", label: "Healthcare Partners", icon: <Users className="h-6 w-6 text-orange-600" /> },
    { number: "1000+", label: "Products Supplied", icon: <Award className="h-6 w-6 text-orange-600" /> },
    { number: "24/7", label: "Support Available", icon: <Heart className="h-6 w-6 text-orange-600" /> }
  ];

  const futureGoals = [
    {
      year: "2025",
      title: "Nationwide Expansion",
      description: "Establish partnerships with 1000+ healthcare facilities and expand to every major city in Pakistan.",
      icon: <Globe className="h-6 w-6 text-orange-600" />,
      color: "bg-gradient-to-br from-blue-50 to-orange-50"
    },
    {
      year: "2026",
      title: "Digital Innovation",
      description: "Launch comprehensive digital platform for seamless ordering and real-time inventory management.",
      icon: <Zap className="h-6 w-6 text-orange-600" />,
      color: "bg-gradient-to-br from-green-50 to-orange-50"
    },
    {
      year: "2027",
      title: "Market Leadership",
      description: "Become Pakistan's leading pharmaceutical supplier with sustainable and eco-friendly practices.",
      icon: <Award className="h-6 w-6 text-orange-600" />,
      color: "bg-gradient-to-br from-purple-50 to-orange-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-300/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="bg-orange-800/50 text-orange-100 hover:bg-orange-900/50 mb-6 px-8 py-3 text-lg">
            <Sparkles className="mr-2 h-5 w-5" />
            Our Vision & Mission
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Shaping the Future of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white">
              Healthcare in Pakistan
            </span>
          </h1>
          <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-12">
            At Advance Biotech, we envision a Pakistan where quality healthcare is accessible 
            to all through reliable pharmaceutical supply chain solutions that transform lives.
          </p>
          
        </div>
      </section>

      {/* Vision, Mission, Values Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
              Foundation
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Foundation Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide our journey towards transforming Pakistan&apos;s healthcare landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${point.gradient} overflow-hidden relative`}>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl group-hover:bg-orange-300/40 transition-all duration-500"></div>
                <CardHeader className="text-center pb-6 relative z-10">
                  <div className="mx-auto mb-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl w-fit shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-orange-600 transition-colors">
                    {point.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {point.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
              Achievements
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results that reflect our commitment to excellence in pharmaceutical supply.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-0">
                  <div className="mb-6 p-4 bg-orange-50 rounded-2xl w-fit mx-auto group-hover:bg-orange-100 transition-colors">
                    {achievement.icon}
                  </div>
                  <div className="text-4xl font-bold text-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
                Our Vision
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
                Transforming Pakistan&apos;s
                <span className="text-orange-600"> Healthcare Future</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                We envision a Pakistan where every hospital, clinic, and pharmacy has reliable 
                access to quality pharmaceutical products. Our vision extends beyond mere supply 
                to creating a comprehensive healthcare ecosystem that prioritizes patient well-being 
                and medical excellence.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Through strategic partnerships with manufacturers, healthcare providers, and 
                regulatory bodies, we aim to set new standards in pharmaceutical distribution 
                that other companies will aspire to achieve.
              </p>
              <Card className="p-8 bg-gradient-to-br from-orange-50 to-white border-orange-100">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Heart className="h-8 w-8 text-orange-600 mr-3" />
                    <h3 className="text-xl font-semibold text-orange-800">
                      &ldquo;Healthcare is a fundamental right, not a privilege.&rdquo;
                    </h3>
                  </div>
                  <p className="text-orange-700 leading-relaxed">
                    This belief drives our commitment to making quality pharmaceuticals accessible 
                    across Pakistan, regardless of geographical or economic barriers.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 overflow-hidden">
                <Image 
                  src="/vision.jpg" 
                  alt="Healthcare vision" 
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-300 rounded-full opacity-40"></div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {goals.slice(0, 4).map((goal, index) => (
                  <Card key={index} className={`p-6 ${goal.color} border-0 hover:shadow-lg transition-shadow duration-300`}>
                    <CardContent className="p-0 text-center">
                      <div className="mb-3 p-2 bg-white rounded-lg w-fit mx-auto">
                        {goal.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                        {goal.title}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {goal.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-6">
            Our Mission
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12">
            Mission Statement
          </h2>
          <Card className="p-12 bg-gradient-to-br from-orange-50 via-white to-orange-50 shadow-2xl border-0 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-200/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-300/20 rounded-full blur-2xl"></div>
            <CardContent className="text-center relative z-10">
              <div className="p-6 bg-orange-100 rounded-2xl w-fit mx-auto mb-8">
                <Target className="h-16 w-16 text-orange-600" />
              </div>
              <p className="text-2xl text-gray-700 leading-relaxed mb-10 font-medium">
                &ldquo;To revolutionize pharmaceutical supply in Pakistan by delivering the highest 
                quality medicines and healthcare products through innovative distribution 
                solutions, ensuring every healthcare provider has the tools they need to 
                save lives and improve patient outcomes.&rdquo;
              </p>
              <div className="flex justify-center items-center space-x-8 text-orange-600">
                <div className="text-center">
                  <div className="text-3xl font-bold">Quality</div>
                  <div className="text-sm">First</div>
                </div>
                <div className="w-px h-16 bg-orange-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">Patient</div>
                  <div className="text-sm">Focused</div>
                </div>
                <div className="w-px h-16 bg-orange-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">Innovation</div>
                  <div className="text-sm">Driven</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Future Goals Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
              Future Roadmap
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Future Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Looking ahead, we have ambitious plans to expand our impact on Pakistan&apos;s healthcare landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureGoals.map((goal, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-0 ${goal.color} overflow-hidden relative`}>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-500"></div>
                <CardHeader className="text-center pb-4 relative z-10">
                  <Badge className="bg-orange-600 text-white hover:bg-orange-700 mb-4 w-fit mx-auto px-4 py-2 text-lg">
                    {goal.year}
                  </Badge>
                  <div className="mx-auto mb-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl w-fit shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {goal.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-orange-600 transition-colors">
                    {goal.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {goal.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
            Join Us in Transforming Healthcare
          </h2>
          <p className="text-xl text-orange-100 mb-12 leading-relaxed">
            Be part of our vision to make quality healthcare accessible across Pakistan. 
            Contact us today to discuss partnership opportunities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white/95 backdrop-blur-sm border-0 hover:bg-white transition-colors">
              <CardContent className="text-center p-0">
                <Phone className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us Today</h3>
                <p className="text-gray-600 mb-4">Ready to discuss your pharmaceutical needs?</p>
                <p className="text-orange-600 font-bold text-lg">0335 5359327</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-white/95 backdrop-blur-sm border-0 hover:bg-white transition-colors">
              <CardContent className="text-center p-0">
                <Mail className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your requirements and questions</p>
                <p className="text-orange-600 font-bold">info@advancebiotech.net</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
              <ArrowRight className="mr-2 h-5 w-5" />
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
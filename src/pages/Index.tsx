
import React from 'react';
import { Calendar, Users, Target, Heart, Shield, Lightbulb, ArrowRight, CheckCircle, Globe, Mail, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import ValueCard from '@/components/ValueCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import StoolIllustration from '@/components/StoolIllustration';
import ClientLogos from '@/components/ClientLogos';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const services = [
    {
      icon: Calendar,
      title: "Event Planning & Management",
      description: "At SLC, we specialize in curating unforgettable experiences. Whether organizing corporate conferences, leadership retreats, or nonprofit gatherings, our collaborative approach ensures every event is seamlessly tailored to meet your unique needs.",
      features: [
        "Strategic event planning and design",
        "Vendor coordination and management",
        "On-site execution and support",
        "Post-event analysis and reporting"
      ]
    },
    {
      icon: Users,
      title: "Training & Workshop Facilitation",
      description: "We transform meetings into powerful tools for decision-making and innovation. From team-building activities to strategic planning sessions, our skilled facilitators ensure structured, engaging, and productive outcomes.",
      features: [
        "Strategic planning sessions",
        "Team building workshops",
        "Conflict resolution facilitation",
        "Change management sessions"
      ]
    },
    {
      icon: Target,
      title: "Leadership & Team Coaching",
      description: "Empower your leadership with bespoke coaching programs designed for individual and team growth. Our approach fosters confidence, enhances performance, and equips leaders with the tools to thrive in dynamic environments.",
      features: [
        "Executive and leadership coaching",
        "Team performance coaching",
        "Career development guidance",
        "Personal effectiveness training"
      ]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "Transparency and honesty in all interactions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creativity and forward-thinking solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "A supportive environment fostering teamwork and mutual respect."
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "Consistently delivering the highest standards."
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "Promoting growth through continuous learning and development."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="home" className="section-padding gradient-bg overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pt-16">
            <div className="animate-slide-in-left">
              <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-primary mb-6 leading-tight">
                Your Ideas
                <span className="text-gradient block">Crystallized</span>
              </h1>
              <p className="text-xl text-silver-600 mb-8 leading-relaxed max-w-2xl">
                Partner with Silverlining Consulting Limited and transform your vision into reality. Get Started Today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                  Discover Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white">
                  Schedule Consultation
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <StoolIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <AnimatedCounter end={20} suffix="+" />
              <p className="text-silver-600 font-medium mt-2">Years of Experience</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <AnimatedCounter end={500} suffix="+" />
              <p className="text-silver-600 font-medium mt-2">Events Managed</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <AnimatedCounter end={98} suffix="%" />
              <p className="text-silver-600 font-medium mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-6">
                About Us
              </h2>
              <p className="text-lg text-silver-600 mb-6 leading-relaxed">
                Silverlining Consulting Limited (SLC) is a premier event management firm incorporated in 2011 in Kenya. We stand at the intersection of creativity, strategy, and execution. Inspired by the traditional African three-legged stool, which symbolizes balance, strength, and resilience, these values are integral to our success.
              </p>
              <div className="mb-8">
                <h3 className="font-semibold text-primary mb-4 text-xl">Our expertise lies in:</h3>
                <ul className="space-y-2 text-silver-600">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                    <span>Event Planning & Management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                    <span>Training & Workshop Facilitation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                    <span>Leadership & Team Coaching</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-silver-600 leading-relaxed">
                With over 20 years of experience in the Eastern and Southern Africa regions, our team has partnered with parastatals, corporates, and NGOs to deliver WOW events every time, without fail.
              </p>
            </div>
            
            <div className="animate-fade-in">
              <Card className="bg-white/80 backdrop-blur-sm border-silver-200">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-serif font-semibold text-xl text-primary mb-3">Mission Statement</h3>
                      <p className="text-silver-700 leading-relaxed italic">
                        "To create transformative experiences through innovative event management, impactful meeting facilitation, and empowering coaching."
                      </p>
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-xl text-primary mb-3">Vision Statement</h3>
                      <p className="text-silver-700 leading-relaxed italic">
                        "To be a leading force in redefining excellence in event management and professional development."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-6">
              Our Services
            </h2>
            <p className="text-xl text-silver-600 max-w-3xl mx-auto leading-relaxed">
              Like the balanced strength of a three-legged stool, our comprehensive services 
              work in harmony to support your organization's growth and success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="section-padding gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-6">
              Core Values
            </h2>
            <p className="text-xl text-silver-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide every interaction, decision, and 
              outcome in our partnership with you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ValueCard {...value} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-6">
              Experience
            </h2>
            <p className="text-xl text-silver-600 max-w-3xl mx-auto leading-relaxed">
              Our proven track record of delivering exceptional results across Eastern and Southern Africa.
            </p>
          </div>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="section-padding gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-6">
              Our Clients
            </h2>
            <p className="text-xl text-silver-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by leading organizations across various sectors.
            </p>
          </div>
          <ClientLogos />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-8">
                Why Choose Us?
              </h2>
              <ul className="space-y-4 text-lg text-silver-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <span><strong>Proven Track Record:</strong> 20+ years of delivering results across Eastern and Southern Africa.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <span><strong>Tailored Solutions:</strong> Custom services aligned to your unique goals.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <span><strong>Expert Team:</strong> Passionate professionals dedicated to excellence.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <span><strong>Regional Expertise:</strong> In-depth understanding of local contexts for impactful outcomes.</span>
                </li>
              </ul>
            </div>
            
            <div className="animate-fade-in">
              <h3 className="font-serif font-bold text-3xl text-primary mb-6">
                What Our Clients Say:
              </h3>
              <div className="space-y-6">
                <Card className="bg-white border-silver-200">
                  <CardContent className="p-6">
                    <blockquote className="text-silver-700 italic leading-relaxed mb-4">
                      "Silverlining Consulting Limited exceeded our expectations. Their innovative approach and meticulous planning made our event a resounding success."
                    </blockquote>
                    <footer className="text-primary font-semibold">
                      — Oxfam International
                    </footer>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-silver-200">
                  <CardContent className="p-6">
                    <blockquote className="text-silver-700 italic leading-relaxed mb-4">
                      "The leadership coaching we received transformed our team dynamics and equipped us with tools for sustained growth."
                    </blockquote>
                    <footer className="text-primary font-semibold">
                      — PCEA-Loresho Church
                    </footer>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6">
              Contact Us:
            </h2>
            <p className="text-xl text-silver-200 mb-8 leading-relaxed">
              Partner with Silverlining Consulting Limited and transform your vision into reality. Get Started Today.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6" />
                <span>silverliningconsult@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>call +254726784506</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Globe className="w-6 h-6" />
                <span>https://silverlining-consultancy.web.app</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

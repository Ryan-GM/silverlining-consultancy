
import React from 'react';
import { Calendar, Users, Target, Heart, Shield, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import ValueCard from '@/components/ValueCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import StoolIllustration from '@/components/StoolIllustration';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const services = [
    {
      icon: Calendar,
      title: "Event Management",
      description: "From corporate conferences to intimate workshops, we orchestrate seamless events that leave lasting impressions.",
      features: [
        "Strategic event planning and design",
        "Vendor coordination and management",
        "On-site execution and support",
        "Post-event analysis and reporting"
      ]
    },
    {
      icon: Users,
      title: "Facilitation",
      description: "Expert facilitation services that unlock collective wisdom and drive meaningful outcomes in your meetings and workshops.",
      features: [
        "Strategic planning sessions",
        "Team building workshops",
        "Conflict resolution facilitation",
        "Change management sessions"
      ]
    },
    {
      icon: Target,
      title: "Coaching",
      description: "Personalized coaching that empowers leaders and teams to achieve their full potential and drive organizational success.",
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
      description: "We operate with unwavering honesty and transparency, building trust through our actions and commitments."
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, delivering exceptional quality and results."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creative solutions and fresh perspectives to solve complex challenges and drive progress."
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
                Building Your
                <span className="text-gradient block">Silver Lining</span>
              </h1>
              <p className="text-xl text-silver-600 mb-8 leading-relaxed max-w-2xl">
                Like the traditional African three-legged stool, we provide the essential pillars 
                of stability for your organization: expert event management, skilled facilitation, 
                and transformative coaching.
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
              <AnimatedCounter end={500} suffix="+" />
              <p className="text-silver-600 font-medium mt-2">Events Managed</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <AnimatedCounter end={150} suffix="+" />
              <p className="text-silver-600 font-medium mt-2">Organizations Served</p>
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
                Our Story & Philosophy
              </h2>
              <p className="text-lg text-silver-600 mb-6 leading-relaxed">
                Inspired by the wisdom of the African three-legged stool, Silverlining Consulting 
                embodies the principles of balance, stability, and strength. Just as this traditional 
                symbol represents the harmony between past, present, and future, our three core 
                services work together to create lasting organizational success.
              </p>
              <p className="text-lg text-silver-600 mb-8 leading-relaxed">
                Founded on the belief that every challenge contains the seeds of opportunity, 
                we help organizations discover their silver lining and transform potential into performance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Mission</h3>
                    <p className="text-silver-600">Empowering organizations to achieve sustainable growth through expert guidance and strategic support.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Vision</h3>
                    <p className="text-silver-600">To be the trusted partner that helps organizations transform challenges into opportunities for growth.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <Card className="bg-white/80 backdrop-blur-sm border-silver-200">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-silver-700 italic leading-relaxed">
                    "Like the three legs of a stool, our services provide the essential foundation 
                    for organizational stability. Event Management creates connection, Facilitation 
                    builds understanding, and Coaching develops capability. Together, they form 
                    an unshakeable base for success."
                  </blockquote>
                  <footer className="mt-6">
                    <cite className="text-primary font-semibold">
                      — Silverlining Consulting Philosophy
                    </cite>
                  </footer>
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
              Our Three Pillars of Excellence
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
              Our Core Values
            </h2>
            <p className="text-xl text-silver-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide every interaction, decision, and 
              outcome in our partnership with you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6">
              Ready to Build Your Silver Lining?
            </h2>
            <p className="text-xl text-silver-200 mb-8 leading-relaxed">
              Let's work together to create the stability, balance, and strength your 
              organization needs to thrive. Contact us today to begin your transformation.
            </p>
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


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Lightbulb, Target, CheckCircle, Calendar, Cog } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      icon: Users,
      step: "01",
      title: "Discovery & Consultation",
      description: "We begin with understanding your unique needs, objectives, and challenges through detailed consultation sessions.",
      details: [
        "Initial needs assessment",
        "Stakeholder interviews",
        "Goal setting and alignment",
        "Resource evaluation"
      ]
    },
    {
      icon: Lightbulb,
      step: "02",
      title: "Strategic Planning",
      description: "Our team develops a comprehensive strategy tailored to your specific requirements and organizational culture.",
      details: [
        "Custom solution design",
        "Timeline development",
        "Resource allocation",
        "Risk assessment"
      ]
    },
    {
      icon: Cog,
      step: "03",
      title: "Preparation & Coordination",
      description: "Meticulous planning and coordination ensure every detail is perfectly organized for seamless execution.",
      details: [
        "Vendor coordination",
        "Logistics management",
        "Material preparation",
        "Team briefings"
      ]
    },
    {
      icon: Target,
      step: "04",
      title: "Expert Execution",
      description: "Our experienced team delivers exceptional results with professional facilitation and on-site support.",
      details: [
        "Professional facilitation",
        "Real-time problem solving",
        "Quality assurance",
        "Participant engagement"
      ]
    },
    {
      icon: CheckCircle,
      step: "05",
      title: "Follow-up & Evaluation",
      description: "We ensure lasting impact through comprehensive evaluation and continued support for your success.",
      details: [
        "Performance analysis",
        "Feedback collection",
        "Report generation",
        "Improvement recommendations"
      ]
    }
  ];

  return (
    <section className="section-padding gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-6">
            Our Process
          </h2>
          <p className="text-xl text-silver-600 max-w-3xl mx-auto leading-relaxed">
            Like the balanced strength of a three-legged stool, our proven 5-step process 
            ensures stability, quality, and exceptional results for every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-silver-200 h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="font-serif font-bold text-xl text-primary mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-silver-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-silver-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Card className="bg-white/80 backdrop-blur-sm border-silver-200 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif font-bold text-2xl text-primary mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-silver-600 leading-relaxed">
                Let's discuss your project and create a customized approach that delivers 
                exceptional results for your organization.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

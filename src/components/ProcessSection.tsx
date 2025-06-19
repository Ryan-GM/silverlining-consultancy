
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Target, CheckCircle2 } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      icon: Search,
      step: "01",
      title: "Approach",
      description: "We begin with thorough consultation and strategic planning, understanding your unique needs and objectives to craft the perfect solution.",
      details: [
        "Comprehensive needs assessment",
        "Stakeholder consultation sessions",
        "Strategic planning and design",
        "Resource evaluation and planning"
      ]
    },
    {
      icon: Target,
      step: "02", 
      title: "Result",
      description: "Through expert execution and meticulous coordination, we deliver exceptional outcomes that exceed expectations and create lasting impact.",
      details: [
        "Professional facilitation and management",
        "Seamless coordination and logistics",
        "Quality assurance and monitoring",
        "Real-time problem solving and adaptation"
      ]
    },
    {
      icon: CheckCircle2,
      step: "03",
      title: "Conclusion",
      description: "We ensure sustained success through comprehensive evaluation, detailed reporting, and continued support for your organization's growth.",
      details: [
        "Thorough performance evaluation",
        "Comprehensive feedback analysis",
        "Detailed impact reporting",
        "Ongoing support and recommendations"
      ]
    }
  ];

  return (
    <section className="section-padding gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-6">
            Our Approach
          </h2>
          <p className="text-xl text-silver-600 max-w-3xl mx-auto leading-relaxed">
            Like the balanced strength of a three-legged stool, our proven process 
            ensures stability, quality, and exceptional results for every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="bg-white/95 backdrop-blur-sm border-silver-200 h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors mb-2">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="font-serif font-bold text-2xl text-primary mb-4 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-silver-600 leading-relaxed mb-6 text-center">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-silver-600 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Card className="bg-white/90 backdrop-blur-sm border-silver-200 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-serif font-bold text-2xl text-primary mb-4">
                Ready to Experience Excellence?
              </h3>
              <p className="text-silver-600 leading-relaxed">
                Let's discuss your project and create a customized approach that delivers 
                exceptional results aligned with your organization's goals and vision.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

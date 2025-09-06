import React from 'react';
import { Clock, DollarSign, MapPin, Shield, Users, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Fast & Reliable',
    description: 'Errands completed on time, every time. We understand the value of your time.',
    color: 'blue'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Convenient',
    description: 'One call handles all your needs. No need to juggle multiple service providers.',
    color: 'green'
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Affordable',
    description: 'Fair prices for everyday people. Quality service without breaking the bank.',
    color: 'orange'
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Local & Trusted',
    description: 'Serving Nairobi, Kitengela, and surrounding areas with care. We know the region and understand local needs.',
    color: 'purple'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Secure & Safe',
    description: 'Your items and information are handled with the utmost care and confidentiality.',
    color: 'teal'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Personal Touch',
    description: 'Dedicated service with a smile. We treat every errand as if it were our own.',
    color: 'pink'
  }
];

const colorClasses = {
  blue: 'text-blue-600 bg-blue-50',
  green: 'text-green-600 bg-green-50',
  orange: 'text-orange-600 bg-orange-50',
  purple: 'text-purple-600 bg-purple-50',
  teal: 'text-teal-600 bg-teal-50',
  pink: 'text-pink-600 bg-pink-50'
};

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Urban Assist?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just an errand service – we're your trusted partner in making life easier. 
            Here's what sets us apart in Nairobi, Kitengela, and surrounding areas.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const colorClass = colorClasses[benefit.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${colorClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Errands Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Available Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">2hr</div>
              <div className="text-gray-600">Average Completion</div>
            </div>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl font-bold text-blue-300 mb-4">"</div>
              <p className="text-xl mb-6 leading-relaxed">
                Urban Assist has been a game-changer for our family. Between work and kids, 
                we barely had time for errands. Now we just call them, and everything gets done perfectly. 
                They're reliable, affordable, and always professional.
              </p>
              <div className="text-blue-200">
                <div className="font-semibold">Sarah M.</div>
                <div className="text-sm">Working Mother, Nairobi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import React from 'react';
import { 
  ShoppingCart, 
  Briefcase, 
  Home, 
  GraduationCap, 
  Heart, 
  Wrench,
  Package,
  FileText,
  Zap,
  Car,
  Printer,
  Phone
} from 'lucide-react';

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  services: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'shopping',
    title: 'Shopping & Delivery',
    icon: <ShoppingCart className="w-8 h-8" />,
    color: 'blue',
    services: [
      'Supermarket & market shopping',
      'Restaurant takeaway delivery',
      'Gift shopping & surprise drop-offs'
    ]
  },
  {
    id: 'business',
    title: 'Business & Office Errands',
    icon: <Briefcase className="w-8 h-8" />,
    color: 'green',
    services: [
      'Document collection & drop-off',
      'Courier & parcel delivery',
      'Office supplies delivery',
      'Queuing for government or service offices'
    ]
  },
  {
    id: 'household',
    title: 'Household Support',
    icon: <Home className="w-8 h-8" />,
    color: 'purple',
    services: [
      'Utility bill payments (electricity, water, internet)',
      'Gas cylinder delivery',
      'Laundry & dry-cleaning pickup/drop-off',
      'Prescription & pharmacy runs'
    ]
  },
  {
    id: 'student',
    title: 'Student Support',
    icon: <GraduationCap className="w-8 h-8" />,
    color: 'orange',
    services: [
      'Printing & photocopying',
      'Delivery of assignments & study materials',
      'Stationery & supplies delivery'
    ]
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle & Personal Errands',
    icon: <Heart className="w-8 h-8" />,
    color: 'pink',
    services: [
      'Event ticket booking & collection',
      'Parcel pickup from courier offices or bus stages',
      'Mobile money assistance (trusted clients only)',
      'Airtime & small shopping errands'
    ]
  },
  {
    id: 'specialized',
    title: 'Specialized Errands',
    icon: <Wrench className="w-8 h-8" />,
    color: 'teal',
    services: [
      'Spare parts pickup for mechanics',
      'Farm supplies delivery',
      'Small-scale relocation & moving support (via boda/bakkie partners)'
    ]
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    border: 'border-blue-200',
    hover: 'hover:border-blue-400'
  },
  green: {
    bg: 'bg-green-50',
    icon: 'text-green-600',
    border: 'border-green-200',
    hover: 'hover:border-green-400'
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'text-purple-600',
    border: 'border-purple-200',
    hover: 'hover:border-purple-400'
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'text-orange-600',
    border: 'border-orange-200',
    hover: 'hover:border-orange-400'
  },
  pink: {
    bg: 'bg-pink-50',
    icon: 'text-pink-600',
    border: 'border-pink-200',
    hover: 'hover:border-pink-400'
  },
  teal: {
    bg: 'bg-teal-50',
    icon: 'text-teal-600',
    border: 'border-teal-200',
    hover: 'hover:border-teal-400'
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From everyday errands to specialized tasks, we've got you covered. 
            Our comprehensive services are designed to save you time and make your life easier.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={category.id}
                className={`p-8 rounded-2xl border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-lg group`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={colors.icon}>
                    {category.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                
                <ul className="space-y-3">
                  {category.services.map((service, index) => (
                    <li key={index} className="flex items-start space-x-3 text-gray-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Something Else?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Don't see what you're looking for? We're flexible and happy to help with other errands too. 
              Just give us a call and let's discuss how we can assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0111679286" 
                className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                0111679286
              </a>
              <a 
                href="tel:0717562660" 
                className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                0717562660
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
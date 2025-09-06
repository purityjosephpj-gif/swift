import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">Swift Assist</div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Kerugoya's trusted errand-running and personal assistance service. 
              Your errands, done fast.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/254111679286" 
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="tel:0111679286" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="mailto:swiftassistkerugoya@gmail.com" 
                className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Shopping & Delivery</li>
              <li>Office Errands</li>
              <li>Household Support</li>
              <li>Student Services</li>
              <li>Bill Payments</li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-300">0111679286</div>
                  <div className="text-gray-300">0717562660</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">swiftassistkerugoya@gmail.com</div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">Kerugoya, Kenya</div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div>Mon-Fri: 7AM-8PM</div>
                  <div>Sat: 8AM-6PM</div>
                  <div>Sun: 9AM-5PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Swift Assist Kerugoya. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              Built with care for the people of Kerugoya
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
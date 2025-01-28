'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Ticket, Truck, Phone, MapPin, Calendar, Menu } from 'lucide-react';

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Our Projects', href: '#' },
  { name: 'About Us', href: '#' },
]

const services = [
  'International Air Tickets',
  'Domestic Flights',
  'Car Rental Services',
  'Travel Insurance',
  'Visa Assistance',
  'Hotel Bookings',
  'Airport Transfers',
  'Holiday Packages',
];

const cards = [
  {
    name: 'International Air Tickets',
    description: 'Book flights to any destination worldwide with our competitive rates and excellent service.',
    icon: Globe,
  },
  {
    name: 'Domestic Flights',
    description: 'Convenient domestic travel options with the best local carriers.',
    icon: Ticket,
  },
  {
    name: 'Car Rental Services',
    description: 'Wide range of vehicles available for hire, from economy to luxury.',
    icon: Truck,
  },
  {
    name: 'Travel Insurance',
    description: 'Comprehensive travel insurance for your peace of mind.',
    icon: Calendar,
  },
  {
    name: 'Dubai Visa',
    description: 'Expert guidance through visa application processes for various destinations.',
    icon: MapPin,
  },
  {
    name: 'Hotel Bookings',
    description: 'Access to a global network of hotels at competitive prices.',
    icon: Phone,
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="bg-white text-gray-800">
      <header className="bg-transparent backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Red Apple Travel & Tours</span>
              <img src="/Redlogo.jpg " alt="Red Apple Logo" className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-indigo-300"
            >
              <span className="sr-only">Open main menu</span>
              <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/list.svg" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-600 hover:text-indigo-400 transition duration-300">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/contact" className="text-sm font-semibold leading-6 text-gray-600 hover:text-indigo-400 transition duration-300">
              Contact Us <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Tanshi Digital Solutions</span>
                <img src="/Redlogo.jpg" alt="Red Apple Logo" className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/x.svg" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" id="hero">
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8 lg:py-56"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Red Apple Travel & Tours
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-8">
            Your gateway to worldwide destinations. Experience seamless travel planning with our expert services.
          </p>
          <div className="flex gap-4">
            <a href="#services" 
               className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition duration-300">
              Explore Services
            </a>
            <a href="#contact" 
               className="px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition duration-300">
              Contact Us
            </a>
            <ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
            
          </div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gray-50" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Your Trusted Travel Partner</h2>
              <p className="text-lg text-gray-600">
                Red Apple Travel & Tours has been serving travelers with excellence for over a decade. We specialize in providing comprehensive travel solutions.
              </p>
              <ul className="space-y-4">
                {['Access to all major airlines worldwide', '24/7 customer support', 'Competitive rates guaranteed'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-red-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-xl bg-gray-900"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-900" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-300">Comprehensive travel solutions for every journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <card.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{card.name}</h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600">Ready to start your journey? Get in touch with us today!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: 'Phone', lines: ['+260 970 000 000', '+260 950 000 000'] },
              { icon: MapPin, title: 'Location', lines: ['123 Travel House', 'Lusaka, Zambia'] },
              { icon: Calendar, title: 'Hours', lines: ['Mon-Fri: 8:00-17:00', 'Sat: 9:00-13:00'] }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <item.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-gray-600">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}
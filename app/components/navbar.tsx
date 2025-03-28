"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "../../public/image/logo.png";
const services = [
  {
    category: "Creative",
    subItems: [
      {
        name: "Creative Strategy",
        icon: "🎨",
        href: "/services/creative-strategy",
      },
      {
        name: "Brand Identity Development",
        icon: "🆔",
        href: "/services/brand-identity",
      },
      {
        name: "Content Writing",
        icon: "📝",
        href: "/services/content-writing",
      },
      { name: "Website Design", icon: "💻", href: "/services/website-design" },
    ],
  },
  { category: "Paid Advertising", subItems: [] },
  { category: "SEO", subItems: [] },
  { category: "Social Media", subItems: [] },
  { category: "Nurture", subItems: [] },
  { category: "Reputation", subItems: [] },
  { category: "Development", subItems: [] },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(services[0]);

  return (
    <header className="bg-[#022641] text-white shadow-md top-0 sticky z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            width={250}
            height={100}
            alt="Picture of the author"
          />
        </Link>
        {/* Navigation Links */}
        <nav className="flex space-x-8">
          <Link href="/about" className="hover:text-cyan-300">
            About Ussdsds
          </Link>
          <div className="relative">
            <button
              className="flex items-center space-x-1 hover:text-cyan-300"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <span>Services</span>
              <ChevronDown size={16} />
            </button>

            {/* Dropdown */}
            {openDropdown && (
              <div className="absolute left-0 mt-3 w-64 bg-white text-black rounded-lg shadow-lg flex">
                {/* Sidebar Category */}
                <div className="w-1/3 border-r">
                  {services.map((service, idx) => (
                    <button
                      key={idx}
                      className={`block w-full px-4 py-2 text-left font-medium ${
                        activeCategory.category === service.category
                          ? "bg-gray-200"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveCategory(service)}
                    >
                      {service.category}
                    </button>
                  ))}
                </div>

                {/* Sub Items */}
                <div className="w-2/3 p-3">
                  {activeCategory.subItems.length > 0 ? (
                    activeCategory.subItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center space-x-3 py-2 hover:bg-gray-100 px-2 rounded-md"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center">No sub-services</p>
                  )}
                </div>
              </div>
            )}
          </div>
          <Link href="/results" className="hover:text-cyan-300">
            Results
          </Link>
          <Link href="/resources" className="hover:text-cyan-300">
            Resources
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="bg-cyan-400 px-5 py-2 rounded-md text-black font-semibold hover:bg-cyan-500 transition">
          LET'S TALK
        </button>
      </div>
    </header>
  );
}

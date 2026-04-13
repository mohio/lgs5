"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Building2,
  Wrench,
  HardHat,
  Ruler,
  Shield,
  FileText,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowDown,
  Layers,
  Settings,
  PenTool,
  Home as HomeIcon,
  ClipboardCheck,
  Calculator,
  MessageSquare,
} from "lucide-react";

// Logo component - Using actual logo image
function Logo({ className = "", size = "default" }: { className?: string; size?: "default" | "large" | "small" }) {
  const sizeClass = size === "large" ? "w-14 h-14" : size === "small" ? "w-8 h-8" : "w-10 h-10";
  return (
    <img
      src="https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/logo-gan.png"
      alt="Gan Group Logo"
      className={`${sizeClass} object-contain ${className}`}
    />
  );
}

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "Бидний тухай" },
    { href: "#services", label: "Үйлчилгээ" },
    { href: "#projects", label: "Төслүүд" },
    { href: "#contact", label: "Холбоо барих" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0B0B0B] shadow-xl py-3"
          : "bg-[#0B0B0B]/90 backdrop-blur-md py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Logo />
          <span className="text-white font-bold text-xl tracking-[0.1em] font-['Oswald']">GAN Group</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 text-sm font-medium tracking-wide hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary text-xs px-6 py-3"
          >
            Захиалах
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#0B0B0B] transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-custom py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-lg font-medium py-2 border-b border-[#3A3F45] hover:text-[#A7A9AC] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-4 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Холбогдох
          </a>
        </nav>
      </div>
    </header>
  );
}

// Hero Section with Video Background
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0B]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source src="https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/hero.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img
            src="https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2001.JPG"
            alt="Steel Frame Construction"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-20">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1] font-['Oswald'] uppercase tracking-tight">
            Барилгын цогц<br />
            үйлчилгээг<br />
            <span className="text-[#A7A9AC]">нэг дороос</span>
          </h1>

          {/* Subheading */}
          <p className="text-white/70 text-xl md:text-2xl mb-12 font-light tracking-wide">
            All-in-one
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="btn-primary group">
              <span>Үйлчилгээ харах</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-outline">
              <span>Холбогдох</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3A3F45] to-transparent" />
    </section>
  );
}

// About Section with Image Slider
function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 34 project images for the slider
  const images = [
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2001.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2002.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2003.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2004.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2005.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2006.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2007.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2008.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2009.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2010.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2011.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2012.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2013.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2014.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2015.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2016.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2017.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2018.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2019.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2020.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2021.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2022.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2023.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2024.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2025.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2026.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2027.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2028.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2029.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2030.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2031.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2032.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2033.JPG",
    "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2034.JPG",
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-[2px] bg-[#0B0B0B]" />
              <span className="text-[#3A3F45] text-sm tracking-[0.2em] uppercase font-medium">Бидний тухай</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B0B0B] mb-8 font-['Oswald'] uppercase leading-tight">
              Бид хэн бэ?
            </h2>

            <p className="text-[#3A3F45] text-lg md:text-xl leading-relaxed mb-8">
              “Ган Групп” нь барилгын төслийн зөвлөх үйлчилгээ, зураг төсөл, төсөвт өртөг, 
              инженерчлэл, үйлдвэрлэл, барилга угсралт, гүйцэтгэл зэргийг цогцоор
              нь шийдсэн үйлчилгээний нэгдсэн систем юм.
            </p>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0B0B0B] font-['Oswald']">200+</div>
                <div className="text-[#3A3F45] text-sm uppercase tracking-wider mt-1">Төсөл</div>
              </div>
              <div className="w-px h-16 bg-[#E5E5E5]" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0B0B0B] font-['Oswald']">10+</div>
                <div className="text-[#3A3F45] text-sm uppercase tracking-wider mt-1">Жил</div>
              </div>
              <div className="w-px h-16 bg-[#E5E5E5]" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0B0B0B] font-['Oswald']">3</div>
                <div className="text-[#3A3F45] text-sm uppercase tracking-wider mt-1">Компани</div>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden">
              {/* Slides */}
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-[#0B0B0B]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-[#0B0B0B]" />
              </button>

              {/* Progress Bar & Counter */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                <div className="flex-1 h-1 bg-white/20 overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-500"
                    style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
                  />
                </div>
                <span className="text-white text-sm font-bold font-['Oswald']">
                  {String(currentSlide + 1).padStart(2, '0')} / {images.length}
                </span>
              </div>

              {/* Overlay badge */}
              <div className="absolute bottom-0 right-0 bg-[#0B0B0B] p-6 md:p-8">
                <p className="text-white text-sm md:text-base uppercase tracking-wider font-medium">
                  Барилгын<br />нэгдсэн систем
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section with new order and numbers
function ServicesSection() {
  const services = [
    {
      icon: MessageSquare,
      title: "Зөвлөх үйлчилгээ",
      description: "Төслийн менежмент, инженерчлэл",
    },
    {
      icon: PenTool,
      title: "Зураг төсөл",
      description: "Иж бүрэн зураг төсөл",
    },
    {
      icon: Calculator,
      title: "Төсөвт өртөг",
      description: "Барилгын төслийн санхүүгийн тооцоолол",
    },
    {
      icon: Layers,
      title: "Каркас үйлдвэрлэл",
      description: "Ган каркас үйлдвэрлэл",
    },
    {
      icon: HomeIcon,
      title: "Барилгын өргөтгөл",
      description: "Өргөтгөл, давхар нэмэх",
    },
    {
      icon: Building2,
      title: "Барилга угсралт",
      description: "Бүх төрлийн барилга угсралт",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F5F5F5]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[2px] bg-[#0B0B0B]" />
            <span className="text-[#3A3F45] text-sm tracking-[0.2em] uppercase font-medium">Үйлчилгээ</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B0B0B] mb-6 font-['Oswald'] uppercase leading-tight">
            Бидний үйлчилгээ
          </h2>

          <p className="text-[#3A3F45] text-lg">
            БИД ҮНЭ ЦЭНИЙГ НИЙЛҮҮЛНЭ
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 hover-lift group cursor-pointer border-b-4 border-transparent hover:border-[#0B0B0B] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-[#0B0B0B] flex items-center justify-center group-hover:bg-[#3A3F45] transition-colors">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-5xl font-bold text-[#E5E5E5] font-['Oswald'] group-hover:text-[#0B0B0B] transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0B0B0B] mb-4 font-['Oswald'] uppercase tracking-wide">
                {service.title}
              </h3>

              <p className="text-[#3A3F45] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Us Section
function WhyUsSection() {
  return (
    <section className="py-32 md:py-40 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgba(255,255,255,0.1) 50px,
            rgba(255,255,255,0.1) 100px
          )`
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white font-['Oswald'] uppercase tracking-tight">
              БИД ҮНЭ ЦЭНИЙГ
            </h2>
            <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#A7A9AC] font-['Oswald'] uppercase tracking-tight">
              НИЙЛҮҮЛНЭ.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

// Group Structure Section with logos
function GroupStructureSection() {
  const companies = [
    {
      name: "Прайм Стийл ХХК",
      description: "Төсөл, зөвлөх, төсөв, каркас",
      logo: "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/primesteel.png",
    },
    {
      name: "Юнирүүтс ХХК",
      description: "Зураг төсөл",
      logo: "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/uniroots.png",
    },
    {
      name: "Префаб Хаус ХХК",
      description: "Барилга угсралт",
      logo: "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/prebhouse.png",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-[2px] bg-[#0B0B0B]" />
            <span className="text-[#3A3F45] text-sm tracking-[0.2em] uppercase font-medium">Бүтэц</span>
            <div className="w-16 h-[2px] bg-[#0B0B0B]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B0B0B] mb-6 font-['Oswald'] uppercase leading-tight">
            Барилгын Нэгдсэн систем
          </h2>
        </div>

        {/* Companies Structure */}
        <div className="max-w-5xl mx-auto">
          {/* Main Gan Group Box */}
          <div className="bg-[#0B0B0B] p-8 md:p-12 text-center mb-8">
            <Logo size="large" className="mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold text-white font-['Oswald'] uppercase tracking-wider">
              Gan Group
            </h3>
            <p className="text-[#A7A9AC] mt-2 uppercase tracking-wider text-sm">
              Нэгдсэн удирдлага
            </p>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center">
              <div className="w-px h-8 bg-[#0B0B0B]" />
              <ArrowDown className="w-6 h-6 text-[#0B0B0B]" />
            </div>
          </div>

          {/* Subsidiary Companies with logos */}
          <div className="grid md:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] p-8 text-center hover:bg-[#0B0B0B] hover:text-white transition-all duration-300 group"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-12 h-12 object-contain mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <h4 className="text-xl md:text-2xl font-bold font-['Oswald'] uppercase mb-3 group-hover:text-white">
                  {company.name}
                </h4>
                <p className="text-[#3A3F45] group-hover:text-[#A7A9AC] text-sm">
                  {company.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Arrow to Result */}
          <div className="flex justify-center my-8">
            <div className="flex flex-col items-center">
              <div className="w-px h-8 bg-[#0B0B0B]" />
              <ArrowDown className="w-6 h-6 text-[#0B0B0B]" />
            </div>
          </div>

          {/* Result */}
          <div className="border-4 border-[#0B0B0B] p-8 md:p-10 text-center">
            <p className="text-2xl md:text-3xl font-bold text-[#0B0B0B] font-['Oswald'] uppercase">
              Сонголт = Үр дүн
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Projects Section with updated names
function ProjectsSection() {
  const projects = [
    {
      image: "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2001.JPG",
      title: "Амины орон сууц",
      category: "Каркас + Угсралт",
    },
    {
      image: "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2005.JPG",
      title: "Барилгын өргөтгөл",
      category: "Барилга давхарлах",
    },
    {
      image: "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2010.JPG",
      title: "Дээврийн каркас",
      category: "Каркас угсралт",
    },
    {
      image: "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2015.JPG",
      title: "Үйлчилгээний барилга",
      category: "Зураг төсөл + Гүйцэтгэл",
    },
    {
      image: "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2020.JPG",
      title: "Хотхоны төсөл",
      category: "Цогц шийдэл",
    },
    {
      image: "https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/project%2025.JPG",
      title: "Амины орон сууц",
      category: "Каркас үйлдвэрлэл",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0B0B0B]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[2px] bg-white" />
            <span className="text-[#A7A9AC] text-sm tracking-[0.2em] uppercase font-medium">Төслүүд</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Oswald'] uppercase leading-tight">
            Хэрэгжүүлсэн төслүүд
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Watermark */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5">
                <img src="https://pub-4fd1372fe4174db1963cfd915801ba21.r2.dev/logo-gan.png" alt="Gan Group" className="w-5 h-5 object-contain" />
                <span className="text-white text-xs font-bold tracking-wider uppercase">Gan Group</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#A7A9AC] text-sm uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white font-['Oswald'] uppercase">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Таны хүсэлтийг хүлээн авлаа. Бид тантай удахгүй холбогдох болно.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F5F5F5]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-[2px] bg-[#0B0B0B]" />
              <span className="text-[#3A3F45] text-sm tracking-[0.2em] uppercase font-medium">Холбоо барих</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B0B0B] mb-8 font-['Oswald'] uppercase leading-tight">
              Бидэнтэй холбогдох
            </h2>

            <p className="text-[#3A3F45] text-lg mb-10">
              Барилгын цогц үйлчилгээг нэг дороос авахыг хүсвэл бидэнтэй холбогдоорой.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#0B0B0B] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B0B0B] mb-2 uppercase tracking-wider text-sm">Хаяг</h4>
                  <p className="text-[#3A3F45]">
                    Улаанбаатар хот, СБД, 3-р хороо,<br />
                    Сөүлийн гудамж, Сөүл Плаза, 603
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#0B0B0B] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B0B0B] mb-2 uppercase tracking-wider text-sm">Утас</h4>
                  <p className="text-[#3A3F45]">
                    7777-7107<br />
                    9911-8172<br />
                    9906-4466
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#0B0B0B] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B0B0B] mb-2 uppercase tracking-wider text-sm">Имэйл</h4>
                  <p className="text-[#3A3F45]">
                    info@gan.mn
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-[#0B0B0B] mb-8 font-['Oswald'] uppercase">
              Холбогдох
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#0B0B0B] font-medium mb-2 text-sm uppercase tracking-wider">
                  Нэр
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-[#E5E5E5] focus:border-[#0B0B0B] outline-none transition-colors text-[#0B0B0B]"
                  placeholder="Таны нэр"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#0B0B0B] font-medium mb-2 text-sm uppercase tracking-wider">
                  Утас
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-[#E5E5E5] focus:border-[#0B0B0B] outline-none transition-colors text-[#0B0B0B]"
                  placeholder="9911-2233"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#0B0B0B] font-medium mb-2 text-sm uppercase tracking-wider">
                  Мессеж
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-[#E5E5E5] focus:border-[#0B0B0B] outline-none transition-colors text-[#0B0B0B] resize-none"
                  placeholder="Таны мессеж..."
                />
              </div>

              <button type="submit" className="btn-dark w-full group mt-4">
                <span>Илгээх</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#0B0B0B] pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <Logo />
              <span className="text-white font-bold text-2xl tracking-[0.1em] font-['Oswald'] uppercase">Gan Group</span>
            </a>

            <p className="text-white/60 leading-relaxed max-w-md mb-4">
              Барилгын цогц үйлчилгээг нэг дороос
            </p>
            <p className="text-[#A7A9AC] text-lg font-medium">
              БИД ҮНЭ ЦЭНИЙГ НИЙЛҮҮЛНЭ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-['Oswald'] uppercase tracking-wide">
              Холбоосууд
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Бидний тухай", href: "#about" },
                { label: "Үйлчилгээ", href: "#services" },
                { label: "Төслүүд", href: "#projects" },
                { label: "Холбоо барих", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-['Oswald'] uppercase tracking-wide">
              Холбогдох
            </h4>
            <ul className="space-y-3 mb-8">
              <li className="text-white/60">7777-7107</li>
              <li className="text-white/60">info@gan.mn</li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-[#3A3F45] flex items-center justify-center hover:bg-white hover:text-[#0B0B0B] text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#3A3F45] flex items-center justify-center hover:bg-white hover:text-[#0B0B0B] text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#3A3F45] flex items-center justify-center hover:bg-white hover:text-[#0B0B0B] text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3A3F45] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              ©2026 GAN Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <GroupStructureSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="border-b border-warm-gray/30 bg-sandy/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-burgundy-900 font-playfair">
          Консильери
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-burgundy-700 hover:text-copper transition-colors font-raleway font-medium"
          >
            О нас
          </a>
          <a
            href="#services"
            className="text-burgundy-700 hover:text-copper transition-colors font-raleway font-medium"
          >
            Услуги
          </a>
          <a
            href="#testimonials"
            className="text-burgundy-700 hover:text-copper transition-colors font-raleway font-medium"
          >
            Кейсы
          </a>
          <a
            href="#faq"
            className="text-burgundy-700 hover:text-copper transition-colors font-raleway font-medium"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="text-burgundy-700 hover:text-copper transition-colors font-raleway font-medium"
          >
            Контакты
          </a>
        </nav>
        <Icon name="Menu" size={24} className="md:hidden text-burgundy-700" />
      </div>
    </header>
  );
};

export default Header;
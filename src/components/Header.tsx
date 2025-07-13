import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="text-2xl font-bold text-[#11F2937]"
          style={{ fontFamily: "Montserrat" }}
        >
          Консильери
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            style={{ fontFamily: "Open Sans" }}
          >
            О нас
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            style={{ fontFamily: "Open Sans" }}
          >
            Услуги
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            style={{ fontFamily: "Open Sans" }}
          >
            Кейсы
          </a>
          <a
            href="#faq"
            className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            style={{ fontFamily: "Open Sans" }}
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-[#3B82F6] transition-colors"
            style={{ fontFamily: "Open Sans" }}
          >
            Контакты
          </a>
        </nav>
        <Icon name="Menu" size={24} className="md:hidden text-gray-700" />
      </div>
    </header>
  );
};

export default Header;
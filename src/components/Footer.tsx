const Footer = () => {
  return (
    <footer className="bg-[#11F2937] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Консильери
            </h3>
            <p className="text-gray-300" style={{ fontFamily: "Open Sans" }}>
              Стратегический советник для лидеров
            </p>
          </div>

          <div>
            <h4
              className="font-semibold mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Навигация
            </h4>
            <ul className="space-y-2" style={{ fontFamily: "Open Sans" }}>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Кейсы
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Услуги
            </h4>
            <ul
              className="space-y-2 text-gray-300"
              style={{ fontFamily: "Open Sans" }}
            >
              <li>Стратегическое сопровождение</li>
              <li>Кризисное сопровождение</li>
              <li>Теневой советник</li>
              <li>Личностное развитие</li>
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold mb-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Контакты
            </h4>
            <div
              className="space-y-2 text-gray-300"
              style={{ fontFamily: "Open Sans" }}
            >
              <p>Telegram: @strategist</p>
              <p>Email: info@consiliere.ru</p>
            </div>
          </div>
        </div>

        <div
          className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300"
          style={{ fontFamily: "Open Sans" }}
        >
          <p>
            &copy; 2024 Консильери. Политика конфиденциальности • Условия
            использования
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
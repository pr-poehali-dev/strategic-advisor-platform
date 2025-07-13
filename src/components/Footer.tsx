const Footer = () => {
  return (
    <footer className="bg-burgundy-900 text-sandy py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">
              Консильери
            </h3>
            <p className="text-sandy/80 font-lato">
              Стратегический советник для лидеров
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-raleway">
              Навигация
            </h4>
            <ul className="space-y-2 font-lato">
              <li>
                <a
                  href="#about"
                  className="text-sandy/80 hover:text-copper transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sandy/80 hover:text-copper transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-sandy/80 hover:text-copper transition-colors"
                >
                  Кейсы
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sandy/80 hover:text-copper transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sandy/80 hover:text-copper transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-raleway">
              Услуги
            </h4>
            <ul className="space-y-2 text-sandy/80 font-lato">
              <li>Стратегическое сопровождение</li>
              <li>Кризисное сопровождение</li>
              <li>Теневой советник</li>
              <li>Личностное развитие</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-raleway">
              Контакты
            </h4>
            <div className="space-y-2 text-sandy/80 font-lato">
              <p>Telegram: @strategist</p>
              <p>Email: info@consiliere.ru</p>
            </div>
          </div>
        </div>

        <div className="border-t border-sandy/30 mt-8 pt-8 text-center text-sandy/80 font-lato">
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
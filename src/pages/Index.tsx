import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className="text-5xl md:text-6xl font-bold text-[#11F2937] mb-6 leading-tight"
            style={{ fontFamily: "Montserrat" }}
          >
            Стратегический советник для тех, кто управляет собой и ситуацией
          </h1>
          <p
            className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: "Open Sans" }}
          >
            Я помогаю лидерам принимать решения, которые не рушат бизнес, не
            разрушают команду и не теряют контроль.
          </p>
          <Button
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 text-lg rounded-full"
            style={{ fontFamily: "Montserrat" }}
          >
            Получить анализ ситуации бесплатно
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-[#11F2937] mb-8 text-center"
            style={{ fontFamily: "Montserrat" }}
          >
            О себе
          </h2>
          <div
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
            style={{ fontFamily: "Open Sans" }}
          >
            <p>
              Я — стратегический советник, работающий на стыке стратегии,
              лидерства и психологии. Моя экспертиза основана на понимании
              природы власти, механизмов влияния и динамики команд, а не только
              на инструментах коучинга или консалтинга.
            </p>
            <p>
              Мне доверяют владельцы бизнеса, топ-менеджеры и политики, которым
              важно сохранять устойчивость и ясность в сложных ситуациях. Я не
              «лечу» и не «учу» — я помогаю видеть картину целиком, просчитывать
              сценарии и укреплять позиции лидера в бизнесе и политике.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-[#11F2937] mb-4 text-center"
            style={{ fontFamily: "Montserrat" }}
          >
            Мои услуги
          </h2>
          <p
            className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto"
            style={{ fontFamily: "Open Sans" }}
          >
            Это не просто совет, а поддержка, которая работает, когда всё идет
            не так
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icon name="Users" size={24} className="text-[#3B82F6] mr-3" />
                <h3
                  className="text-xl font-semibold text-[#11F2937]"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Стратегическое сопровождение
                </h3>
              </div>
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: "Open Sans" }}
              >
                Ретейнер для долгосрочной работы
              </p>
              <div
                className="text-2xl font-bold text-[#3B82F6]"
                style={{ fontFamily: "Montserrat" }}
              >
                300 000 ₽/мес.
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icon name="Target" size={24} className="text-[#3B82F6] mr-3" />
                <h3
                  className="text-xl font-semibold text-[#11F2937]"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Проектное сопровождение
                </h3>
              </div>
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: "Open Sans" }}
              >
                Решение конкретных задач
              </p>
              <div
                className="text-2xl font-bold text-[#3B82F6]"
                style={{ fontFamily: "Montserrat" }}
              >
                от 500 000 ₽
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icon name="Clock" size={24} className="text-[#3B82F6] mr-3" />
                <h3
                  className="text-xl font-semibold text-[#11F2937]"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Разовые сессии
                </h3>
              </div>
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: "Open Sans" }}
              >
                Стратегические консультации
              </p>
              <div
                className="text-2xl font-bold text-[#3B82F6]"
                style={{ fontFamily: "Montserrat" }}
              >
                от 80 000 ₽
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icon
                  name="AlertTriangle"
                  size={24}
                  className="text-[#3B82F6] mr-3"
                />
                <h3
                  className="text-xl font-semibold text-[#11F2937]"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Кризисное сопровождение
                </h3>
              </div>
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: "Open Sans" }}
              >
                Работа в критических ситуациях
              </p>
              <div
                className="text-2xl font-bold text-[#3B82F6]"
                style={{ fontFamily: "Montserrat" }}
              >
                от 350 000 ₽/мес.
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icon name="Shield" size={24} className="text-[#3B82F6] mr-3" />
                <h3
                  className="text-xl font-semibold text-[#11F2937]"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Теневой советник
                </h3>
              </div>
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: "Open Sans" }}
              >
                Конфиденциальное сопровождение
              </p>
              <div
                className="text-2xl font-bold text-[#3B82F6]"
                style={{ fontFamily: "Montserrat" }}
              >
                от 300 000 ₽/мес.
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icon
                  name="TrendingUp"
                  size={24}
                  className="text-[#3B82F6] mr-3"
                />
                <h3
                  className="text-xl font-semibold text-[#11F2937]"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Личностное развитие
                </h3>
              </div>
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: "Open Sans" }}
              >
                Индивидуальные сессии роста
              </p>
              <div
                className="text-2xl font-bold text-[#3B82F6]"
                style={{ fontFamily: "Montserrat" }}
              >
                от 40 000 ₽/сессия
              </div>
            </Card>
          </div>

          <p
            className="text-center text-gray-600 mt-8 max-w-2xl mx-auto"
            style={{ fontFamily: "Open Sans" }}
          >
            Каждый формат — это возможность получить помощь в конкретной
            ситуации. Ты не просто получишь совет — ты получишь систему, которую
            можно применять снова и снова.
          </p>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-[#11F2937] mb-4 text-center"
            style={{ fontFamily: "Montserrat" }}
          >
            Почему именно я
          </h2>
          <p
            className="text-xl text-gray-600 mb-12 text-center"
            style={{ fontFamily: "Open Sans" }}
          >
            Не просто эксперт — это человек, который умеет работать в условиях
            нестабильности
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Icon
                name="CheckCircle"
                size={24}
                className="text-[#3B82F6] mt-1 flex-shrink-0"
              />
              <div>
                <h3
                  className="text-xl font-semibold text-[#11F2937] mb-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Уникальный подход
                </h3>
                <p
                  className="text-gray-700"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Я не работаю по стандартным методологиям — решения и подходы
                  формируются под уникальный контекст лидера.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Icon
                name="CheckCircle"
                size={24}
                className="text-[#3B82F6] mt-1 flex-shrink-0"
              />
              <div>
                <h3
                  className="text-xl font-semibold text-[#11F2937] mb-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Системное мышление
                </h3>
                <p
                  className="text-gray-700"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Я не ограничиваюсь «личными целями» — фокус на системе и
                  влиянии решений на бизнес, команду, семью, общественное поле.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Icon
                name="CheckCircle"
                size={24}
                className="text-[#3B82F6] mt-1 flex-shrink-0"
              />
              <div>
                <h3
                  className="text-xl font-semibold text-[#11F2937] mb-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Партнерство, не контроль
                </h3>
                <p
                  className="text-gray-700"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Я не мотивирую и не контролирую процесс — создаю пространство
                  для самостоятельного взросления и зрелых выборов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-[#11F2937] mb-4 text-center"
            style={{ fontFamily: "Montserrat" }}
          >
            Как я работаю
          </h2>
          <p
            className="text-xl text-gray-600 mb-12 text-center"
            style={{ fontFamily: "Open Sans" }}
          >
            Мой подход — это не «что делать», а «как мыслить»
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Icon
                name="Search"
                size={24}
                className="text-[#3B82F6] mt-1 flex-shrink-0"
              />
              <div>
                <h3
                  className="text-lg font-semibold text-[#11F2937] mb-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Глубокая диагностика ситуации
                </h3>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Icon
                name="GitBranch"
                size={24}
                className="text-[#3B82F6] mt-1 flex-shrink-0"
              />
              <div>
                <h3
                  className="text-lg font-semibold text-[#11F2937] mb-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Анализ альтернативных сценариев
                </h3>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Icon
                name="MessageSquare"
                size={24}
                className="text-[#3B82F6] mt-1 flex-shrink-0"
              />
              <div>
                <h3
                  className="text-lg font-semibold text-[#11F2937] mb-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Подготовка к переговорам и их сопровождение
                </h3>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Icon
                name="Zap"
                size={24}
                className="text-[#3B82F6] mt-1 flex-shrink-0"
              />
              <div>
                <h3
                  className="text-lg font-semibold text-[#11F2937] mb-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Работа с внутренними и внешними конфликтами
                </h3>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Icon
                name="Lock"
                size={24}
                className="text-[#3B82F6] mt-1 flex-shrink-0"
              />
              <div>
                <h3
                  className="text-lg font-semibold text-[#11F2937] mb-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Конфиденциальность и защита информации
                </h3>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Icon
                name="Crown"
                size={24}
                className="text-[#3B82F6] mt-1 flex-shrink-0"
              />
              <div>
                <h3
                  className="text-lg font-semibold text-[#11F2937] mb-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Наставничество по развитию лидерских качеств
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-[#11F2937] mb-4 text-center"
            style={{ fontFamily: "Montserrat" }}
          >
            Кейсы и отзывы
          </h2>
          <p
            className="text-xl text-gray-600 mb-12 text-center"
            style={{ fontFamily: "Open Sans" }}
          >
            Истории, которые показывают, что я действительно помогаю
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold"
                  style={{ fontFamily: "Montserrat" }}
                >
                  А
                </div>
                <div className="ml-4">
                  <h4
                    className="font-semibold text-[#11F2937]"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Алексей М.
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    Собственник сети ресторанов
                  </p>
                </div>
              </div>
              <p
                className="text-gray-700 italic"
                style={{ fontFamily: "Open Sans" }}
              >
                "Когда все было потеряно, я обратился к нему. Мы вместе
                проанализировали ситуацию, выбрали путь и вышли из кризиса. Это
                был не просто совет — это была стратегия, которая сработала."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold"
                  style={{ fontFamily: "Montserrat" }}
                >
                  М
                </div>
                <div className="ml-4">
                  <h4
                    className="font-semibold text-[#11F2937]"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Михаил К.
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    CEO IT-компании
                  </p>
                </div>
              </div>
              <p
                className="text-gray-700 italic"
                style={{ fontFamily: "Open Sans" }}
              >
                "Я не мог думать ясно, но он помог мне восстановить контроль.
                Теперь я уверен, что могу принимать решения, не боясь ошибок."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-[#11F2937] mb-12 text-center"
            style={{ fontFamily: "Montserrat" }}
          >
            Часто задаваемые вопросы
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger
                className="text-lg font-semibold text-[#11F2937]"
                style={{ fontFamily: "Montserrat" }}
              >
                Что такое «консильери»?
              </AccordionTrigger>
              <AccordionContent
                className="text-gray-700"
                style={{ fontFamily: "Open Sans" }}
              >
                Консильери — это стратегический партнер, который помогает
                принимать решения, не завися от внешних факторов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger
                className="text-lg font-semibold text-[#11F2937]"
                style={{ fontFamily: "Montserrat" }}
              >
                Какие проблемы вы решаете?
              </AccordionTrigger>
              <AccordionContent
                className="text-gray-700"
                style={{ fontFamily: "Open Sans" }}
              >
                Я работаю с кризисами, принятием решений, управлением командой,
                конфликтами и сохранением своей силы.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger
                className="text-lg font-semibold text-[#11F2937]"
                style={{ fontFamily: "Montserrat" }}
              >
                Как вы работаете с людьми, которые не доверяют?
              </AccordionTrigger>
              <AccordionContent
                className="text-gray-700"
                style={{ fontFamily: "Open Sans" }}
              >
                Я создаю безопасное пространство, где можно говорить откровенно.
                Доверие строится на действиях, а не на словах.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger
                className="text-lg font-semibold text-[#11F2937]"
                style={{ fontFamily: "Montserrat" }}
              >
                Можно ли попробовать до покупки?
              </AccordionTrigger>
              <AccordionContent
                className="text-gray-700"
                style={{ fontFamily: "Open Sans" }}
              >
                Да, я предлагаю бесплатную сессию — чтобы ты мог убедиться, что
                я тебе подхожу.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger
                className="text-lg font-semibold text-[#11F2937]"
                style={{ fontFamily: "Montserrat" }}
              >
                Какие форматы доступны?
              </AccordionTrigger>
              <AccordionContent
                className="text-gray-700"
                style={{ fontFamily: "Open Sans" }}
              >
                Есть несколько форматов: от пробных сессий до долгосрочного
                сопровождения.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl font-bold text-[#11F2937] mb-4"
            style={{ fontFamily: "Montserrat" }}
          >
            Хочешь, чтобы я помог тебе в трудную минуту?
          </h2>
          <p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "Open Sans" }}
          >
            Напиши мне, если ты чувствуешь, что потерял контроль, боишься ошибок
            или просто хочешь, чтобы рядом был человек, который знает, как тебя
            поддержать.
          </p>
          <Button
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 text-lg rounded-full"
            style={{ fontFamily: "Montserrat" }}
          >
            Записаться на бесплатный анализ
          </Button>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;

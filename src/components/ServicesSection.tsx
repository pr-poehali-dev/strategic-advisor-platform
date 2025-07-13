import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;
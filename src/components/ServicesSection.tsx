import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 bg-sandy/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-burgundy-900 mb-4 text-center font-playfair">
          Мои услуги
        </h2>
        <p className="text-xl text-warm-gray mb-12 text-center max-w-3xl mx-auto font-lato">
          Это не просто совет, а поддержка, которая работает, когда всё идет
          не так
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow bg-white border-warm-gray/20">
            <div className="flex items-center mb-4">
              <Icon name="Users" size={24} className="text-copper mr-3" />
              <h3 className="text-xl font-semibold text-burgundy-900 font-cormorant">
                Стратегическое сопровождение
              </h3>
            </div>
            <p className="text-warm-gray mb-4 font-lato">
              Ретейнер для долгосрочной работы
            </p>
            <div className="text-2xl font-bold text-copper font-raleway">
              300 000 ₽/мес.
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-white border-warm-gray/20">
            <div className="flex items-center mb-4">
              <Icon name="Target" size={24} className="text-copper mr-3" />
              <h3 className="text-xl font-semibold text-burgundy-900 font-cormorant">
                Проектное сопровождение
              </h3>
            </div>
            <p className="text-warm-gray mb-4 font-lato">
              Решение конкретных задач
            </p>
            <div className="text-2xl font-bold text-copper font-raleway">
              от 500 000 ₽
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-white border-warm-gray/20">
            <div className="flex items-center mb-4">
              <Icon name="Clock" size={24} className="text-copper mr-3" />
              <h3 className="text-xl font-semibold text-burgundy-900 font-cormorant">
                Разовые сессии
              </h3>
            </div>
            <p className="text-warm-gray mb-4 font-lato">
              Стратегические консультации
            </p>
            <div className="text-2xl font-bold text-copper font-raleway">
              от 80 000 ₽
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-white border-warm-gray/20">
            <div className="flex items-center mb-4">
              <Icon
                name="AlertTriangle"
                size={24}
                className="text-copper mr-3"
              />
              <h3 className="text-xl font-semibold text-burgundy-900 font-cormorant">
                Кризисное сопровождение
              </h3>
            </div>
            <p className="text-warm-gray mb-4 font-lato">
              Работа в критических ситуациях
            </p>
            <div className="text-2xl font-bold text-copper font-raleway">
              от 350 000 ₽/мес.
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-white border-warm-gray/20">
            <div className="flex items-center mb-4">
              <Icon name="Shield" size={24} className="text-copper mr-3" />
              <h3 className="text-xl font-semibold text-burgundy-900 font-cormorant">
                Теневой советник
              </h3>
            </div>
            <p className="text-warm-gray mb-4 font-lato">
              Конфиденциальное сопровождение
            </p>
            <div className="text-2xl font-bold text-copper font-raleway">
              от 300 000 ₽/мес.
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-white border-warm-gray/20">
            <div className="flex items-center mb-4">
              <Icon
                name="TrendingUp"
                size={24}
                className="text-copper mr-3"
              />
              <h3 className="text-xl font-semibold text-burgundy-900 font-cormorant">
                Личностное развитие
              </h3>
            </div>
            <p className="text-warm-gray mb-4 font-lato">
              Индивидуальные сессии роста
            </p>
            <div className="text-2xl font-bold text-copper font-raleway">
              от 40 000 ₽/сессия
            </div>
          </Card>
        </div>

        <p className="text-center text-warm-gray mt-8 max-w-2xl mx-auto font-lato">
          Каждый формат — это возможность получить помощь в конкретной
          ситуации. Ты не просто получишь совет — ты получишь систему, которую
          можно применять снова и снова.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
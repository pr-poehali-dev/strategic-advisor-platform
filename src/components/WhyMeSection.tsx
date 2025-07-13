import Icon from "@/components/ui/icon";

const WhyMeSection = () => {
  return (
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
  );
};

export default WhyMeSection;
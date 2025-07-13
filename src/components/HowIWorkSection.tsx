import Icon from "@/components/ui/icon";

const HowIWorkSection = () => {
  return (
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
  );
};

export default HowIWorkSection;
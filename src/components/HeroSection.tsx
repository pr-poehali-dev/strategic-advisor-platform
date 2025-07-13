import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
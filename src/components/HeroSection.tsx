import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-sandy to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-burgundy-900 mb-6 leading-tight font-playfair">
          Стратегический советник для тех, кто управляет собой и ситуацией
        </h1>
        <p className="text-xl text-warm-gray mb-8 max-w-4xl mx-auto leading-relaxed font-lato">
          Я помогаю лидерам принимать решения, которые не рушат бизнес, не
          разрушают команду и не теряют контроль.
        </p>
        <Button className="bg-copper hover:bg-burgundy-700 text-white px-8 py-4 text-lg rounded-full font-raleway font-semibold">
          Получить анализ ситуации бесплатно
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
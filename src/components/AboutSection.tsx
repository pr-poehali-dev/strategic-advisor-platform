const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-burgundy-900 mb-8 text-center font-playfair">
          О себе
        </h2>
        <div className="space-y-6 text-lg text-burgundy-800 leading-relaxed font-lato">
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
  );
};

export default AboutSection;
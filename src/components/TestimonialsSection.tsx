import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
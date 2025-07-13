import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-burgundy-900 mb-4 font-playfair">
          Хочешь, чтобы я помог тебе в трудную минуту?
        </h2>
        <p className="text-xl text-warm-gray mb-8 max-w-2xl mx-auto font-lato">
          Напиши мне, если ты чувствуешь, что потерял контроль, боишься ошибок
          или просто хочешь, чтобы рядом был человек, который знает, как тебя
          поддержать.
        </p>
        <Button className="bg-copper hover:bg-burgundy-700 text-white px-8 py-4 text-lg rounded-full font-raleway font-semibold">
          Записаться на бесплатный анализ
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold text-[#11F2937] mb-12 text-center"
          style={{ fontFamily: "Montserrat" }}
        >
          Часто задаваемые вопросы
        </h2>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
          defaultValue=""
        >
          <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
            <AccordionTrigger
              className="text-lg font-semibold text-[#11F2937]"
              style={{ fontFamily: "Montserrat" }}
            >
              Что такое «консильери»?
            </AccordionTrigger>
            <AccordionContent
              className="text-gray-700"
              style={{ fontFamily: "Open Sans" }}
            >
              Консильери — это стратегический партнер, который помогает
              принимать решения, не завися от внешних факторов.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
            <AccordionTrigger
              className="text-lg font-semibold text-[#11F2937]"
              style={{ fontFamily: "Montserrat" }}
            >
              Какие проблемы вы решаете?
            </AccordionTrigger>
            <AccordionContent
              className="text-gray-700"
              style={{ fontFamily: "Open Sans" }}
            >
              Я работаю с кризисами, принятием решений, управлением командой,
              конфликтами и сохранением своей силы.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
            <AccordionTrigger
              className="text-lg font-semibold text-[#11F2937]"
              style={{ fontFamily: "Montserrat" }}
            >
              Как вы работаете с людьми, которые не доверяют?
            </AccordionTrigger>
            <AccordionContent
              className="text-gray-700"
              style={{ fontFamily: "Open Sans" }}
            >
              Я создаю безопасное пространство, где можно говорить откровенно.
              Доверие строится на действиях, а не на словах.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
            <AccordionTrigger
              className="text-lg font-semibold text-[#11F2937]"
              style={{ fontFamily: "Montserrat" }}
            >
              Можно ли попробовать до покупки?
            </AccordionTrigger>
            <AccordionContent
              className="text-gray-700"
              style={{ fontFamily: "Open Sans" }}
            >
              Да, я предлагаю бесплатную сессию — чтобы ты мог убедиться, что
              я тебе подхожу.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
            <AccordionTrigger
              className="text-lg font-semibold text-[#11F2937]"
              style={{ fontFamily: "Montserrat" }}
            >
              Какие форматы доступны?
            </AccordionTrigger>
            <AccordionContent
              className="text-gray-700"
              style={{ fontFamily: "Open Sans" }}
            >
              Есть несколько форматов: от пробных сессий до долгосрочного
              сопровождения.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
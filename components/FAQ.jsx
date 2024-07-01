import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { faqs } from "@/utils/constants"

const FAQ = () => {
  return (
    <div className="flex flex-col items-start w-full">
        <h1 className="text-[2rem] font-semibold mb-4">FAQ</h1>
        <Accordion type="single" collapsible className="w-[400px] sm:w-[600px]">
            {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            
            ))}
        </Accordion>
    </div>
  )
}

export default FAQ

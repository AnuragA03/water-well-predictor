"use client"
import { Accordion, AccordionTab } from 'primereact/accordion';
import './faq.css'

const faqData = [
  {
    question: "What is the purpose of this tool?",
    answer: "This tool is designed to help users understand [specific functionality, e.g., analyze data trends]. It simplifies complex tasks and offers insights based on the data provided."
  },
  {
    question: "Where does the tool get its data from?",
    answer: "The data used by this tool is sourced from [specific databases, e.g., international data repositories, proprietary databases, user inputs]. We ensure the data is frequently updated to maintain accuracy and relevance."
  },
  {
    question: "Where does the tool get its data from?",
    answer: "The data used by this tool is sourced from [specific databases, e.g., international data repositories, proprietary databases, user inputs]. We ensure the data is frequently updated to maintain accuracy and relevance."
  },
  {
    question: "Where does the tool get its data from?",
    answer: "The data used by this tool is sourced from [specific databases, e.g., international data repositories, proprietary databases, user inputs]. We ensure the data is frequently updated to maintain accuracy and relevance."
  },
  {
    question: "Where does the tool get its data from?",
    answer: "The data used by this tool is sourced from [specific databases, e.g., international data repositories, proprietary databases, user inputs]. We ensure the data is frequently updated to maintain accuracy and relevance."
  },
  {
    question: "Where does the tool get its data from?",
    answer: "The data used by this tool is sourced from [specific databases, e.g., international data repositories, proprietary databases, user inputs]. We ensure the data is frequently updated to maintain accuracy and relevance."
  },
  {
    question: "Where does the tool get its data from?",
    answer: "The data used by this tool is sourced from [specific databases, e.g., international data repositories, proprietary databases, user inputs]. We ensure the data is frequently updated to maintain accuracy and relevance."
  },

];
export default function FAQPage() {
  return (
    <div className="container-lg mx-auto px-4">
      <section className="faq my-8 p-6">
        <h2 className="heading-sm mb-6 text-[var(--title-color)] border-b pb-4">FAQs (Frequently Asked Questions)</h2>

        <Accordion className="custom-accordion">
          {faqData.map((item, index) => (
            <AccordionTab key={index} headerClassName="custom-header" contentClassName="custom-content" header={item.question}>
              <p className="text-text-color">{item.answer}</p>
            </AccordionTab>
          ))}
        </Accordion>
      </section>
    </div>
  );
}

import React from 'react';

const faqs = [
  {
    question: 'What are your operating hours?',
    answer: 'We are open daily from 11:00 AM to 10:00 PM.'
  },
  {
    question: 'Do you accept reservations?',
    answer: 'Yes, we accept reservations for groups of 6 or more. Please call us at (082) 123-4567.'
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, we have free parking available for our customers.'
  },
  {
    question: 'Do you offer delivery services?',
    answer: 'Yes, we offer delivery through various food delivery platforms.'
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
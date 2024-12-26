"use client";

import { useState } from "react";

const faqs = [
  { id: 1, question: "How can I connect with my batch mates or old friends through the Alumni Society?", 
    answer: "The Alumni Society will reconnect you with your batch through dedicated WhatsApp groups managed by PCAS. We maintain networks for all graduating batches, allowing you to stay in touch with old friends, share memories, and collaborate on new opportunities." 
  },
  { id: 2, question: "What events or reunions are organized by the Alumni Society throughout the year?", 
    answer: "PCAS conducts an annual Alumni Meet – the flagship event that brings alumni together to relive       cherished memories, reconnect with faculty and friends, and celebrate their journey. In addition, PCAS hosts interactive sessions, panel discussions, and career guidance workshops throughout the year, fostering continuous engagement between alumni and the college community." 
  },
  { id: 3, question: "How do I update my contact information with the Alumni Society?", 
    answer: "You can update your contact information by filling out the registration form on the Alumni Society’s registration page. Simply provide your updated details, and our team will ensure your records are refreshed. We’ll stay connected and keep you informed about upcoming events and opportunities!" 
  },
  { id: 4, question: "How can I benefit from the alumni network as a student?", 
    answer: "The alumni network opens doors to invaluable opportunities for students. You can gain insights through interactive sessions, career guidance workshops, and mentorship programs where experienced alumni provide personalized advice. The network also helps with internships, job referrals, and industry connections, giving you a head start in your professional journey. Engaging with alumni can inspire you, broaden your perspective, and pave the way for future success." 
  },
  { id: 5, question: "Can I get career advice from alumni while still studying?", 
    answer: "Yes, students can seek advice from alumni while still studying at Poornima College. The Alumni Society facilitates connections through various platforms, including interactive alumni sessions, one-on-one mentorship programs, and social media platforms. Our accomplished alumni are eager to share valuable insights on academics, career paths, and industry trends, offering helpful guidance on college life and beyond. Reach out to us to tap into this wealth of knowledge and expertise." 
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full md:px-8">
      {/* Header */}
      <h1 className="md:text-5xl xs:text-2xl font-medium mb-8">Frequently Asked Questions</h1>

      {/* FAQ Items */}
      <div className="space-y-3">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-blue-100 p-4 rounded-md shadow-md cursor-pointer"
            onClick={() => toggleFAQ(faq.id)}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="font-medium font-primary md:text-lg xs:text-sm">{faq.question}</h3>
              <span className="md:text-xl sm:text-base text-blue-700">
                {openId === faq.id ? "−" : "+"}
              </span>
            </div>

            {/* Answer */}
            {openId === faq.id && (
              <p className="mt-2 font-primary md:text-lg xs:text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

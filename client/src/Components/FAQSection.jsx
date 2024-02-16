import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const faqData = [
    { question: "How do I start a video chat?",
    answer: "To start a video chat, simply log in to your account and navigate to the chat room. Click on the 'Start Video Chat' button to initiate the video call." },
    { question: "Is the video chat secure?",
    answer: "Yes, we take security very seriously. All video chats are encrypted to ensure your privacy and security." },
    { question: "Can I invite multiple people to join a video chat?",
    answer: "Yes, our video chat application supports group video calls. You can invite multiple participants to join the conversation." },
    { question: "Do I need to download any software to use the video chat?",
    answer: "No, our video chat application runs directly in your web browser. You don't need to download any additional software." },
    { question: "Is the video chat accessible on mobile devices?",
    answer: "Yes, our video chat application is fully responsive and can be accessed on both desktop and mobile devices." },
    { question: 'How many people can participate in a video chat at once?', answer: 'The number of participants allowed in a video chat depends on the plan your subscribed to. Our premium plans offer larger group sizes for video calls.' },
    { question: 'Can I record video calls for later reference?', answer: 'Yes, our premium plans offer the option to record video calls. You can save recordings for later reference or sharing with others.' },
    { question: 'What kind of devices and browsers are supported for video chats?', answer: 'Our video chat application supports a wide range of devices and browsers, including desktops, laptops, tablets, and smartphones. We recommend using the latest versions of Chrome, Firefox, Safari, or Edge for the best experience.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div id = "faq">
        <div>
        <h1 className='fancy2'>
            FAQs
        </h1>
        </div>
    <div className="faq-section">
        
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleQuestionClick(index)}
        >
          <div className="question">{faq.question}</div>
          {index === activeIndex && <div className="answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
   </div> 
  );
};

export default FAQSection;
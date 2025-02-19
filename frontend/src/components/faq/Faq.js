import React, { useState } from 'react';
import website from '../../assets/website_building.png';
import { GoDotFill } from 'react-icons/go';


const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What is web development?',
            answer: 'Web development refers to the process of building, creating, and maintaining websites. It includes web design, web publishing, web programming, and database management.',
        },
        {
            question: 'How long does it take to build a website?',
            answer: 'The time to build a website depends on the complexity of the project. Simple websites can take a few days, while complex ones might take weeks or months.',
        },
        {
            question: 'What technologies are used in web development?',
            answer: 'Common technologies include HTML, CSS, JavaScript, React, Node.js, and various back-end frameworks and databases.',
        },
        {
            question: 'Do I need to update my website regularly?',
            answer: 'Yes, updating your website regularly ensures security, better user experience, and improved SEO rankings.',
        },
        {
            question: 'How much does a website cost?',
            answer: 'The cost of a website depends on its features, design complexity, and required functionality. It can range from a few hundred to several thousand dollars.',
        },
    ];

    return (
        <div className="w-full  py-10">
            <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                {/* FAQ Section */}
                <div>
                    <p className="text-sm flex items-center text-blue-500"><GoDotFill className='text-2xl' />Frequently Asked Questions<GoDotFill className='text-2xl' /></p>
                    <p className="text-3xl font-semibold text-gray-800 fugaz-one-regular">
                        General Web Development FAQ
                    </p>
                    <div className="mt-6 space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleAnswer(index)}
                                    className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-medium text-gray-800 hover:bg-gray-200 transition"
                                >
                                    {faq.question}
                                    <span
                                        className={`transform transition-transform ${
                                            openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    >
                                        ▼
                                    </span>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 py-4 bg-gray-50 text-gray-600">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Section */}
                <div className="absolute top-0 right-0 w-[45%] lg:w-[50%]">
                    <img
                        src={website}
                        alt="Website building illustration"
                        className="rounded-lg  max-w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Faq;

import React, { useState } from 'react';
import './Services.css';

// Import images for each service (replace with your own images)
import pharmacyProjectImg from './pharmacyProjectImg.jpeg';
import thesisDraftingImg from './thesisDrafting.jpeg';
import bookWritingImg from './bookWriting.jpeg';
import plagiarismCheckImg from './plagiarismCheck.jpeg';
import researchPapersImg from './researchPapers.jpeg';
import presentationsImg from './presentations.jpeg';
import resumeWritingImg from './resumeWriting.jpeg';

import Modal from './Modal'; // Assuming Modal is a separate component

function Services() {
    const [selectedService, setSelectedService] = useState(null); // State to manage the selected service for more info

    const services = [
        {
            id: 1,
            title: "Pharmacy Projects",
            description: "We provide comprehensive writing services for pharmacy and M. Pharmacy projects, ensuring high-quality research and writing.",
            image: pharmacyProjectImg,
            price: "₹1000",
            contactInfo: "Contact: scriptpharma02@gmail.com",
            additionalInfo: "Professional assistance in writing detailed, well-researched pharmaceutical projects. This service helps students structure, organize, and write their academic projects, ensuring clarity, accuracy, and depth in their pharmaceutical or scientific content. The focus is on delivering high-quality, original projects tailored to the student's needs and requirements.",
        },
        {
            id: 2,
            title: "Thesis Drafting",
            description: "We help PhD students draft their thesis, ensuring clear, concise, and well-researched content.",
            image: thesisDraftingImg,
            price: "₹2999",
            contactInfo: "Contact: scriptpharma02@gmail.com",
            additionalInfo: "A student or researcher working on their thesis draft at a desk with multiple open textbooks and a laptop displaying a thesis template or outline on the screen. In the background, there could be a wall filled with post-it notes, a mind map, or an outline for the thesis structure. Alternatively, you could depict a close-up of a hand writing detailed notes on a notepad, with a laptop open showing a word processing program and a citation guide for academic writing.",
        },
        {
            id: 3,
            title: "Book Writing",
            description: "Our writers can help you write books on pharmacy, medicine, or other related fields, ensuring engaging and informative content.",
            image: bookWritingImg,
            price: "₹1999",
            contactInfo: "Contact: scriptpharma02@gmail.com",
            additionalInfo: "Comprehensive support in writing a pharmaceutical or scientific book, whether it's an academic textbook, a research guide, or a specialized book on pharmaceutical topics. This service helps students or professionals develop their ideas, structure chapters, and write compelling, informative content. The focus is on creating a well-researched, coherent, and engaging book that meets both academic standards and the needs of the target audience.",
        },
        {
            id: 4,
            title: "Plagiarism Check",
            description: "We offer comprehensive plagiarism checks and removal services to ensure the originality of your academic work.",
            image: plagiarismCheckImg,
            price: "₹99",
            contactInfo: "Contact: scriptpharma02@gmail.com",
            additionalInfo: "A comprehensive plagiarism detection service to ensure that your academic work, including reports, theses, and projects, is free from unintentional plagiarism. The service scans documents against a vast database of academic papers, research articles, and web content to check for similarities, providing a detailed plagiarism report with percentage scores and highlighted sections that may require revision. This ensures academic integrity and originality.",
        },
        {
            id: 5,
            title: "Review/Research Papers",
            description: "We provide professional assistance in writing and publishing research papers, ensuring high-quality content and research.",
            image: researchPapersImg,
            price: "₹1999",
            contactInfo: "Contact: scriptpharma02@gmail.com",
            additionalInfo: "Professional assistance in writing high-quality research papers on pharmaceutical or scientific topics. This service covers everything from initial topic selection and research to writing and proper citation of sources. Students can receive help with creating a structured, well-researched, and academically rigorous paper that adheres to their university's guidelines, ensuring clarity, depth, and original insight on their chosen subject.",
        },
        {
            id: 6,
            title: "Presentations",
            description: "Our team can help you create compelling and informative PowerPoint presentations for your research, thesis, or other projects.",
            image: presentationsImg,
            price: "₹349",
            contactInfo: "Contact: scriptpharma02@gmail.com",
            additionalInfo: "Tailored PowerPoint presentation creation and assistance, designed to help students effectively communicate complex pharmaceutical or scientific concepts. Whether it's for class projects, research presentations, or academic conferences, this service offers customized slide decks that are visually engaging, clear, and well-structured. The presentations are designed to highlight key points, data, and visuals (like charts or molecular diagrams), ensuring clarity and maximum impact in front of an audience.",
        },
        {
            id: 7,
            title: "Resume Writing",
            description: "We offer professional resume writing services to help you create a compelling resume that showcases your skills and experience.",
            image: resumeWritingImg,
            price: "₹199",
            contactInfo: "Contact: scriptpharma02@gmail.com",
            additionalInfo: "Professional resume writing and editing tailored specifically for students and professionals in the pharmaceutical or scientific fields. This service helps craft a clear, concise, and compelling resume that highlights relevant academic achievements, research experience, technical skills, and internships. Whether you’re applying for internships, research positions, or industry roles, the resume is designed to effectively showcase your qualifications and make a strong impression on potential employers.",
        },
        {
            id: 8,
            title: "Synopsis",
            description: "Our Synopsis Writing service provides precise and well-structured summaries tailored for academic projects, research proposals, and dissertations.",
            image: resumeWritingImg, // Replace with the appropriate image
            price: "₹699",
            contactInfo: "Contact: scriptpharma02@gmail.com",
            additionalInfo: "The Synopsis Writing service is designed to provide a clear and concise summary of your project, research, or dissertation. It includes thorough analysis and presentation of objectives, methodology, key findings, and conclusions. With a focus on professional formatting and adherence to academic standards, our service ensures that your synopsis effectively conveys the essence of your work. Timely delivery and optional revisions ensure a polished and impactful document tailored to your specific requirements.",
        }
    ];

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <section id="services" className="services-container">
            <h2>Our Services</h2>
            <p className="services-intro">
                We provide a range of high-quality services to support your academic and professional growth in the pharmaceutical and research fields.
            </p>
            <div className="services-list">
                {services.map((service) => (
                    <div className="service-card" key={service.id}>
                        <div className="service-image">
                            <img src={service.image} alt={service.title} />
                        </div>
                        <div className="service-content">
                            <div className="service-number">{service.id}</div>
                            <div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <button
                                    className="get-service-btn"
                                    onClick={() => handleServiceClick(service)}
                                >
                                    Get Service
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show Modal with additional information if a service is selected */}
            {selectedService && (
                <Modal
                    service={selectedService}
                    onClose={closeModal}
                />
            )}
        </section>
    );
}

export default Services;

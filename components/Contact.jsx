"use client";
import { useRef, useState } from "react";
import ContactImage from "@/public/assets/Contact.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [submitStatus, setSubmitStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setSubmitStatus("sending");

        emailjs
            .sendForm(
                "service_wa5w6yi",
                "template_cgc2iag",
                form.current,
                "uC6PEzQ5GCUZ2ni6W"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    form.current.reset();
                    setSubmitStatus("success");
                },
                (error) => {
                    console.log(error.text);
                    setSubmitStatus("error");
                }
            );
    };

    return (
        <div className="bg-[#FCF1DF] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <h2 className="font-instrument text-black text-4xl md:text-7xl mb-12">
                    Contact Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Image */}
                    <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                        <Image
                            src={ContactImage}
                            alt="Contact Us"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="space-y-8">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="space-y-6"
                        >
                            {/* Name Input */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full border-b-2 border-black py-2 bg-transparent focus:outline-none focus:border-[#F37C3F] transition-colors peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all
                  peer-placeholder-shown:text-base peer-placeholder-shown:top-2 
                  peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#F37C3F]"
                                >
                                    Name
                                </label>
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full border-b-2 border-black py-2 bg-transparent focus:outline-none focus:border-[#F37C3F] transition-colors peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all
                  peer-placeholder-shown:text-base peer-placeholder-shown:top-2 
                  peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#F37C3F]"
                                >
                                    Email id
                                </label>
                            </div>

                            {/* Message Input */}
                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full border-b-2 border-black py-2 bg-transparent focus:outline-none focus:border-[#F37C3F] transition-colors peer resize-none"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all
                  peer-placeholder-shown:text-base peer-placeholder-shown:top-2 
                  peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#F37C3F]"
                                >
                                    Message
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-gradient-to-b from-[#f37c3f] to-[#f2662b] text-white px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
                                disabled={submitStatus === "sending"}
                            >
                                {submitStatus === "sending"
                                    ? "Sending..."
                                    : "Contact us"}
                            </button>

                            {/* Status Message */}
                            {submitStatus === "success" && (
                                <p className="text-green-600 text-sm mt-2">
                                    Thank you! Your message has been sent
                                    successfully.
                                </p>
                            )}
                            {submitStatus === "error" && (
                                <p className="text-red-600 text-sm mt-2">
                                    Sorry, there was an error sending your
                                    message. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

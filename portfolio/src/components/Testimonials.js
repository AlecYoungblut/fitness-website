import React from "react";

class Testimonials extends React.Component {
    render() {
        return (
            <section className="bg-gray-400 mx-auto w-4/5 rounded-xl mb-24" id="Testimonials">
                <div className="container mx-auto px-6 py-10 my-16">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        Testimonials
                    </h2>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <div className="bg-white rounded shadow py-2">
                                <p className="text-gray-800 text-base px-6 mb-5">
                                    VISFIT such a positive environment. Everyone is so encouraging - it’s the perfect place to start regardless of fitness level. Maisha takes the time to ensure you feel comfortable with each exercise and that you have the proper form! She is so encouraging and pushes you to give 110%! Can’t wait until my next group class!
                                </p>
                                <p className="text-gray-500 text-xs md:text-sm px-6">
                                    Sarah
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <div className="bg-white rounded shadow py-2">
                                <p className="text-gray-800 text-base px-6 mb-5">
                                    This gym is perfect for new and experienced gym-goers alike. The way the trainers tailor the experience to your needs — even in group lessons — is unmatched. The space is very clean and modern, and has all of the equipment you could possibly need for a great burn. They have set me up for success, but I intend to continue taking classes and lessons to continue my progression.
                                </p>
                                <p className="text-gray-500 text-xs md:text-sm px-6">
                                    Ben
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <div className="bg-white rounded shadow py-2">
                                <p className="text-gray-800 text-base px-6 mb-5">
                                    Mitch & Maisha are both knowledgeable personal trainers who sincerely care about their client's success. Couldn't recommended them more!
                                </p>
                                <p className="text-gray-500 text-xs md:text-sm px-6">
                                    Nick
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};
export default Testimonials;
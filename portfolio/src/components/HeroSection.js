import React from "react";

class HeroSection extends React.Component {
    render() {
        return (
            <section className="bg-gray-600 rounded-xl mx-auto w-4/5 mb-24">
                <div className="block lg:hidden nb mx-auto my-10">
                    <div className="container mx-auto py-10 px-16 ">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold mb-2 text-white">
                                VISFIT Personal Training 
                            </h2>
                            <h3 className="text-1xl mb-8 text-gray-200">
                                is a private studio space for clients to come and improve their health through exercise, rehabilitation and mobility. Our expert coaches provide individualized programming and counselling based on the clients needs and goals. Suited for all ages, and levels of fitness.
                            </h3>
                            <a href="#ContactSm">
                                <button className="bg-white font-bold rounded-full py-3 px-6 shadow-lg uppercase tracking-wider text-base"href="#ContactSm">
                                    Contact Us
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block mx-auto my-16">
                    <div className="mx-auto">
                        <div className="mx-auto px-6 py-12 bg-gray-600 rounded-xl ">
                            <h2 className="text-6xl font-bold mb-2 text-white">
                                VISFIT Personal Training 
                            </h2>
                            <h3 className="text-2xl mb-8 ml-4 text-gray-200">
                                is a private studio space for clients to come and improve their health through exercise, rehabilitation and mobility. Our expert coaches provide individualized programming and counselling based on the clients needs and goals. Suited for all ages, and levels of fitness.
                            </h3>
                            <a href="#ContactLg">
                                <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider text-xl">
                                    Contact Us
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </section >
        );
    }
};
export default HeroSection;
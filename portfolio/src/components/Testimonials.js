import React from "react";

class Testimonials extends React.Component {
    render() {
        return (
            <section className="bg-gray-400 mx-auto w-4/5 rounded-xl" id="Lorem_Testimonials">
                <div className="container mx-auto px-6 py-20 my-16">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        Lorem
                    </h2>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <div className="bg-white rounded shadow py-2">
                                <p className="text-gray-800 text-base px-6 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                <p className="text-gray-500 text-xs md:text-sm px-6">Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <div className="bg-white rounded shadow py-2">
                                <p className="text-gray-800 text-base px-6 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className="text-gray-500 text-xs md:text-sm px-6">Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <div className="bg-white rounded shadow py-2">
                                <p className="text-gray-800 text-base px-6 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className="text-gray-500 text-xs md:text-sm px-6">Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};
export default Testimonials;
import React from "react";

class HeroSection extends React.Component {
    render() {
        return (
            <section className="bg-gradient-to-r from-purple-500 to-purple-900">
                <div className="container mx-auto py-20 px-12 ">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold mb-2 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </h2>
                        <h3 className="text-2xl mb-8 text-gray-200">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </h3>
                        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                            Lorem
                    </button>
                    </div>
                </div>
            </section>
        );
    }
};
export default HeroSection;
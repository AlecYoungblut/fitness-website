import React from "react";

class CallToAction extends React.Component {
    render() {
        return (
            <section className="bg-purple-100" id="Lorem_Contact">
                <div className="container mx-auto px-6 text-center py-20">
                    <h2 className="mb-6 text-4xl font-bold text-center text-purple-800">
                        Lorem Ipsum!
                    </h2>
                    <h3 className="my-4 text-2xl text-best-purple">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h3>
                    <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
                        Ipsum
                    </button>
                </div>
            </section>
        );
    }
};
export default CallToAction;
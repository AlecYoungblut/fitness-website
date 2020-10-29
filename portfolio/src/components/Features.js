import React from "react";

class Features extends React.Component {
    render() {
        return (
            <section className="bg-purple-200">
                < section className="container mx-auto px-6 p-10" >
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        Lorem
                </h2>
                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3">Lorem ipsum</h4>
                            <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg w-4/5" src="https://www.fitfatherproject.com/wp-content/uploads/2017/02/shutterstock_699574486-min-752x502.jpg" alt="Lorem" />
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg w-4/5" src="https://images.askmen.com/1080x540/2019/07/14-084819-best_butt_workouts_glute_exercises_for_men.jpg" alt="Lorem" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3">Lorem ipsum</h4>
                            <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3">Lorem ipsum</h4>
                            <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg w-4/5" src="https://i.insider.com/5ea2fc4638bf236ba12ee9b6?width=600&format=jpeg&auto=webp" alt="Lorem" />
                        </div>
                    </div>
                </section >
            </section>
        );
    }
};
export default Features;
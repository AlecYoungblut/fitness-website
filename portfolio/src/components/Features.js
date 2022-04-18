import React from "react";
import training1 from './imgs/training1.jpg';
import training2 from './imgs/training2.jpg';
import training3 from './imgs/training3.jpg';
import training4 from './imgs/training4.jpg';

class Features extends React.Component {
    render() {
        return (
            <section className="bg-gray-400 mx-auto w-4/5 rounded-xl mb-24" id="Services">
                <section className="container mx-auto px-6 p-5 my-10" >
                    <h2 className="text-6xl font-bold text-center text-gray-800 mb-8">
                        Services
                    </h2>
                    <div className="flex items-center flex-wrap">
                        <div className="w-full md:w-1/2 lg:pr-10">
                            <h4 className="text-4xl text-gray-800 font-bold mb-3">Personal Training </h4>
                            <p className="text-gray-600 mb-8 mr-4 text-2xl">
                                Enjoy the individualization of 1-1 coaching suited exactly to your needs, goals and timelines. It allows to you book exactly to your schedule, no matter how specific. Our coaches will take you through workouts tailored specifically for you, while throughly explaining how and why. Our goal is to improve your confidence with fitness by teaching you!
                                Personal training is offered through a variety of different types of sessions: 1 on 1 Full and Half hours and Partner Training!
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg" src={training1} alt="Lorem" />
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap">
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg" src={training2} alt="Lorem" />
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-10 ">
                            <h4 className="text-4xl text-gray-800 font-bold mb-3">Group Training</h4>
                            <p className="text-gray-600 mb-8 text-2xl">
                                Group training is ideal for the client who isn’t a complete beginner, and wants to get a great workout in for a lesser cost. Group training allows you to join similar goal/fitness level type clients in a fun, energetic atmosphere. Classes are at set times throughout the week, and is drop in style!
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center flex-wrap pt-2">
                        <div className="w-full md:w-1/2 lg:pr-10">
                            <h4 className="text-4xl text-gray-800 font-bold mb-3">Nutrition Coaching</h4>
                            <p className="text-gray-600 mb-8 text-2xl">
                                We understand that eating to fuel your body properly can be difficult and confusing.
                                Our coaches can help you plan for success with a realistic, manageable and enjoyable meal plan that YOU can stick to without feeling deprived!
                                A Nutrition Coaching Session includes a 1-hour consultation as well as a follow up meal plan based on your goals, likes, and dislikes.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg w-5/4" src={training3} alt="Lorem" />
                        </div>
                    </div>

                    <div className="flex items-center flex-wrap pt-2">
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg" src={training4} alt="Lorem" />
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-10 py-2">
                            <h4 className="text-4xl text-gray-800 font-bold mb-3">Fascial Stretch Therapy</h4>
                            <p className="text-gray-600 mb-8 text-2xl">
                                Fascial Stretch Therapy [FST] is a pain-free, table based assisted stretching, focusing on the fascia and joint capsules as the key element to achieving optimal flexibility and pain relief. Members of all ages can benefit from FST, and will see and feel improvement as early as the first treatment!
                                The benefits of FST include:
                                Reduced Pain,
                                Reduced Stiffness
                                Reduced Stress
                                Improved Range of Motion
                                Improved Posture
                                Improved Sleep
                            </p>
                        </div>
                    </div>
                </section >
            </section>
        );
    }
};
export default Features;
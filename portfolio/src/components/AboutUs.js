import React from "react";
import training1 from './imgs/training1.jpg';
import training2 from './imgs/training2.jpg';


class AboutUs extends React.Component {
    render() {
        return (
            <section className="bg-gray-400 mx-auto w-4/5 rounded-xl mb-24">
                <section className="container mx-auto px-6 p-5 my-10" >
                    <h2 className="text-5xl font-bold text-center text-gray-800 mb-8">
                        Services
                    </h2>
                    <div className="flex items-center flex-wrap mb-10">
                        <div className="w-full md:w-1/2">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3 pr-10">Personal Training </h4>
                            <p className="text-gray-600 mb-8 mr-4">
                                Enjoy the individualization of 1-1 coaching suited exactly to your needs, goals and timelines. It allows to you book exactly to your schedule, no matter how specific. Our coaches will take you through workouts tailored specifically for you, while throughly explaining how and why. Our goal is to improve your confidence with fitness by teaching you!
                                Personal training is offered through a variety of different types of sessions: 1 on 1 Full and Half hours and Partner Training!
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg" src={training1} alt="Lorem" />
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap mb-10">
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg" src={training2} alt="Lorem" />
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-10 ">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3">Group Training</h4>
                            <p className="text-gray-600 mb-8">
                                Group training is ideal for the client who isn’t a complete beginner, and wants to get a great workout in for a lesser cost. Group training allows you to join similar goal/fitness level type clients in a fun, energetic atmosphere. Classes are at set times throughout the week, and is drop in style!
                            </p>
                        </div>
                    </div>
                </section >
            </section>
        );
    }
};
export default AboutUs;
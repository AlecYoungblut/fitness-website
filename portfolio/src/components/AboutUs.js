import React from "react";
import mitch from './imgs/mitch.jpg';
import maisha from './imgs/maisha.jpg';
import ron from './imgs/ron.jpg';

class AboutUs extends React.Component {
    render() {
        return (
            <section className="bg-gray-400 mx-auto w-4/5 rounded-xl mb-24" id="AboutUs">
                <section className="container mx-auto px-6 p-5" >
                    <h2 className="text-5xl font-bold text-center text-gray-800 mb-8">
                        Our Coaches
                    </h2>
                    <div className="flex items-center flex-wrap">
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg" src={mitch} alt="Lorem" />
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-10 ">
                            <h4 className="text-4xl text-gray-800 font-bold mb-3">Meet Mitch!</h4>
                            <p className="text-2xl text-gray-600 mb-8">
                                He has been in a certified personal trainer for over 4 years! Mitch uses his background in sports to create functional plans for his clients.
                                He is a level 1 Precision Nutrition Coach and will also help you with all your nutrition needs/struggles.
                                Mitch believes in small, gradual changes to create a plan that works for you!
                                <br />
                                <br />
                                Certifications:
                                <ul className="list-disc pl-10">
                                    <li>CPTN - Certified Personal Trainer</li>
                                    <li>Precision Nutrition Level 1</li>
                                    <li>Kettlebell Specialist - DTS</li>
                                    <li>Body Weight Movement - YTS</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap pt-5">
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg" src={maisha} alt="Lorem" />
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-10 ">
                            <h4 className="text-4xl text-gray-800 font-bold mb-3 pt-5">Meet Maisha!</h4>
                            <p className="text-2xl text-gray-600 mb-8 ">
                                Maisha has been a certified personal trainer for over 10 years! She uses her extensive experience to address any pain, imbalance, goal you may have!
                                She believes in a balanced lifestyle approach to fitness to get you to your goals efficiently, and to last a lifetime!
                                She is a certified Fascial Stretch Therapy Practitioner, this allows her to work with clients with injuries/aches/ pain!
                                Whether your goal is weight loss, muscle gain, pre/post-natal, reducing pain/stiffness, Maisha is experienced at it all!
                                <br />
                                <br />
                                Certifications:
                                <ul className="list-disc pl-10">
                                    <li>CPTN - Certified Personal Trainer</li>
                                    <li>Stretch To Win - Fascial Stretch Therapist</li>
                                    <li>Myofascial Cupping Practitioner - FMT</li>
                                    <li>Progressive Olympic Lifting Hybrid Level 1</li>
                                    <li>Fitness Kickboxing - FKCI Level 1</li>
                                    <li>Adaptive Fitness Specialist </li>
                                    <li>TRX Suspension Training Specialist</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap pt-5">
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg" src={ron} alt="Lorem" />
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-10 ">
                            <h4 className="text-4xl text-gray-800 font-bold mb-3 pt-5">Meet Ron!</h4>
                            <p className="text-2xl text-gray-600 mb-8 ">
                                Ron has over 20 years experience in the fitness and health industry.
                                A former GoodLife coach turned online coach, he’s helped countless clients reach their goals!
                                He believes in a balanced approach using small gradual changes!
                                <br />
                                <br />
                                Certifications:
                                <ul className="list-disc pl-10">
                                    <li>ISSA Certified Personal Trainer</li>
                                    <li>Precision Nutrition Level 1</li>
                                    <li>OTA Level 1</li>
                                    <li>Pre and Post Natal Coach</li>
                                    <li>Weight Management Specialist</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
};
export default AboutUs;
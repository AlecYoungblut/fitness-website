import React from "react";
import mitch from './imgs/mitch.jpg';
import maisha from './imgs/maisha.jpg';
import nate from './imgs/nate.jpg';

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
                            <img className="rounded-lg" src={nate} alt="Lorem" />
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-10 ">
                            <h4 className="text-4xl text-gray-800 font-bold mb-3 pt-5">Meet Nate!</h4>
                            <p className="text-2xl text-gray-600 mb-8 ">
                                After ending my sports career as a 18 year old boy. I felt lost, confused and without direction. This is where my fitness journey began.
                                Going to the gym is one of the best investments I’ve ever made. Fitness gave me the blueprint of self improvement.
                                Learning valuable lessons, Empowering me to become a more confident human being on top of all the physical benefits.
                                My passion in life is to lead a team of strong minded people who are obsessed with the process of investing in themselves.
                                Helping them stay accountable in empowering themselves to take action day by day to achieve there highest potential.
                                With there fitness and in life.
                                <br />
                                <br />
                                Certifications:
                                <ul className="list-disc pl-10">
                                    <li>Fitness & Health Promotion Diploma - Fanshawe College</li>
                                    <li>NSCA-Certified Personal Trainer</li>
                                    <li>Exercise Therapy Level One</li>
                                    <li>Can-Fit Pro Personal Training Specialist</li>
                                    <li>St. Clair College Athletics Department-Assistant Athletic Trainer</li>
                                    <li>Edge Baseball Camp Instructor</li>
                                    <li>First Responder Certified</li>
                                    <li>CPR/First Aid/AED Certified</li>
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
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarker, faPhone, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

library.add(
    faMapMarker,
    faPhone,
    faEnvelopeSquare
);
class CallToAction extends React.Component {
    render() {
        return (
            <section className="bg-gray-300 mx-auto w-4/5 rounded-xl" id="Lorem_Contact">
                <div className="container mx-auto px-6 text-center py-16">
                    <h2 className="mb-6 text-4xl font-bold text-center">
                        Lorem Ipsum!
                    </h2>
                    <h3 className="my-4 text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h3>
                    <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
                        Ipsum
                    </button>
                </div>
                <div className="bg-gray-300 mx-auto w-full lg:w-4/5 rounded-xl pb-5 block lg:hidden">
                    {/* left side */}
                    <div className="m-auto mx-5 bg-gray-400 py-5 my-5 px-10 rounded-lg block lg:hidden">
                        <h1 className="pt-2 pl-2 text-4xl font-medium">Contact Us</h1>
                        <div className="p-2 pt-4 ml-4 clearfix">
                            <FontAwesomeIcon icon={['fa', 'map-marker']} size="2x" className="float-left mt-2 ml-1" />
                            <div className="float-left text-lg">
                                <p className="pl-12">
                                    Address Line 1 Here
                                </p>
                                <p className="pl-12">
                                    Address Line 2 Here
                                </p>
                            </div>
                        </div>
                        <div className="p-2 pt-4 ml-4 clearfix">
                            <FontAwesomeIcon icon={['fa', 'phone']} size="2x" className="float-left mt-2 mr-1" />
                            <div className="float-left text-lg">
                                <p className="pl-10">
                                    (123) 456-7890
                                </p>
                                <p className="pl-10">
                                    (098) 765-4321
                                </p>
                            </div>
                        </div>
                        <div className="p-2 pt-4 ml-4 clearfix">
                            <FontAwesomeIcon icon={['fa', 'envelope-square']} size="2x" className="float-left mr-2" />
                            <div className="float-left text-lg">
                                <p className="pl-10">
                                    fake@email.scam
                                </p>

                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="m-auto my-auto py-5 px-10 rounded-lg block lg:hidden">
                        <p className="p-2 ml-4 text-4xl font-medium">Request callback</p>
                        <form className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <input type="name" name="name" id="name" placeholder="Full Name" className="h-12 p-3 rounded-lg bg-white border border-gray-500 text-gray-600 font-semibold focus:border-black focus:outline-none" />
                            </div>
                            <div className="flex flex-col mt-2">
                                <input type="email" name="email" id="email" placeholder="Email Address" className="h-12 p-3 rounded-lg bg-white border border-gray-500 text-gray-600 font-semibold focus:border-black focus:outline-none" />
                            </div>
                            <div className="flex flex-col mt-2">
                                <input type="phoneno" name="phoneno" id="phoneno" placeholder="Phone Number" className="h-12 p-3 rounded-lg bg-white border border-gray-500 text-gray-600 font-semibold focus:border-black focus:outline-none" />
                            </div>
                            <button className="h-12 bg-purple-600 hover:bg-purple-500 rounded mt-2 w-1/3 transition ease-in-out duration-300">
                                <p className="mx-auto">Submit</p>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="bg-gray-300 mx-auto w-full lg:w-4/5 rounded-xl pb-5 hidden lg:flex">
                    {/* left side */}
                    <div className="w-1/2 bg-gray-400 mx-10 py-5 my-5w px-10 rounded-lg">
                        <h1 className="pt-2 pl-2 text-4xl font-medium">Contact Us</h1>
                        <div className="p-2 pt-4 ml-4 clearfix">
                            <FontAwesomeIcon icon={['fa', 'map-marker']} size="2x" className="float-left mt-2 ml-1" />
                            <div className="float-left text-lg">
                                <p className="pl-12">
                                    Address Line 1 Here
                                </p>
                                <p className="pl-12">
                                    Address Line 2 Here
                                </p>
                            </div>
                        </div>
                        <div className="p-2 pt-4 ml-4 clearfix">
                            <FontAwesomeIcon icon={['fa', 'phone']} size="2x" className="float-left mt-2 mr-1" />
                            <div className="float-left text-lg">
                                <p className="pl-10">
                                    (123) 456-7890
                                </p>
                                <p className="pl-10">
                                    (098) 765-4321
                                </p>
                            </div>
                        </div>
                        <div className="p-2 pt-4 ml-4 clearfix">
                            <FontAwesomeIcon icon={['fa', 'envelope-square']} size="2x" className="float-left mr-2" />
                            <div className="float-left text-lg">
                                <p className="pl-10">
                                    fake@email.scam
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="w-1/2 mx-10 my-auto py-5 px-10 rounded-lg">
                        <p className="p-2 ml-4 text-4xl font-medium">Request callback</p>
                        <form className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <input type="name" name="name" id="name" placeholder="Full Name" className="h-12 p-3 rounded-lg bg-white border border-gray-500 text-gray-600 font-semibold focus:border-black focus:outline-none" />
                            </div>
                            <div className="flex flex-col mt-2">
                                <input type="email" name="email" id="email" placeholder="Email Address" className="h-12 p-3 rounded-lg bg-white border border-gray-500 text-gray-600 font-semibold focus:border-black focus:outline-none" />
                            </div>
                            <div className="flex flex-col mt-2">
                                <input type="phoneno" name="phoneno" id="phoneno" placeholder="Phone Number" className="h-12 p-3 rounded-lg bg-white border border-gray-500 text-gray-600 font-semibold focus:border-black focus:outline-none" />
                            </div>
                            <button className="h-12 bg-purple-600 hover:bg-purple-500 rounded mt-2 w-1/3 transition ease-in-out duration-300">
                                <p className="mx-auto">Submit</p>
                            </button>
                        </form>
                    </div>
                </div>
            </section >
        );
    }
};
export default CallToAction;
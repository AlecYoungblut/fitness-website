import React from "react";
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarker, faPhone, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import duopose from './imgs/duopose.jpg';


library.add(
    faMapMarker,
    faPhone,
    faEnvelopeSquare
);
class CallToAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', phoneno: '' };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    handlePhoneChange(event) {
        this.setState({ phoneno: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();

        const serviceID = 'service_pmoeifb';
        const templateID = 'template_anqy5gq';
        const publicKey = 'user_c0wgstTGpI0ijaURsxQJf'
        var templateParams = {
            name: `${this.state.name}`,
            phoneno: `${this.state.phoneno}`,
            email: `${this.state.email}`
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey).then(() => {
            alert('The submission was successful! Someone will contact you at first availability');
        }, (err) => {
            alert(JSON.stringify(err));
        });



        // emailjs.send('service_pmoeifb', 'template_anqy5gq', {
        //     name: `${this.state.name}`,
        //     phoneno: `${this.state.phoneno}`,
        //     email: `${this.state.email}`,
        // }, 'user_c0wgstTGpI0ijaURsxQJf')
        //     .then(function (response) {
        //         console.log('SUCCESS!', response.status, response.text);
        //     }, function (error) {
        //         console.log('FAILED...', error);
        //     });
    }
    render() {
        return (
            <section className="bg-gray-300 mx-auto w-4/5 rounded-xl lg:pb-10 lg:pt-10 mb-24" id="Lorem_Contact">
                {
                    /* 
                    <div className="container mx-auto px-6 text-center py-16">
                        
                    </div>
                    */
                }
                <div className="lg:bg-gray-400 mx-auto w-full lg:w-3/4 rounded-xl block lg:hidden">
                    {/* left side */}
                    <div className="m-auto mx-5 py-5 my-5 px-10 rounded-lg block lg:hidden">
                        <h1 className="pt-2 pl-2 text-4xl font-medium">Contact Us</h1>
                        <div className="p-2 pt-4 ml-4 flex flex-row items-center hover:font-bold">
                            <FontAwesomeIcon icon={['fa', 'map-marker']} size="2x" className="mt-2 ml-1" />
                            <div className="text-lg">
                                <p className="pl-12">
                                    1830 Wharncliffe Rd S Unit 4
                                </p>
                                <p className="pl-12">
                                    London, ON N6L 1K1
                                </p>
                            </div>
                        </div>
                        <div className="p-2 pt-4 ml-4 flex flex-row items-center hover:font-bold">
                            <FontAwesomeIcon icon={['fa', 'phone']} size="2x" className="mt-2 mr-1" />
                            <div className="text-lg">
                                <p className="pl-10">
                                    <a href="https://api.whatsapp.com/send?phone=15193189319&app=facebook&entry_point=page_cta">
                                        (519) 318-9319
                                    </a>
                                </p>
                                <p className="pl-10">

                                </p>
                            </div>
                        </div>
                        <div className="p-2 pt-4 ml-4 flex flex-row items-center hover:font-bold">
                            <FontAwesomeIcon icon={['fa', 'envelope-square']} size="2x" className="mr-2" />
                            <div className="text-lg">
                                <p className="pl-10">
                                    <a href="mailto:visfitinfo@gmail.com?subject=Request%20Callback">
                                        visfitinfo@gmail.com
                                    </a>
                                </p>

                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="m-auto my-auto py-5 px-10 rounded-lg block lg:hidden">
                        <p className="p-2 ml-4 text-4xl font-medium">Request callback</p>
                        <form className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <input type="name" name="name" id="name" placeholder="Full Name" onChange={this.handleNameChange} value={this.state.name} className="h-12 p-3 rounded-lg bg-white border border-gray-500 text-gray-600 font-semibold focus:border-black focus:outline-none" />
                            </div>
                            <div className="flex flex-col mt-2">
                                <input type="email" name="email" id="email" placeholder="Email Address" onChange={this.handleEmailChange} value={this.state.email} className="h-12 p-3 rounded-lg bg-white border border-gray-500 text-gray-600 font-semibold focus:border-black focus:outline-none" />
                            </div>
                            <div className="flex flex-col mt-2">
                                <input type="phoneno" name="phoneno" id="phoneno" placeholder="Phone Number" onChange={this.handlePhoneChange} value={this.state.phoneno} className="h-12 p-3 rounded-lg bg-white border border-gray-500 text-gray-600 font-semibold focus:border-black focus:outline-none" />
                            </div>
                            <button onClick={this.handleSubmit} className="h-12 bg-black hover:bg-gray-800 text-white rounded mt-2 w-1/3 transition ease-in-out duration-300">
                                <p className="mx-auto">Submit</p>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="bg-gray-400 p-5 mx-auto w-full lg:w-3/4 rounded-xl hidden lg:flex">
                    {/* left side */}
                    <div className="w-1/2 rounded-lg">
                        <h1 className="pt-2 pl-2 text-4xl pb-4 font-medium">Contact Us</h1>
                        <div className="p-2 pt-4 ml-4 flex flex-row items-center text-lg hover:font-bold">
                            <FontAwesomeIcon icon={['fa', 'map-marker']} size="2x" className="mt-2 ml-1" />
                            <div className="" title="Google Maps directions">
                                <p className="pl-12">
                                    <a href="https://www.google.com/maps/place/VISFIT+Personal+Training+Ltd./@42.9214517,-81.2790753,15z/data=!4m2!3m1!1s0x0:0x71809e22faccc85a?sa=X&ved=2ahUKEwjg48y69Jj3AhUTLX0KHXGKDlMQ_BJ6BAhhEAU">
                                        1830 Wharncliffe Rd S Unit 4
                                    </a>
                                </p>
                                <p className="pl-12">
                                    <a href="https://www.google.com/maps/place/VISFIT+Personal+Training+Ltd./@42.9214517,-81.2790753,15z/data=!4m2!3m1!1s0x0:0x71809e22faccc85a?sa=X&ved=2ahUKEwjg48y69Jj3AhUTLX0KHXGKDlMQ_BJ6BAhhEAU">
                                        London, ON N6L 1K1
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="p-2 pt-4 ml-4 flex flex-row items-center hover:font-bold">
                            <FontAwesomeIcon icon={['fa', 'phone']} size="2x" className="mt-2 mr-1" />
                            <div className="text-lg">
                                <p className="pl-10">
                                    <a href="https://api.whatsapp.com/send?phone=15193189319&app=facebook&entry_point=page_cta">
                                        (519) 318-9319
                                    </a>
                                </p>
                                <p className="pl-10">

                                </p>
                            </div>
                        </div>
                        <div className="p-2 pt-4 ml-4 flex flex-row items-center hover:font-bold">
                            <FontAwesomeIcon icon={['fa', 'envelope-square']} size="2x" className="mr-2" />
                            <div className="text-lg">
                                <p className="pl-10">
                                    <a href="mailto:visfitinfo@gmail.com?subject=Request%20Callback">
                                        visfitinfo@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="w-1/2 rounded-lg">
                        <p className="p-2 ml-4 text-4xl font-medium">Request callback</p>
                        <form className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <input type="name" name="name" id="name" placeholder="Full Name" onChange={this.handleNameChange} value={this.state.name} className="h-12 p-3 rounded-lg bg-white border border-gray-500 text-gray-600 font-semibold focus:border-black focus:outline-none" />
                            </div>
                            <div className="flex flex-col mt-2">
                                <input type="email" name="email" id="email" placeholder="Email Address" onChange={this.handleEmailChange} value={this.state.email} className="h-12 p-3 rounded-lg bg-white border border-gray-500 text-gray-600 font-semibold focus:border-black focus:outline-none" />
                            </div>
                            <div className="flex flex-col mt-2">
                                <input type="phoneno" name="phoneno" id="phoneno" placeholder="Phone Number" onChange={this.handlePhoneChange} value={this.state.phoneno} className="h-12 p-3 rounded-lg bg-white border border-gray-500 text-gray-600 font-semibold focus:border-black focus:outline-none" />
                            </div>
                            <button onClick={this.handleSubmit} className="h-12 bg-black hover:bg-gray-800 text-white rounded mt-2 w-1/3 transition ease-in-out duration-300">
                                <p className="mx-auto">Submit</p>
                            </button>
                        </form>
                    </div>
                </div>
                <script type="text/javascript"
                    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
                </script>
                <script type="text/javascript">
                    emailjs.init('user_c0wgstTGpI0ijaURsxQJf')
                </script>
            </section>
        );
    }
};
export default CallToAction;
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';


library.add(
    faChevronCircleDown,
);

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navClosed: true
        };
    }
    render() {
        return (
            <section className="bg-gray-900 rounded-xl mx-auto w-4/5">
                <div className="lg:pl-6 pl-20 pr-6 py-4 flex items-center justify-between">
                    <a className="font-bold text-2xl lg:text-4xl text-white" href="#">
                        Yeomans Yeeting
                    </a>
                    <div className="block lg:hidden" onMouseLeave={() => this.setState({ navClosed: true })}>
                        <div className="relative inline-block text-left">
                            <div>
                                <span className="rounded-md shadow-sm">
                                    <button type="button" onClick={() => this.setState({ navClosed: !this.state.navClosed })} className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
                                        Options
                                        <FontAwesomeIcon icon={['fa', 'chevron-circle-down']} size="1x" className="ml-1 mt-1" />
                                    </button>
                                </span>
                            </div>
                            <div className="origin-top-right absolute right-0 pt-2 w-56 rounded-md shadow-lg" hidden={(this.state.navClosed)}>
                                <div className="rounded-md bg-white shadow-xs">
                                    <div className="py-1" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" >About</a>
                                        <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" >Testimonials</a>
                                        <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" >Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="inline-flex">
                            <li><a className="px-4 hover:font-bold text-white" href="#">Home</a></li>
                            <li><a className="px-4 hover:font-bold text-white" href="#Lorem_Testimonials">Lorem</a></li>
                            <li><a className="px-4 hover:font-bold text-white" href="#Lorem_Contact">Lorem</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
};
export default Nav;
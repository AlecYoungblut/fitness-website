import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <section className="bg-purple-200">
                <div className="container mx-auto px-12 py-2 flex justify-between items-center">
                    <a className="font-bold text-2xl lg:text-4xl" href="#">
                        Yeomans Yeeting
                    </a>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="inline-flex">
                            <li><a className="px-4 hover:font-bold" href="/">Home</a></li>
                            <li><a className="px-4 hover:font-bold" href="#Lorem_Testimonials">Lorem</a></li>
                            <li><a className="px-4 hover:font-bold" href="#Lorem_Contact">Lorem</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
};
export default Nav;
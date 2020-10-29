import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faInstagramSquare, faFacebook, faGooglePlus, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(
    faTwitter,
    faInstagramSquare,
    faFacebook,
    faGooglePlus,
    faLinkedin
    // more icons go here
);


class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-gray-100">
                <div className="container mx-auto px-6 pt-10 pb-6">
                    <div className="w-full text-center">
                        <h5 className="uppercase mb-2 font-bold">Socials</h5>
                        <ul className="mb-4">
                            <li className="mt-2">
                                <div>

                                    <a href></a>
                                    <p className="m-2">
                                        <a className="px-4 hover:font-bold" href="/">
                                            <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" className="mr-2" />
                                            FacebookHandle
                                        </a>
                                    </p>
                                    <p className="m-2">
                                        <a className="px-4 hover:font-bold" href="/">
                                            <FontAwesomeIcon icon={['fab', 'instagram-square']} size="lg" className="mr-2" />
                                            @InstaHandle
                                        </a>
                                    </p>
                                    <p className="m-2">
                                        <a className="px-4 hover:font-bold" href="/">
                                            <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" className="mr-2" />
                                            @TwitterHandle
                                        </a>
                                    </p>
                                    <p className="m-2">
                                        <a className="px-4 hover:font-bold" href="/">
                                            <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" className="mr-2" />
                                            LinkedIn Name
                                        </a>
                                    </p>
                                    <p className="m-2">
                                        <a className="px-4 hover:font-bold" href="/">
                                            <FontAwesomeIcon icon={['fab', 'google-plus']} size="lg" className="mr-2" />
                                            Google+ Name
                                        </a>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full text-right">
                        <ul className="mb-0">
                            <li className="mt-2">
                                <div>
                                    <p>Copyright ur nan 2020</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
};
export default Footer;
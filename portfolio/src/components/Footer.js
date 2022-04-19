import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faInstagramSquare, faFacebook, faGooglePlus, faLinkedin, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';

library.add(
    faTwitter,
    faInstagramSquare,
    faFacebook,
    faGooglePlus,
    faLinkedin,
    faSnapchatGhost
    // more icons go here
);


class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-gray-900 mx-auto w-4/5 rounded-xl">
                <div className="container mx-auto px-6 pt-10 pb-6 mt-16">
                    <div className="flex mb-4">
                        <div className="w-1/2 mt-2 text-white">
                            <p>© Copyright 2022. All Rights Reserved.</p>
                        </div>
                        <div className="w-1/2 text-right text-white">
                            <a className="hover:font-bold" href="https://www.facebook.com/visfitpersonaltraining/">
                                <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" className="mr-2" />
                            </a>
                            <a className="hover:font-bold" href="https://www.instagram.com/visfitlondon/">
                                <FontAwesomeIcon icon={['fab', 'instagram-square']} size="2x" className="mr-2" />
                            </a>
                            {/* <a className="hover:font-bold" href="/">
                                <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" className="mr-2" />
                            </a>
                            <a className="hover:font-bold" href="/">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" className="mr-2" />
                            </a>
                            <a className="hover:font-bold" href="/">
                                <FontAwesomeIcon icon={['fab', 'google-plus']} size="lg" className="mr-2" />
                            </a>
                            <a className="hover:font-bold" href="/">
                                <FontAwesomeIcon icon={['fab', 'snapchat-ghost']} size="lg" className="mr-2" />
                            </a> */}
                        </div>
                    </div>

                </div>
            </footer>
        );
    }
};
export default Footer;
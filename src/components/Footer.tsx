import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="mx-auto mt-20 rounded-3xl bg-white/5 px-3 pb-3">
            <div className="flex justify-center">
                <div className="grid grid-cols-3 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
                        <svg className="mx-auto md:ml-10" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M8 18L10.29 20.29C10.514 20.5156 10.7804 20.6946 11.0739 20.8168C11.3674 20.9389 11.6821 21.0018 12 21.0018C12.3179 21.0018 12.6326 20.9389 12.9261 20.8168C13.2196 20.6946 13.486 20.5156 13.71 20.29L16 18H18C19.0609 18 20.0783 17.5786 20.8284 16.8285C21.5786 16.0783 22 15.0609 22 14V7C22 5.93913 21.5786 4.92178 20.8284 4.17163C20.0783 3.42149 19.0609 3 18 3H6C4.93913 3 3.92172 3.42149 3.17157 4.17163C2.42142 4.92178 2 5.93913 2 7V14C2 15.0609 2.42142 16.0783 3.17157 16.8285C3.92172 17.5786 4.93913 18 6 18H8Z" stroke="#60A5FA" stroke-width="2.04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M17 9H7" stroke="#60A5FA" stroke-width="2.04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M13 12H7" stroke="#60A5FA" stroke-width="2.04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        <div className="text-[#60A5FA]">
                            <Link to="about"><h2 className="pb-2 hover:text-white">About Us</h2></Link>
                            <Link to="/contact"><h2 className="hover:text-white">Contact Us</h2></Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
                        <svg className="mx-auto md:ml-10" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"><path d="M5.5 8C6.88071 8 8 6.88071 8 5.5C8 4.11929 6.88071 3 5.5 3C4.11929 3 3 4.11929 3 5.5C3 6.88071 4.11929 8 5.5 8ZM5.5 8V16M5.5 8C5.5 10.2091 7.29086 12 9.5 12H16M5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16ZM16 12C16 13.3807 17.1193 14.5 18.5 14.5C19.8807 14.5 21 13.3807 21 12C21 10.6193 19.8807 9.5 18.5 9.5C17.1193 9.5 16 10.6193 16 12Z" stroke="#827EF8" stroke-width="2.04" stroke-linecap="round" stroke-linejoin="round"></path></g>
                        </svg>
                        <div className="text-[#827EF8]">
                            <Link to="contributors"><h2 className="pb-2 hover:text-white">Contributors</h2></Link>
                            <Link to="https://github.com/Swifty9/Maverick-AI"><h2 className="hover:text-white">Contact Us</h2></Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
                        <svg className="mx-auto md:ml-10" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#A657F7">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path stroke="#A657F7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.04" d="M14 8H9m2 4H9"></path>
                                <path fill="#A657F7" d="M3 16h8c0 1.333.8 4 4 4a3 3 0 0 0 3-3V4h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v7a3 3 0 0 1-3 3H5a2 2 0 0 1-2-2v-2z"></path>
                                <path stroke="#A657F7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.04" d="M15 20c-3.2 0-4-2.667-4-4H3v2a2 2 0 0 0 2 2h10zm0 0a3 3 0 0 0 3-3v-7m0-6H7a2 2 0 0 0-2 2v9.5M18 4h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1m0-6v6"></path>
                            </g>
                        </svg>
                        <div className="text-[#A657F7]">
                            <Link to="/privacy-policy"><h2 className="pb-2 hover:text-white">Privacy Policy</h2></Link>
                            <Link to="/terms-of-service"><h2 className="hover:text-white">Terms of Service</h2></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[98%] mx-auto h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="grid grid-cols-2">
                <h2 className="text-left mt-2 ml-[2%] text-[#60A5FA] justify-start">© 2024 Maverick AI.</h2>
                <h2 className="text-right mt-2 mr-[2%] text-[#A657F7] justify-end">All Rights Reserved.</h2>
            </div>
        </footer>
    );
}

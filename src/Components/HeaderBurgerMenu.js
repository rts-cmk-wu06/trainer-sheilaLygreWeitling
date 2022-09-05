import React from 'react'
import { CgClose } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderBurgerMenu = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div>
            <nav>
                <section className=' text-[24px]'>
                    <div onClick={() => setIsNavOpen((prev) => !prev)} className=' text-[#9e9e9e] text-xl'>
                        <HiMenuAlt3 />
                    </div>
                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8 text-[#9e9e9e] text-xl"
                            onClick={() => setIsNavOpen(false)}
                        ><CgClose />
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px] ">
                            <Link to="/Home">
                                <li className=" my-8 ">
                                    <button>Home</button>
                                </li>
                            </Link>
                            <Link to="/Search">
                                <li className=" my-8 ">
                                    <button>Search</button>
                                </li>
                            </Link>
                            <Link to="/About">
                                <li className=" my-8 ">
                                    <button>My Schedule</button>
                                </li>
                            </Link>
                            <Link to="/LoginPage">
                                <li className=" my-8 ">
                                    <button>Log in</button>
                                </li>
                            </Link>

                        </ul>
                    </div>
                </section>
            </nav>
        </div>
    )
}

export default HeaderBurgerMenu
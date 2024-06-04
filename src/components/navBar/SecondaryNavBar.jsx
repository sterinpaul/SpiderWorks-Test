/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
    Navbar,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button
} from "@material-tailwind/react";
import {
    HiBars3,
} from "react-icons/hi2";
import { FiSearch, FiMessageSquare } from "react-icons/fi";


function NavList() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Menu open={openNav} handler={setOpenNav}>
            <MenuHandler>
                <Button className="py-1 rounded-full flex justify-center items-center gap-2 font-normal capitalize"
                    onClick={() => setOpenNav(!openNav)}
                >
                    <HiBars3 className="h-6 w-6" strokeWidth={2} />
                    Menu
                </Button>
            </MenuHandler>
            <MenuList className="md:block hidden">
                <MenuItem className="hover:text-blue-500 focus:text-blue-500">
                    <button>
                        Learn
                    </button>
                </MenuItem>

                <MenuItem className="hover:text-blue-500 focus:text-blue-500">
                    <button>
                        How do I participate ?
                    </button>
                </MenuItem>

                <MenuItem className="hover:text-blue-500 focus:text-blue-500">
                    <button>
                        Universities
                    </button>
                </MenuItem>

                <MenuItem className="hover:text-blue-500 focus:text-blue-500">
                    <button>
                        Corporate
                    </button>
                </MenuItem>
            </MenuList>

        </Menu>
    );
}

export function SecondaryNavBar() {

    return (
        <div className="md:flex justify-center items-center hidden bg-transparent">
            <Navbar className="fixed top-5 w-100 max-w-none px-6 py-2 backdrop-blur-sm backdrop-filter backdrop-brightness-95 border-gray-200 rounded-md z-50">
                <div className="flex items-center justify-between gap-12">

                    <div className="pt-1 pl-4">
                        <div className="logo"></div>
                    </div>

                    <div className="flex gap-4">
                        
                        <NavList />
                        <div className="hover:shadow-lg rounded-full bg-gradient-to-r from-blue-500 via-green-500 to to-red-600">

                            <button className="border-none w-36 m-0.5 py-0.5 font-normal capitalize rounded-full flex items-center justify-center gap-2 text-nowrap bg-white text-blue-gray-800">
                                <FiMessageSquare className="w-4 h-4" />
                                Discuss CPT
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center ml-8">
                        <div style={{ border: "4px solid black" }} className="w-8 h-8 rounded-full cursor-pointer flex justify-center items-center -mr-1">
                            <FiSearch className="w-3 h-3 text-black" />
                        </div>
                        <Button className="rounded-full py-2 px-6 capitalize font-normal text-nowrap">
                            Join Program
                        </Button>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}
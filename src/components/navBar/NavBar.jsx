/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
    Navbar,
    Collapse,
    Button,
    IconButton,
    List
} from "@material-tailwind/react";
import {
    HiBars3,
    HiMiniXMark
} from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";


function NavList({openNav}) {

    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">

            <button className=" hover:text-blue-500 focus:text-blue-500 focus:drop-shadow-lg shadow-black p-2 my-auto">
                Learn
            </button>

            {!openNav && <div className="my-auto w-1.5 h-1.5 bg-black rounded-full"></div>}


            <button className=" hover:text-blue-500 focus:text-blue-500 focus:drop-shadow-lg shadow-black p-2 my-auto">
                How do I participate?
            </button>


            {!openNav && <div className="my-auto w-1.5 h-1.5 bg-black rounded-full"></div>}

            <button className=" hover:text-blue-500 focus:text-blue-500 focus:drop-shadow-lg shadow-black p-2 my-auto">
                Universities
            </button>


            {!openNav && <div className="my-auto w-1.5 h-1.5 bg-black rounded-full"></div>}

            <button className=" hover:text-blue-500 focus:text-blue-500 focus:drop-shadow-lg shadow-black p-2">
                Corporate
            </button>

        </List>
    );
}

export function NavBar() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="fixed top-0 md:relative z-50 max-w-none rounded-none bg-white">
            <div className="flex items-center justify-between">
                
                <div className="pl-4 pt-1">
                    <div className="logo"></div>
                </div>
                    

                <div className="hidden lg:block">
                    <NavList openNav={openNav} />
                </div>
                <div className="hidden gap-2 lg:flex relative group">
                    <div style={{border:"7px solid black"}} className="absolute top-0 -left-9 w-10 h-10 rounded-full cursor-pointer flex justify-center items-center">
                        <FiSearch className="w-4 h-4 text-black"/>
                    </div>
                    <Button className="rounded-full px-6 normal-case text-nowrap font-normal">
                        Join Program
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <HiMiniXMark className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <HiBars3 className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList openNav={openNav} />
                <div className="flex items-center justify-center">
                        <div style={{ border: "4px solid black" }} className="w-8 h-8 rounded-full cursor-pointer flex justify-center items-center -mr-1">
                            <FiSearch className="w-3 h-3 text-black" />
                        </div>
                        <Button className="rounded-full py-2 px-6 capitalize font-normal text-nowrap">
                            Join Program
                        </Button>
                    </div>
            </Collapse>
        </Navbar>
    );
}
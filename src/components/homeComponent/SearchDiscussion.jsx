import { Typography } from "@material-tailwind/react"
import { FiSearch} from "react-icons/fi";
import { MdOutlineChatBubbleOutline,MdLightbulbOutline } from "react-icons/md"
import { FaLongArrowAltDown } from "react-icons/fa";


export const SearchDiscussion = ()=>{
    return(
        <>
            <p className="text-gray-500 pl-8 md:px-20">Home/Forum</p>
            <div className="p-8 flex flex-col justify-center items-center gap-3 text-center">
                <p className="text-gray-600">FORUM</p>
                <Typography variant="h1" className="font-normal font-serif">Discuss & <span className="italic">Evolve</span></Typography>

                <p className="text-gray-600">Engage with Fellow Professionals: Join the  Program Forum Discussion!</p>
                <div className="relative mt-4">
                    <input className="pl-4 rounded-full border h-12 w-100 md:w-96 p-2 border-blue-gray-700" placeholder="Search Topics" />
                    <FiSearch className="w-10 h-10 absolute top-1 right-1 p-2 bg-black rounded-full text-white"/>
                </div>

                <div className="flex justify-evenly items-center flex-wrap gap-4 m-4 mt-6 text-gray-700">
                    <div className="w-52 flex gap-2 items-center justify-center">
                        <MdOutlineChatBubbleOutline className="w-8 h-8 p-2 rounded-full text-pink-800 bg-red-50"/><p>START DISCUSSING</p>
                    </div>
                    <div className="w-2 hidden md:block h-2 rounded-full bg-blue-gray-500"></div>
                    <div className="w-52 flex gap-2 items-center justify-center">
                        <MdLightbulbOutline className="w-8 h-8 p-2 rounded-full text-blue-700 bg-blue-50"/><p>VIEW TOPICS</p>
                    </div>

                </div>
                <FaLongArrowAltDown className="w-10 h-10 animate-bounce"/>
            </div>

        </>
    )
}
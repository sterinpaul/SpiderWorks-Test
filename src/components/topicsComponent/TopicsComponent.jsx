import { Typography } from "@material-tailwind/react"
import { MdOutlineChatBubbleOutline } from "react-icons/md"

const searchedArray = [
    "Eligibility",
    "F1 Visa Students",
    "Universities",
    "Admission",
    "Companies",
    "Jobs"
]

export const TopicsComponent = ()=>{
    return(
        <div className="h-full w-full mt-12 py-20 bg-orange-50 flex flex-col items-center">
            <p className="text-gray-600">TOPICS</p>
            <Typography variant="h1" className="font-normal font-serif">Most Searched <span className="italic">Ones</span></Typography>
            <div className="my-8 grid w-full md:px-24 lg:px-40 px-20 sm:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-6 font-serif">
                {searchedArray.map((single,index)=>{
                    return(
                        <article key={index} className={`hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer rounded-lg text-wrap text-center text-2xl text-white ${index===0 && "bg-gradient-to-tr from-red-900 via-black to to-purple-900"} bg-black py-16 px-3`}>{single}</article>
                    )
                })}
            </div>
            <div className="mt-6 flex gap-4 justify-center items-center">
                <p>Didn&apos;t find your topic ?</p>
                <MdOutlineChatBubbleOutline className="w-4 h-4"/> 
                <p className="font-serif italic cursor-pointer">Start discussing</p>
            </div>
        </div>
    )
}
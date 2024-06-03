import { Button, Typography } from "@material-tailwind/react"
import { LuSparkle } from "react-icons/lu"
import { MdOutlineArrowRightAlt } from "react-icons/md"

export const Promotions = () => {
    return (
        <div className="flex flex-col gap-6 justify-center items-center py-6 px-2 w-full lg:w-96">
            <div className="rounded-lg border bg-amber-50 border-black w-full h-full text-center p-8 flex flex-col justify-center items-center">
                <Typography variant="h3" className="font-normal font-serif">Top Contributor</Typography>
                <Typography variant="h3" className="font-normal font-serif italic">this week</Typography>
                <div className="flex justify-center items-center relative mt-2">
                    <img src="./../../src/assets/emoji/promoImg1.png" alt="contributor" className="animate-pulse" />
                    <div className="bg-red-900 text-white text-xs absolute top-16 -left-16 h-4 rounded-full px-1">
                        <span className="w-4 h-4 text-white text-nowrap rounded-full"></span>100+RESPONSES
                    </div>
                    <div className="bg-green-900 text-white font-thin text-xs text-nowrap absolute top-20 left-32 h-4 rounded-full px-1">
                        <span className="w-4 h-4 text-white rounded-full"></span>4.2 POSTIVE RATING
                    </div>
                </div>
                <Typography variant="h5" className="font-normal m-5">Jishnu Ambadi</Typography>
                <hr className="border-gray-400" />
                <p className="m-4">You can be next one! Be a part of USA&apos;s !st CPT Program Directory!</p>

                <button className="px-4 m-1 py-3 font-normal capitalize rounded-full flex items-center justify-center gap-2 text-nowrap bg-gradient-to-tr from-red-900 via-black to to-purple-900 text-white">
                    Join Community & Ask
                    <LuSparkle className="w-4 h-4 text-yellow-500 self-start" />
                </button>

            </div>
            <div className="p-8 bg-gradient-to-t from-pink-900 via-purple-900 to to-black rounded-lg border w-full h-full flex flex-col justify-center items-center">
                    
                <div className="relative">
                    <div className="m-4 top-0 rounded-full h-32 w-24 overflow-hidden">
                        <img className="w-100 h-100" src="./../../src/assets/emoji/promoImg2.png" alt="Promotion image" />
                    </div>
                </div>
                <p className="text-white font-normal">E-BOOK</p>
                <Typography variant="h4" className="text-white text-center p-4 font-serif">Charting Paths:Program Through a <span className="italic">Student&apos;s Eyes</span></Typography>
                <Button variant="outlined" color="white" className="rounded-full flex gap-2 items-center">
                    Get the Guide
                    <MdOutlineArrowRightAlt h-6 w-6 />
                </Button>
            </div>

        </div>
    )
}
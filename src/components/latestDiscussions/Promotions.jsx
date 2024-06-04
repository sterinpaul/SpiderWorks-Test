import { Button, Typography } from "@material-tailwind/react"
import { LuSparkle } from "react-icons/lu"
import { MdOutlineArrowRightAlt } from "react-icons/md"

export const Promotions = () => {
    return (
        <div className="flex flex-col gap-8 justify-center items-center py-6 w-100 lg:w-96">
            <div className="rounded-lg border bg-amber-50 border-gray-400 w-100 h-100 text-center p-8 flex flex-col justify-center items-center">
                <Typography variant="h3" className="font-normal font-serif">Top Contributor</Typography>
                <Typography variant="h3" className="font-normal font-serif italic">this week</Typography>
                <div className="flex justify-center items-center relative my-4 w-40 h-40">
                    <div style={{filter:"blur(20px)"}} className="animate-spin absolute h-40 w-40 bg-gradient-to-tr from-red-600 to to-deep-purple-600 rounded-full"></div>
                    <img className="absolute w-full h-full object-cover" src="/emoji/contributorImg.png" alt="contributor" />
                    <div className="bg-red-900 text-white text-xs absolute top-16 -left-16 h-4 rounded-full px-1">
                        <span className="w-4 h-4 text-white text-nowrap rounded-full"></span>100+RESPONSES
                    </div>
                    <div className="bg-green-900 text-white font-thin text-xs text-nowrap absolute top-20 left-32 h-4 rounded-full px-1">
                        <span className="w-4 h-4 text-white rounded-full"></span>4.2 POSTIVE RATING
                    </div>
                </div>
                <Typography variant="h5" className="font-normal m-5">Jishnu Ambadi</Typography>
                <hr/>
                <p className="mx-8 my-4">You can be next one! Be a part of USA&apos;s !st CPT Program Directory!</p>

                <button className="px-4 m-1 py-3 font-normal capitalize rounded-full flex items-center justify-center gap-2 text-nowrap bg-gradient-to-tr from-red-900 via-black to to-purple-900 text-white">
                    Join Community & Ask
                    <LuSparkle className="w-4 h-4 text-yellow-500 self-start" />
                </button>

            </div>
            
            <div className="rounded-lg border bgGradient w-100 h-full text-center py-16 px-8 flex flex-col justify-center items-center gap-4">
                <div className="mb-4 relative w-24 h-44" style={{borderRadius:"50%"}}>
                    <div style={{borderRadius:"50%"}} className="absolute -rotate-12 top-0 -left-2 bg-white w-full h-full"></div>
                    <div style={{borderRadius:"50%"}} className="rotate-45 absolute top-2 left-0 bg-gradient-to-t from-purple-300 to to-pink-700 w-full h-full"></div>
                    <div style={{borderRadius:"50%"}} className="-rotate-12 absolute top-0 -left-2 w-full h-full overflow-hidden">
                        <img className="w-100 h-100 translate-y-9 rotate-12" src="/emoji/guideImg.png" alt="Promotion image" />
                    </div>
                </div>
                <p className="text-white font-normal">E-BOOK</p>
                <Typography variant="h4" className="text-white text-center p-4 font-serif">Charting Paths:Program Through a <span className="italic">Student&apos;s Eyes</span></Typography>
                <Button variant="outlined" color="white" className="rounded-full flex gap-2 items-center">
                    Get the Guide
                    <MdOutlineArrowRightAlt className="h-5 w-5" />
                </Button>
            </div>
        </div>
    )
}
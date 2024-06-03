import "./EmojiComponent.css"


export const EmojiComponent = ()=>{
    return(
        <div className="relative flex flex-wrap w-full h-96 my-8 overflow-x-hidden">

            <div className="hidden absolute bottom-16 -left-4 sm:flex justify-center items-center rounded-full overflow-hidden w-44 h-44 bg-pink-50 border-8 border-white moveAnimation1">
                <img src="./../../src/assets/emoji/image 1.png" className="h-100 w-100 object-cover"/>
            </div>

            <div className="hidden md:block absolute bottom-24 left-32">
                <div className="relative">
                    <div className="overflow-hidden w-44 h-44 rounded-full bg-light-blue-100 border-8 border-white">
                        <img src="./../../src/assets/emoji/image 2.png" className="h-100 w-100 object-cover"/>
                    </div>
                    <div style={{borderRadius:"3rem 3rem 3rem 0"}} className="absolute top-1/3 left-36 bg-green-800 text-white font-thin px-2 typing-container1">
                    <div>How ?</div>
                    </div>
                </div>
            </div>

            <div className="hidden absolute top-4 left-80 md:flex justify-center items-center rounded-full overflow-hidden w-44 h-44 bg-purple-200 border-8 border-white moveAnimation2">
                <img src="./../../src/assets/emoji/image 3.png" className="h-100 w-100 object-cover"/>
            </div>

            <div className="hidden lg:block absolute bottom-4 right-1/2">
                <div className="relative ">
                    <div className="overflow-hidden w-44 h-44 rounded-full bg-light-blue-100 border-8 border-white">
                        <img src="./../../src/assets/emoji/image 4.png" className="h-100 w-100 object-cover"/>
                    </div>
                    <div style={{borderRadius:"3rem 3rem 0 3rem"}} className="absolute bottom-6 right-28 text-nowrap bg-blue-700 text-white font-thin px-4 typing-container2">
                    <div>That&apos;s it Sir.</div>
                    </div>
                </div>
            </div>

            <div className="hidden absolute top-6 left-1/2 lg:flex justify-center items-center rounded-full overflow-hidden w-44 h-44 bg-deep-purple-300 border-8 border-white moveAnimation4">
                <img src="./../../src/assets/emoji/image 5.png" className="h-100 w-100 object-cover"/>
            </div>

            <div className="absolute top-32 right-80 z-10">
                <div className="relative">
                    <div className="overflow-hidden w-44 h-44 rounded-full bg-orange-400 border-8 border-white">
                        <img src="./../../src/assets/emoji/image 6.png" className="h-100 w-100 object-cover"/>
                    </div>
                    <div style={{borderRadius:"3rem 3rem 3rem 0"}} className="absolute top-4 left-20 text-nowrap bg-deep-purple-600 text-white font-thin px-4 typing-container3">
                    <div>Hey Thanks</div>
                    </div>
                </div>
            </div>

            <div className="absolute top-8 right-32 flex justify-center items-center rounded-full overflow-hidden w-44 h-44 bg-green-200 border-8 border-white moveAnimation3">
                <img src="./../../src/assets/emoji/image 7.png" className="h-100 w-100 object-cover"/>
            </div>

            <div className="absolute bottom-20 -right-4">
                <div className="relative ">
                    <div className="overflow-hidden w-44 h-44 rounded-full bg-blue-300 border-8 border-white">
                        <img src="./../../src/assets/emoji/image 8.png" className="h-100 w-100 object-cover"/>
                    </div>
                    <div  style={{borderRadius:"3rem 3rem 0 3rem"}} className="absolute bottom-6 right-32 text-nowrap text-white font-thin bg-orange-800 px-2 typing-container4">
                        <div>
                            That&apos;s Awesome
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
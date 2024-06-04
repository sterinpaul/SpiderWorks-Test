import { Avatar, Button } from "@material-tailwind/react"
import { FiSearch } from "react-icons/fi"
import { MdLightbulbOutline, MdKeyboardArrowDown } from "react-icons/md"
import { PiChatsLight } from "react-icons/pi";

const discussHistory = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        question: "What are the key principles of coding?",
        responseCount: 12
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        question: "How does guide facilitate accurate medical billing?",
        responseCount: 32
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Laurent Perrier",
        question: "How does guide facilitate accurate medical billing?",
        responseCount: 20
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Michael Levi",
        question: "How often is the guide updated?",
        responseCount: 2
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        question: "What is the purpose of modifiers in coding?",
        responseCount: 12
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        question: "What are the differences between and ICD codes?",
        responseCount: 42
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        question: "What is the significance of Level II codes in CPT?",
        responseCount: 32
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Akhil Joy",
        question: "How does guide handle telehealth services?",
        responseCount: 32
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Sruthi PP",
        question: "How are codes categorized within the guide?",
        responseCount: 32
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Anna Chakko",
        question: "What are the implications of incorrect coding?",
        responseCount: 32
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Abhinav KS",
        question: "What is the purpose of the guide?",
        responseCount: 32
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Rotta karuma",
        question: "How are  codes organized within the guide?",
        responseCount: 32
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Kiger",
        question: "What is the role of modifiers?",
        responseCount: 32
    },
];

export const DiscussionList = () => {
    return (
        <div className="flex flex-col justify-center items-stretch w-100">
            <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm break-words">LATEST DISCUSSIONS AS OF 
                    <span className="w-4 h-2 mx-1 px-3 bg-red-800"></span> 
                    <span className="font-bold">MARCH 12 2024</span>
                </p>
                <Button color="light-blue" className="bg-light-blue-200 text-gray-900 flex rounded-full items-center gap-1">
                    <MdLightbulbOutline className="w-4 h-4" />
                    <p className="text-nowrap">ALL TOPICS</p>
                    <MdKeyboardArrowDown className="w-5 h-5" />
                </Button>

            </div>
            <div className="relative my-8">
                <input className="pl-4 rounded-full border h-12 w-full p-2 border-blue-gray-700 placeholder:text-gray-600" placeholder="Search Topics" />
                <FiSearch className="w-10 h-10 absolute top-1 right-1 p-2 text-black rounded-full" />
            </div>
            <div>
                {discussHistory.map((single, index) => {
                    return (
                        <div key={index} className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-gray-300 py-3">
                            <div className="flex items-center w-full md:w-100 gap-2">
                                <Avatar src={single.img} />
                                <div className="text-left">
                                    <p className="text-md">
                                        {single.question}
                                    </p>
                                    <p className="text-sm text-gray-600">Posted by {single.name}</p>
                                </div>
                            </div>
                            <div className="flex self-start md:justify-between gap-2 sm:flex-col lg:flex-row">
                                <button className="hover:shadow-lg hover:text-pink-900 w-36 shadow-black text-nowrap p-2 bg-purple-50 font-normal text-sm rounded-full flex gap-1 items-center justify-center flex-nowrap text-gray-800">
                                    <PiChatsLight className="w-5 h-5 text-pink-500"/>
                                    {single.responseCount} RESPONSES
                                </button>
                                <button className="hover:shadow-lg text-white bg-black text-sm capitalize font-normal text-nowrap rounded-md p-2">View Answer</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className="w-32 hover:text-pink-900 hover:shadow-lg bg-white border border-blue-gray-800 py-1 px-2 rounded-full capitalize mt-12">Load More</button>
        </div>
    )
}
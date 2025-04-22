import { HERO_CONTENT } from "../../constants"
import profilePic from "../../assets/kevinRushProfile.png"
import {motion} from "motion/react"

export const Home = () => {
    return (
        <div className="border-b border-neutral-900 min-h-screen pt-12 lg:pt-24 px-4 lg:px-14">

            <div className="flex flex-wrap w-full ">
                {/* Left: Hero Content */}
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-30 ">
                        <h1 className="font-inter pb-16 text-6xl md:text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl" >
                            Sachin Karki
                        </h1>
                        <span className="font-inter bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-4xl tracking-tight text-transparent mb-6">
                            Full Stack Developer
                        </span>
                        <p className="font-inter max-w-xl font-light tracking-tighter text-base md:text-lg text-neutral-300">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>

                {/* Right: Profile Image */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <img 
                        src={profilePic} 
                        alt="Sachin Karki" 
                        className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    )
}

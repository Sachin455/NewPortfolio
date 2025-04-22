import aboutImg from "../../assets/about.jpg"
import { ABOUT_TEXT } from "../../constants"
import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <RevealOnScroll>
            <h1 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500 px-2">
                    Me
                </span>
            </h1>

            <div className="flex flex-wrap items-center">
                {/* Left Image */}
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="about" />
                    </div>
                </div>

                {/* Right Text */}
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-start text-center lg:text-left">
                        <p className="font-inter max-w-xl text-lg leading-relaxed text-neutral-300">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </div>
    )
}


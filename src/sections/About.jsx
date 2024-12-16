import Globe from "react-globe.gl"
import Button from '../components/Button'
import { useState } from "react"


const About = () => {
    const [hascopied, setHascopied] = useState(false)

    const handleCopy = ()=>{
        navigator.clipboard.writeText('iamkafeelahmedch@gmail.com')
        setHascopied(true)
        setTimeout(() => {
            setHascopied(false)
        }, 2000);
    }

    



    return (
        <section id='about' className="c-space my-20 " >
            <div className="grid xl:grid-rows-6 md:grid-cols-2 xl:grid-cols-3 grid-cols-1 h-full gap-5">

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <p className="grid-headtext">Hi! I&apos;m Kafeel</p>
                        <p className="grid-subtext">With An year of experience, I have my skills in frontend and backend development, with a focus on animated 3D websites. </p>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid 2" className="w-full sm:w-[276px] h-fit object-contain" />
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">I am specialized in Javascript/Typescript wit a focus on React and Next.js ecosystems.</p>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-evenly items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotely across most timezones.</p>
                            <p className="grid-subtext">I&apos;m based in Pakistan, with remotely availabe to the whole world.</p>
                            <Button name={'Contact Me'} isBeam containerClass='w-full mt-10' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid 3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My passion for Coding</p>
                            <p className="grid-subtext">I love creating unique designs and solving problems through Coding. It not just a profession for me but A Passion.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid 4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hascopied?'/assets/tick.svg':'/assets/copy.svg'} alt="copy" />
                                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">iamkafeelahmedch@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
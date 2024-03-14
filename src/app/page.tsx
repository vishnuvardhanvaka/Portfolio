"use client";
import { Github, Linkedin, Twitter, BrainCircuit, CodeXml, Bot, Cloud, Link } from 'lucide-react';
import { ReactTyped } from "react-typed";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from '../../public/aiCircute.json'

// import animation from '/aiCircute.json'
export default function portfolio() {
    const [menuOpened, setMenuOpened] = useState(false)
    const handleCVDownload = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = "/vishnu_resume_updated.pdf";
        downloadLink.download = "Vishnu_Resume.pdf";
        downloadLink.click();
    };
    function contactMe() {

    }


    return (

        <div className="w-full h-full lg:px-20 text-white">
            <nav className="bg-[#1c1c30] sticky top-0 z-40 border-[#4d4d5d] border-b-[1px]">
                <div className="container px-6 py-4  mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            {/* <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" /> */}
                            <h1 className="text-2xl font-bold">Portfolio.</h1>
                        </a>
                        <div onClick={(e) => { setMenuOpened(!menuOpened) }} className="flex md:hidden">
                            <div className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                {!menuOpened ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>


                                ) : (
                                    <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </div>
                        </div>


                    </div>
                    {menuOpened && (
                        <div className="text-lg font-bold absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                            <div className="flex flex-col md:flex-row">
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#hero-section' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Home</a>
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#services-section' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Services</a>
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#projects-section' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Portfolio</a>
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#about-section' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">About</a>
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#contact-section' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Contact</a>
                            </div>
                        </div>
                    )}


                    <div className="hidden lg:flex text-lg font-bold absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                        <div className="flex flex-col md:flex-row">
                            <a href='#hero-section' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Home</a>
                            <a href='#services-section' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Services</a>
                            <a href='#skills-section' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Skills</a>
                            <a href='#projects-section' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Projects</a>
                            <a href='#about-section' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">About</a>
                            <a href='#contact-section' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero section */}
            <div id="hero-section" className="container px-6  mx-auto lg:h-[90vh] flex items-center ">
                <div className="items-center lg:flex">
                    <div className="flex lg:hidden items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className={`rounded-[100%] w-[80%] h-[80%] lg:max-w-3xl`} src="/squarePic.png" alt="Catalogue-pana.svg" />
                    </div>
                    <div className="w-full ">
                        <div className="">
                            <h1 className="text-2xl font-semibold text-center lg:text-left md:text-3xl my-4">Hi, Myself</h1>
                            <h1 className="text-2xl font-bold text-center lg:text-left md:text-5xl my-4">Vishnu Vardhan Gowd</h1>
                            <h1 className="text-2xl font-semibold text-center lg:text-left md:text-4xl my-4">And I'm a  <br className="md:hidden" />
                                <span className="text-blue-500">
                                    <ReactTyped
                                        strings={[
                                            "<span style='color: #33ff57'> ML Wizard</span>",
                                            "<span style='color: #ff5733'> AI Architect</span>",
                                            "<span style='color: #5a85fb'> FullStack Developer</span>"
                                        ]}
                                        typeSpeed={50}
                                        backSpeed={40}
                                        loop
                                        cursorChar="<span style='color: inherit'>|</span>"
                                    />
                                </span>
                            </h1>
                            <p className="my-6 text-center lg:text-left">Passionate tech enthusiast with expertise in <span className="font-bold text-md ">ML</span>, <span className="font-bold text-md">Deep Learning</span> & <span className="font-bold text-md ">Fullstack development</span>. Diving into the depths of data to uncover hidden treasures. Crafting intelligent solutions for a smarter world.</p>
                            <div className=" flex my-4 justify-center lg:justify-start">

                                <a href="https://github.com/vishnuvardhanvaka/" target="_blank" className="mx-4 border-2 border-blue-500 rounded-[100%] text-blue-500 flex items-center">
                                    <Github className="fill-blue-500 w-6 h-6 m-2 text-blue-500 " />
                                </a>
                                <a href="https://www.linkedin.com/in/vishnuvardhanvaka/" target="_blank" className="mx-4 border-2 border-blue-500 rounded-[100%] text-blue-500 flex items-center">
                                    <Linkedin className="fill-blue-500 w-6 h-6 m-2 text-blue-500 " />
                                </a>
                                <a href="https://twitter.com/vishnuvaka1" target="_blank" className="mx-4 border-2 border-blue-500 rounded-[100%] text-blue-500 flex items-center">
                                    <Twitter className="fill-blue-500 w-6 h-6 m-2 text-blue-500 " />
                                </a>
                            </div>
                            <button
                                onClick={(e) => { handleCVDownload() }}
                                className="w-[90%] md:w-[50%] mx-auto flex justify-center lg:mx-0 lg:block px-5 py-3 my-6 text-sm bg-blue-600 rounded-3xl lg:w-auto hover:bg-blue-500">Download CV</button>

                            {/* <button className="w-full px-5 py-3 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-3xl lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Download CV</button> */}
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className={`rounded-[100%] w-[80%] h-[80%] lg:max-w-3xl`} src="/squarePic.png" alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>


            {/* My Services */}
            <div id="services-section" className="w-full lg:h-[100vh] items-center flex-col py-16 px-3 mx-auto md:px-4 ">
                <h1 className="text-center lg:text-left text-4xl lg:text-3xl mb-4 lg:mb-0 font-bold">My <span className="text-[#5a85fb]">Services</span></h1>
                <div className="h-full items-center flex w-full">
                    <div className="w-full grid lg:grid-cols-3 ">

                        <div className=" lg:mx-6 rounded-3xl bg-[#494949] bg-opacity-20 my-2 border-blue-500">
                            <CodeXml
                                className="text-center text-blue-500 mx-auto w-24 h-24"
                            />
                            <h1 className="text-2xl font-bold text-center lg:text-center md:text-3xl my-4">Web Development</h1>
                            <p className="text-center px-6 lg:px-4 text-[1rem]">Whether it's building dynamic and scalable web applications, creating sleek and responsive user interfaces with React and NextJs, designing robust backend systems with Django and FastAPI, or optimizing database performance with MongoDB and MySQL, I've got you covered. Let's collaborate and bring your vision to life on the web!</p>
                            <button className="mx-auto flex lg:block px-8 py-3 my-6 text-sm bg-blue-600 rounded-3xl lg:w-auto hover:bg-blue-500">Read More</button>

                        </div>
                        <div className=" lg:mx-6 rounded-3xl bg-[#494949] bg-opacity-20 my-2 border-blue-500">
                            <Bot
                                className="text-center text-blue-500 mx-auto w-24 h-24"
                            />
                            <h1 className="text-2xl font-bold text-center lg:text-center md:text-3xl my-4">Machine Learning</h1>
                            {/* <p className="text-center px-6 lg:px-4 text-[1rem]">From predictive modeling using regression to image classification with convolutional neural networks, I leverage advanced algorithms to drive impactful solutions. With expertise in PyTorch for deep learning, I excel in developing robust solutions using convolutional neural networks for image classification and processing, deep neural networks, and Generative Adversarial Networks (GANs). In machine learning</p> */}
                            <p className="text-center px-6 lg:px-4 text-[1rem]">Skilled in leveraging advanced algorithms for impactful solutions, from supervised predictive modeling using regression to unsupervised classification with DBSCAN clustering. With expertise in PyTorch, I excel in developing robust solutions using deep learning techniques like CNNs for image processing, DNNs, and GANs.</p>
                            <button className="mx-auto flex lg:block px-8 py-3 my-6 text-sm bg-blue-600 rounded-3xl lg:w-auto hover:bg-blue-500">Read More</button>

                        </div>
                        <div className=" lg:mx-6 rounded-3xl bg-[#494949] bg-opacity-20 my-2 border-blue-500">
                            <Cloud
                                className="text-center text-blue-500 mx-auto w-24 h-24"
                            />
                            <h1 className="text-2xl font-bold text-center lg:text-center md:text-3xl my-4">DevOps & Cloud</h1>
                            <p className="text-center px-6 lg:px-4 text-[1rem]">Automating processes from codebase management to sprint coordination for efficient project delivery with azure DevOps. From VPC setup to secure backups, I ensuring smooth serverless deployments and effective load balancing for increased traffics with optimal performance and robustness.</p>
                            <button className="mx-auto flex lg:block px-8 py-3 my-6 text-sm bg-blue-600 rounded-3xl lg:w-auto hover:bg-blue-500">Read More</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Latest Projects */}
            <div id="projects-section" className="w-full py-16 px-3 mx-auto md:px-4 ">
                <h1 className="text-center text-4xl lg:text-5xl mb-4 lg:mb-10 font-bold">Latest <span className="text-[#5a85fb]">Projects</span></h1>
                <div className="h-full items-center flex w-full justify-center">
                    <div className="w-full grid lg:grid-cols-3 justify-center mx-auto">
                        <img className={`rounded-3xl mx-auto w-[93%] lg:max-w-3xl hover:cursor-pointer`} src="/automation.png" alt="Catalogue-pana.svg" />
                        <img className={`rounded-3xl mx-auto w-[93%] lg:max-w-3xl hover:cursor-pointer`} src="/automation.png" alt="Catalogue-pana.svg" />
                        <img className={`rounded-3xl mx-auto w-[93%] lg:max-w-3xl hover:cursor-pointer`} src="/automation.png" alt="Catalogue-pana.svg" />

                    </div>
                </div>
            </div>

            {/* About Me */}
            <div id="about-section" className="w-full lg:h-[100vh] px-3 mx-auto md:px-4 items-center justify-center flex">
                <div className="mx-auto grid lg:grid-cols-2">
                    <Lottie className="w-auto mx-auto my-4 rounded-3xl" animationData={animationData} loop={true} />

                    <div className="w-full flex flex-col justify-center">
                        <h1 className={`text-4xl lg:text-5xl text-center lg:text-left  font-bold py-2`}>About <span className="text-[#5a85fb]">Me</span> </h1>
                        <h1 className={`md:text-2xl sm:text-3xl text-center lg:text-left text-xl  font-bold mb-4 lg:mb-8`}>AI & FullStack developer</h1>
                        <p className=' lg:text-md text-center lg:text-left p-0 m-0 '>Hey there! I'm a curious learner on a journey to continuously enhance my skills. With a knack for creativity and critical thinking, I thrive on implementing innovative solutions. My eagerness to explore new topics independently fuels my curiosity, while my adaptability ensures I keep pace with a rapidly changing environment. Collaborating seamlessly with my team, I'm always ready to evolve and achieve success together. I'm eager to embark on new challenges, where I'm certain my skills will flourish.</p>
                        <p className={`text-lg text-center lg:text-left mt-2 font-bold `}>Let's create something extraordinary together!</p>
                        {/* <a href='/live' className="bg-red-500  w-[200px] text-center rounded-md mx-auto md:mx-0 font-medium my-6 py-3">Live</a> */}
                        {/* <div className="mx-auto my-3 flex w-[90%] md:w-[50%] lg:w-full">
                            <button className="w-full px-6 py-2 mt-6 text-md bg-blue-600 rounded-3xl lg:w-auto hover:bg-blue-500">Read More</button>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Contact Me */}
            <div id="contact-section" className="w-full py-16 px-3 mx-auto md:px-4 flex-col justify-center">
                <h1 className="text-center text-4xl lg:text-5xl mb-4 lg:mb-4 font-bold">Contact <span className="text-[#5a85fb]">Me</span></h1>
                <div className="w-full lg:w-[50%] lg:mx-auto">
                    <div className="h-full items-center flex flex-col w-full justify-center px-2 lg:px-4">
                        <div className="w-full lg:grid lg:grid-cols-2 gap-x-4 justify-center mx-auto">
                            <input
                                type="text"
                                className="my-4 w-full bg-gray-700 rounded-lg py-3 px-2 pl-4 border-gray-600 placeholder-gray-400 focus:placeholder-gray-500  bg:border-transparenttext-gray-300 focus:outline-none "
                                placeholder="Full Name"
                            />
                            <input
                                type="text"
                                className="my-4 w-full bg-gray-700 rounded-lg py-3 px-2 pl-4 border-gray-600 placeholder-gray-400 focus:placeholder-gray-500  bg:border-transparenttext-gray-300 focus:outline-none "
                                placeholder="Email Address"
                            />
                            <input
                                type="text"
                                className="my-4 w-full bg-gray-700 rounded-lg py-3 px-2 pl-4 border-gray-600 placeholder-gray-400 focus:placeholder-gray-500  bg:border-transparenttext-gray-300 focus:outline-none"
                                placeholder="Mobile Number"
                            />
                            <input
                                type="text"
                                className="my-4 w-full bg-gray-700 rounded-lg py-3 px-2 pl-4 border-gray-600 placeholder-gray-400 focus:placeholder-gray-500  bg:border-transparenttext-gray-300 focus:outline-none"
                                placeholder="Email Subject"
                            />
                        </div>
                        <textarea
                            placeholder="Your message"
                            className=" w-full lg:w-full max-h-72 min-h-40 mx-4 h-64 bg-gray-700 rounded-lg py-3 px-2 pl-4 border-gray-600 placeholder-gray-400 focus:placeholder-gray-500  bg:border-transparenttext-gray-300 focus:outline-none"
                        >
                        </textarea>
                        <p className="mt-3 text-xs text-gray-400">Let's build a world together.</p>
                        <button
                            onClick={(e) => { contactMe() }}
                            className="w-[90%] md:w-[50%] mx-auto flex justify-center lg:mx-0 lg:block px-5 py-3 my-6 text-sm bg-blue-600 rounded-3xl lg:w-auto hover:bg-blue-500"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>





        </div >
    )
}
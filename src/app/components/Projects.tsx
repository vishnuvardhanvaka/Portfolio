"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiFastapi,
    SiPostgresql,
    SiPython,
    SiPytorch,
    SiGooglecolab,
    SiTelegram,
    SiMongodb,
    SiAlwaysdata,
    SiNodedotjs

} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { FaAws } from "react-icons/fa6";
import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";

export default function Projects() {
    const projects = [
        {
            title: "Pluto-AI ChatBot",
            tech: [ SiNextdotjs, SiNodedotjs, SiTailwindcss, SiAlwaysdata],
            techNames:['Pytorch','Colab','Deep Learning','Gen.Ai'],
            link: "https://v3pluto.vercel.app/",
            cover: "/pluto_ai_chatbot.png",
            background: "bg-green-500",
        },
        {
            title: "Satillite map to Aerial (GAN)",
            tech: [SiPytorch, SiGooglecolab, BiNetworkChart, SiAlwaysdata],
            techNames:['Pytorch','Colab','Deep Learning','Gen.Ai'],
            link: "https://github.com/vishnuvardhanvaka/pix2pix-GAN-satillite-view-to-street-view",
            cover: "/aerialView2.png",
            background: "bg-yellow-500",
        },
        {
            title: "DocLocker",
            tech: [SiPython, SiTelegram, SiMongodb, FaAws],
            techNames:['Python','Telegram','MongoDB','AWS'],
            link: "https://t.me/DocLocker_bot/",
            cover: "/docLocker.png",
            background: "bg-indigo-500",
        },
        {
            title: "Brain Tumor Classification (CNN/VGG)",
            tech: [SiPytorch, SiGooglecolab, BiNetworkChart, SiAlwaysdata],
            techNames:['Pytorch','Colab','Deep Learning','Gen.Ai'],
            link: "https://github.com/vishnuvardhanvaka/Brain-Cancer-Detection-Classification",
            cover: "/brainTumorDetection.png",
            background: "bg-blue-400",
        },
        
    ]
    return (
        <div className="py-10 p-5 sm:p-0">
            <h1 className="text-center text-4xl lg:text-5xl mb-5 lg:mb-10 font-bold">Star <span className="text-[#5a85fb]">Projects</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:px-20">
                {projects.map((project, index) => {
                    return (
                            <Link href={project.link} target="_blank" key={index}>
                                <div className={cn(
                                    "p-2 rounded-md",
                                    project.background
                                )}>
                                    <DirectionAwareHover
                                        imageUrl={project.cover}
                                        className="w-full space-y-5 cursor-pointer"
                                    >
                                        <div className="space-y-5">
                                            <h1 className="text-2xl font-bold">{project.title}</h1>
                                            <div className="flex items-center gap-5">
                                                {project.tech.map((Icon, index) => (

                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger>
                                                                <Icon
                                                                    key={index}
                                                                    className="w-8 h-8 z-30 hover:cursor-pointer"
                                                                />
                                                            </TooltipTrigger>
                                                            <TooltipContent className="z-30">
                                                                <p>{project.techNames ? project.techNames[index] : 'Machine Learning'}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                    // <AnimatedTooltip items={
                                                    //     [{
                                                    //         id: index,
                                                    //         name: project.title,
                                                    //         Icon: Icon,

                                                    //     }]
                                                    // } />
                                                ))}
                                            </div>
                                        </div>
                                    </DirectionAwareHover>

                                </div>
                            </Link>
                    )
                })}

            </div>
        </div>
    )
}
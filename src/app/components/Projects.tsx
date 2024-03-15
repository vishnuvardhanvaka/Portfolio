"use client";
import { cn } from "@/lib/utils";
import Link from 'next/link'
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiFastapi,
    SiPostgresql,
    SiMongodb,
    SiAlwaysdata

} from "react-icons/si";
import { FaCloud } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { IconType } from 'react-icons'
import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";

export default function Projects() {
    const projects = [
        {
            title: "E-Learning Platform",
            tech: [SiNextdotjs, SiPostgresql, SiFastapi, SiTailwindcss],
            link: "http://localhost:3000/",
            cover: "/portfolio.png",
            background: "bg-indigo-500",
        },
        {
            title: "E-Learning Platform",
            tech: [SiNextdotjs, SiPostgresql, SiFastapi, SiTailwindcss],
            link: "http://localhost:3000/",
            cover: "/portfolio.png",
            background: "bg-green-500",
        },
        {
            title: "E-Learning Platform",
            tech: [SiNextdotjs, SiPostgresql, SiFastapi, SiTailwindcss],
            link: "http://localhost:3000/",
            cover: "/portfolio.png",
            background: "bg-blue-400",
        },
        {
            title: "E-Learning Platform",
            tech: [SiNextdotjs, SiPostgresql, SiFastapi, SiTailwindcss],
            link: "http://localhost:3000/",
            cover: "/portfolio.png",
            background: "bg-pink-400",
        },
    ]
    return (
        <div className="py-10 p-5 sm:p-0">
            <h1 className="text-center text-4xl lg:text-5xl mb-5 lg:mb-10 font-bold">Star <span className="text-[#5a85fb]">Projects</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:px-5">
                {projects.map((project, index) => {
                    return (
                        <Link href={project.link} key={index}>
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
                                                <Icon key={index} className="w-8 h-8" />
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
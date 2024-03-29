"use client"
import { HoverEffect } from "../../components/ui/card-hover-effect";
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



export default function Skills() {
    const skills = [
        {
            text: "ML/DL",
            Icon: LuBrainCircuit,
        },
        {
            text: "Gen.Ai",
            Icon: SiAlwaysdata,
        },
        {
            text: "FastAPI",
            Icon: SiFastapi,
        },
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },
        {
            text: "Mongodb",
            Icon: SiMongodb,
        },
        {
            text: "Postgres",
            Icon: SiPostgresql,
        },
        {
            text: "Cloud",
            Icon: FaCloud,
        }

    ]
    return (
        <div  className="max-w-5xl mx-auto px-4 lg:px-8 mt-6">
            <h1 className="text-center text-4xl lg:text-5xl lg:mb-10 font-bold">Tech<span className="text-[#5a85fb]"> Skills</span></h1>
            <HoverEffect items={skills} />
        </div>
    )
}

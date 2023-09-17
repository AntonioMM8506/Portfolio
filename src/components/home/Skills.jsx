import React, { useState } from "react";
import Image from "next/image";
import imageLoader from "../ui/ImageLoader";

const Skills = () => {
    const baseUrl = process.env.BASE_URL || "";

    const slides = [
        {url: `${baseUrl}media/pictures/carousel/JS.jpg`},
        {url: `${baseUrl}media/pictures/carousel/NextJS.jpg`},
        {url: `${baseUrl}media/pictures/carousel/ReactJS.jpg`},
        {url: `${baseUrl}media/pictures/carousel/TailwindCSS.jpg`},
        {url: `${baseUrl}media/pictures/carousel/Git.jpg`},
        {url: `${baseUrl}media/pictures/carousel/GitHubActions.jpg`},
        {url: `${baseUrl}media/pictures/carousel/MySQL.jpg`},
        {url: `${baseUrl}media/pictures/carousel/Docker.jpg`},
    ];

    return(
        <div>
            <div className="container py-4 flex flex-col items-center text-center">
                <h3 className="text-center font-roboto text-blue-700 font-semibold text-3xl">
                    Professional Skills
                </h3>
                <div className="flex flex-wrap max-w-[800px] justify-center">
                    {slides.map((slide, index) => {
                        return(
                                <Image className="px-2 py-3 shadow-lg"
                                    src={slide.url}
                                    loader={imageLoader}
                                    width="150"
                                    height="150"
                                    quality="60"
                                    alt='Table'
                                />
                        )
                    })}
                </div>
            </div>
            <br></br>
        </div>
        
    )

}//End of Skills

export default Skills;

import React, { useState } from "react";
import ContentfulImage from "../ui/ContentfulImage";

const Skills = () => {
    const slides = [
        {url: "media/pictures/carousel/JS.jpg"},
        {url: "media/pictures/carousel/NextJS.jpg"},
        {url: "media/pictures/carousel/ReactJS.jpg"},
        {url: "media/pictures/carousel/TailwindCSS.jpg"},
        {url: "media/pictures/carousel/Git.jpg"},
        {url: "media/pictures/carousel/GitHubActions.jpg"},
        {url: "media/pictures/carousel/MySQL.jpg"},
        {url: "media/pictures/carousel/Docker.jpg"},
    ];

    return(
        <div className="flex flex-wrap max-w-[800px] justify-center">
        {slides.map((slide, index) => {
            return(
                    <ContentfulImage className="px-2 py-3 shadow-lg"
                        src={slide.url}
                        width="150"
                        height="150"
                        alt='Table'
                    />
            )
        })}
        </div>
    )

}//End of Skills

export default Skills;

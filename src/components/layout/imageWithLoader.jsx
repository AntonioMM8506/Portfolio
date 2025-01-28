import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const ImageWithLoader = ({ src, alt, className }) => {
    const [loading, setLoading] = useState(true);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="relative" ref={ref}>
        {loading && inView && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )}
        {inView && (
            <img
            src={src}
            alt={alt}
            className={`${className} ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
            onLoad={() => setLoading(false)}
            />
        )}
        </div>
    );
};

export default ImageWithLoader;
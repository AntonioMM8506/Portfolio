import Image from "next/image";
import React, { useState } from "react";

const ImageWithLoader = ({ src, alt, className, width, height }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative" style={{ width, height }}>
        {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )}
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`${className} ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
            onLoadingComplete={() => setLoading(false)}
        />
        </div>
    );
};

export default ImageWithLoader;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import imageLoader from "../ui/ImageLoader";

const CopyEmail = () => {
    const email = "amaldonadodev@protonmail.com";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

    // Function to copy email to clipboard
    const copyToClipboard = () => {
        navigator.clipboard
        .writeText(email)
        .then(() => {
            alert("Email copied to clipboard!"); // Provide user feedback
        })
        .catch((err) => {
            console.error("Failed to copy email: ", err);
            alert("Failed to copy email to clipboard.");
        });
    };

    return (
        <div className="flex gap-4 justify-center">
        <img 
            src={`${baseUrl}media/pictures/logo/clipboard.png`}
            alt="Copy email to clipboard"
            title="Copy email to clipboard"
            onClick={copyToClipboard}
            style={{
            cursor: "pointer",
            width: "20px",
            height: "20px",
            }}
        />
        <span onClick={copyToClipboard} > {email} </span>
        </div>
    );
};

export default CopyEmail;

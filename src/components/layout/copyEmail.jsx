import React from "react";
import ImageWithLoader from "../layout/imageWithLoader";
import { useRouter } from "next/router";

const CopyEmail = () => {

    const router = useRouter();
    const currentUrl = typeof(window) != "undefined" ? window.location.href : "";
    console.log(currentUrl);
    const baseUrl = currentUrl.toString().includes("amaldonado") ? process.env.NEXT_PUBLIC_BASE_URL  || "" : "http://localhost:1234/";
    
    const email = "amaldonadodev@protonmail.com";

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
        <ImageWithLoader 
            src={`${baseUrl}media/pictures/logo/clipboard.png`}
            alt="Copy email to clipboard"
            title="Copy email to clipboard"
            onClick={copyToClipboard}
            width="20"
            height="20"
            quality="60"
            cursor= "pointer"
            className="object-cover"
        />
        <span onClick={copyToClipboard} > {email} </span>
        </div>
    );

};//End of CopyEmail

export default CopyEmail;

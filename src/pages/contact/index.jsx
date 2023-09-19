import React from "react";
import { useState } from "react";
import Modal from "./modal";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [modalState, setModalState] = useState(false);

    async function handleSubmit(event){
        event.preventDefault();
        setLoading(true);
        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value)
        }

        //console.log(data);

        const response = await fetch("/api/contact", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if(response.ok){
            //console.log("Message send sucesfully");
            //Restore the button so it can be used again
            setLoading(false);
            //set the flag to true so the modal can be displayed
            setModalState(true);
            //Reset the whole Form after a succesful message
            event.target.name.value = "";
            event.target.email.value = "";
            event.target.message.value = "";
        };
    
        if(!response.ok){
            //console.error("Error sending message")
            setLoading(false);
            //const error = await response.json(); 
        }

    }//End of handleSubmit

    return(
        <>
            { /*<div className="w-full h-scr flex jusify-center items-center"></div>*/ }
            <div className="mx-auto max-w-2xl px-2 my-10">
                <h1 className="text-center font-roboto text-blue-700 font-semibold text-3xl">
                    Contact me
                </h1>
                <span className="font-roboto py-2 text-lg">
                    Got a question, recommendation or just want to talk? I'd love to hear from you. 
                    Send me a message and I'll respond as soon as soon as possible. 
                </span>
                <form onSubmit={handleSubmit}>
                    <div className="w-full flex flex-col py-2">
                        <label htmlFor="name" className="font-bold font-roboto text-lg text-gray-800">
                            Name *
                        </label>
                        <input 
                            required 
                            type="text" 
                            id="name" 
                            autoComplete="off" 
                            className="p-4 bg-gray-50 border border-gray-100"
                        />
                    </div>
                    <br></br>

                    <div className="w-full flex flex-col">
                        <label htmlFor="email" className="font-bold font-roboto text-lg text-gray-800">
                            Email *
                        </label>
                        <input 
                            required
                            //pattern="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
                            type="email" 
                            id="email" 
                            autoComplete="off" 
                            className="p-4 bg-gray-50 border border-gray-100"
                        />
                    </div>
                    <br></br>

                    <div>
                        <label htmlFor="message" className="font-bold font-roboto text-lg text-gray-800">
                            Message *
                        </label>
                        <textarea 
                            required maxLength={500} 
                            rows={4} 
                            name="message" 
                            placeholder="How can I help you?" 
                            className="w-full p-4 bg-gray-50 border border-gray-100"
                        />
                    </div>
                    <br></br>
                    <div className="flex justify-center">
                        <button 
                            type="submit" 
                            className="px-4 py-2 w-60 rounded-md bg-blue-900 hover:bg-cyan-600 disabled:bg-gray-400 font-roboto disabled:text-gray-100 text-white text-xl font-medium"
                            disabled= {loading}
                        >
                            Send
                        </button>
                    </div>

                </form>
            </div>
            
            {/*Modal window*/}
            <div>
                { modalState && <Modal setModalState={setModalState}/>}
            </div>

        </>
    );

}//End of Contact

export default Contact;

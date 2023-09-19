import Image from "next/image";
import imageLoader from "@/components/ui/ImageLoader";
import { Button } from "@mui/material";

const Modal = props => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

    return(
        <>
            <div className="fixed inset-0 opacity-25 bg-black"></div>
            <div className="fixed inset-0 flex justify-center items-center z-10">
                <div className="bg-white px-4 py-4 rounded-md">
                    <div className="flex justify-center">
                        <Image
                            src={`${baseUrl}media/pictures/Various/check_message_full.png`}
                            loader={imageLoader}
                            width="120"
                            height="120"
                            quality="60"
                            alt='Logo'
                        />
                    </div>
                    <div>
                        <span className="font-roboto text-lg">
                            Message received. I'll reach out soon!
                        </span>
                        
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={() => props.setModalState(false)}>
                            Ok
                        </Button>
                    </div>

                </div>
            </div>
        </>
    )

}//End of Modal

export default Modal;

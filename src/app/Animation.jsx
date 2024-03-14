import Lottie from "lottie-react";
import animationData from '../../public/aiCircute.json'


export default function Animation(){
    return(
        <div>
            <Lottie className="w-auto mx-auto my-4 rounded-3xl" animationData={animationData} loop={true} />
        </div>
    )
}







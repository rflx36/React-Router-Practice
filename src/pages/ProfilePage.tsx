
import { useParams } from "react-router-dom"

export default function ProfilePage(){
    const params = useParams();
    return (
        <div className="text-white bg-neutral-800 rounded-lg w-80 h-12 m-2 grid place-content-center ">
            <p> Profile Page</p>
            <p> id:{params.profileId} </p>
        </div>
    )
}
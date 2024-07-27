
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <>
            <p>404 Not Found</p>
            <div className="flex w-fit h-max bg-neutral-900 text-white rounded-lg p-2 m-2 flex-col">
                <Link to="/" >Home (Link) </Link>
              
            </div>
        </>
    )
}
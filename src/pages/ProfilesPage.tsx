import { Link, NavLink, Outlet } from "react-router-dom";

export default function ProfilesPage() {
    const profiles = [1, 2, 3, 4, 5];


    return (
        <>
            <div className="w-[calc(100 - 1rem)]  h-20 rounded-md bg-neutral-800 text-white flex items-center justify-center m-2">
                <p className="text-2xl font-bold" >Profiles Page</p>

            </div>
            <div className="flex flex-col gap-2 w-40 mx-auto bg-neutral-800 items-center text-white  rounded-lg p-2">
                {
                    profiles.map((x) => (
                        <NavLink key={x} to={`/profiles/${x}`} className={
                            ({ isActive }) => isActive ? 'text-green-400' : ''
                        }>
                            Profile {x}
                        </NavLink>

                    ))
                }
            </div>
            <Outlet />
        </>
    )
}
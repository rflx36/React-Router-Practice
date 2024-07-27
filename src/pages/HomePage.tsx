import { Link } from "react-router-dom";



function HomePage() {

  return (
    <>
    <p className="text-red-500" >Home page</p>
    <Link to={"/profiles/"}>Profile</Link>
    </>
  )
}

export default HomePage;

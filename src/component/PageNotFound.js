import { NavLink } from "react-router-dom"

const PageNotFound = ()=>{

return (
    <>
           <h2>This Page is not available, please go to home page</h2> 
            <NavLink to="/" className="navlink">Go to Home</NavLink>
    </>


)



}

export default PageNotFound
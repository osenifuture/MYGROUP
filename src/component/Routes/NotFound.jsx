
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";


const NotFound = () => {

   const Navigate = useNavigate()

    useEffect(() => {
        Navigate('/Notfound')

    }, [Navigate])

    return(
      <h3> ooopppps an error occured 404</h3>
    )

}

export default NotFound;
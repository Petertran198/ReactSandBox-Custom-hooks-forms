import {useState} from "react";

//Custom hook to toggle from true to false and vice versa
const useToggle = (initalVal = false) => {
    const [customHook, setCustomHook] = useState(initalVal);
    const toggle = () =>{
        setCustomHook(!customHook);
    }
    //Return customHook as the state AND toggle as the function to change that state when called
    return [customHook, toggle]
}

export default useToggle; 

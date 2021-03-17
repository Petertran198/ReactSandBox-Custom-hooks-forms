import {useState, useEffect} from 'react'


//get the saved values 
const getSavedValue= (key,initalValue) =>{
    //Get whatever object that is stored in this key and convert it from an json string 
    const savedValue = JSON.parse(localStorage.getItem(key));
    //if we were previously on this page and have already saved some key in localstorage 
    // we can return the value of that key if we dont have this every refresh will return initalValue
    if(savedValue){
        return savedValue;
    }

    //if nothing was saved just return the inital value
    //RUNS THE FIRST TIME TO SAVE THE INTIAL VALUE to the variable in the first slot of bracket[]  
    // Example const [name, setName] = useLocalStorage('name','s');     
    //name returns 's'
    //AND WHEN WE CHANGE THE FIRST SLOT DATA [name, ....]
    //we call the useEffect method which sets the KEY and VAlue into LocalStorage
    //KEY AND VALUE
    return initalValue
}


const useLocalStorage = (key, initalValue) => {
    //first time runs the arrow function 
    //after that we manually update the value using what we type in the input field setValue("input here")
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initalValue)
    })

    //Runs everytime the value changes
    //Also runs once when the program starts saving key & value to localStorage
    useEffect(() => {  
        // eslint-disable-next-line react-hooks/exhaustive-deps
        //convert the value to a JSON string obj
        localStorage.setItem(key, JSON.stringify(value))
    }, [value]);

    return [value, setValue]
}

export default useLocalStorage;

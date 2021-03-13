import React from 'react'
import useForm from './useForm' //Hook Pratice 1 
import useLocalStorage from './useLocalStorage' // Hook pratice 2 

//------------- Example 1 useForm-----------------------
// const Form = () => {
//     const [name, setName, resetName] = useForm("");
//     return (
//         <form onSubmit={resetName}>
//             <h1>Your name is.. {name}</h1>
//             <input type="text" value={name} onChange={setName}/>  
//             <button>Submit</button>
//         </form>
//     )
// }



//---------Example 2 custom hook for setting data to local storage -----------------------------
const Form = () =>{
    //inside of name is the value of the key  
    //second slot holds the function which updates the value
    //the first param holds the key
    const [personInfo, setPersonInfo] = useLocalStorage('personInfo', {
        age: "",
        gender: "",
        address: ""
    });
    
    return(
        <form>
            <label for="age">Age</label>
            <input type="text" 
                placeholder="Enter Age" 
                onChange={(e)=> setPersonInfo({...personInfo, age: e.target.value})}
                value={personInfo.age}
            ></input> <br></br>

            <label for="gender">Gender</label>
            <select name="gender" id="gender-select" 
                onChange={(e)=> setPersonInfo({...personInfo, gender: e.target.value})}
            >
                <option value="">--Please choose an option--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select><br></br>

            <label for="address">Address</label>
            <input type="text" 
                placeholder="Enter Address" 
                onChange={(e)=> setPersonInfo({...personInfo, address: e.target.value})}
                value={personInfo.age}
            ></input> <br></br>
            <button>Submit</button>                        
        </form>
    )
}
export default Form

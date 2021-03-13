import {useState} from 'react';

const useForm = (inputText) => {
    const [customhook, setCustomHook] = useState(inputText);
    const setInput = (e) =>{
        setCustomHook(e.target.value)
    }
    const resetInput = (e) =>{
        e.preventDefault();
        setCustomHook("");
    }
    // You can pass in as many functions as u want to return to use
    // customHook is the state, setInput is the function to change the state & resetInput is to clear form field
    return [customhook, setInput, resetInput];
}

export default useForm;
import React, {useState} from 'react'
import useToggle from './useToggle';

const Toggler = () => {
    //Custom hooks
    //holds the state and toggleIsHappy holds the custom toggle function to change that state returned from useToggle.js
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [inLove, toggleInLove] = useToggle(true);

    return (
        <div>
            <h1 onClick={toggleIsHappy}>
                {isHappy ? ":)" : ":(" }
            </h1>

            <h1 onClick={toggleInLove}>
                {inLove ? "<3" : "</3" }
            </h1>
        </div>
    )
}

export default Toggler

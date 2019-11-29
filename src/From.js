import React from 'react';

const From = (props) => {
    return(
        <form className="form" onSubmit={props.getweatheMethod}>
            <input name="city" type="text" placeholder="Enter city name"/>
            <button name="button">Enter</button>
        </form>
    )
}

export default From;
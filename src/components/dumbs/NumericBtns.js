import React from 'react';

export const NumericBtns = (props)=>{
    return (
    <div id='num-btn-container'>
        <button className="btn" onClick={props.appendToScreen} >1</button>
        <button className="btn" onClick={props.appendToScreen}>2</button>
        <button className="btn" onClick={props.appendToScreen}>3</button>
        <button className="btn" onClick={props.appendToScreen}>4</button>
        <button className="btn" onClick={props.appendToScreen}>5</button>
        <button className="btn" onClick={props.appendToScreen}>6</button>
        <button className="btn" onClick={props.appendToScreen}>7</button>
        <button className="btn" onClick={props.appendToScreen}>8</button>
        <button className="btn" onClick={props.appendToScreen}>9</button>
      </div>
    )
}
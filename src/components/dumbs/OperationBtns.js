import React from 'react';

export const OperationBtns = (props)=>{
    return (
        <div id="operation-btn-container">
          <button className="btn op-btn" onClick={props.appendToScreen}>+</button>
          <button className="btn op-btn" onClick={props.appendToScreen}>-</button>
          <button className="btn op-btn" onClick={props.appendToScreen}>*</button>
          <button className="btn op-btn" onClick={props.appendToScreen}>/</button>
          <button className="btn op-btn" onClick={props.clrScr}>C</button>
          <button className="btn op-btn" onClick={props.compute}>=</button>
        </div>
    )
}
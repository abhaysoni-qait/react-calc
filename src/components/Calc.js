import React, { Component } from 'react';
import {OperationBtns} from './dumbs/OperationBtns';
import {NumericBtns} from "./dumbs/NumericBtns";
import {Screen} from './dumbs/Screen';


export class Calc extends Component{

    constructor(){
        super();
        this.result = 0;
        this.que = '';
        this.state = {que:this.que};
    }

    appendToScreen(event){
        // console.log("numeric btn pressed :: ", event.target.innerText);
        // return event.target.innerText;
        this.que += event.target.innerText;
        // console.log( this.que);
        this.updateState();
    }

    updateState(){
        this.setState( {...this.state, que:this.que});
    }

    compute(){
        this.que = eval(this.que);
        this.updateState();
    }

    clearScreen(){
        this.que = "";
        this.updateState();
    }

    render(){

        return (
            <div id="calc">
                <div className="com-heading"><span>Calculator</span></div>
                <Screen c={this.state.que}/>
                <OperationBtns appendToScreen={this.appendToScreen.bind(this)} compute={this.compute.bind(this)} clrScr={this.clearScreen.bind(this)}/>
                <NumericBtns appendToScreen={this.appendToScreen.bind(this)}/>
            </div>
        )
    }

}

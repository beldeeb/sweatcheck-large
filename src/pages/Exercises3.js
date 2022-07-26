import React, { useState } from "react";

//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {sessionService} from 'redux-react-session';
import {Exercises2} from './Exercises2';

const axios = require('axios');

//export const Exercises3 = () => { 
    export function Exercises3(arr) { 
        
    //const history = useNavigate();
    //const session = sessionService;
    sessionService.loadSession()
    .then(token => {
        console.log(token);
    axios.get("https://sweatcheck.herokuapp.com/api/workouts/all/exercises", 
    
    {
        headers: {
            "tok":token

        }
    } 
    ).then(resp => {
        const data = resp.data;
        var i;
        var arr = [];
        for (i=0; i<16; i++){
            console.log(data[i].name);
            arr.push(data[i]._id);        
        }

        console.log(arr);
        
//        return arr;
        
        
        //history("/exercises2", {state: data});
        //Exercises2(data, {});
        
        console.log(arr);


        console.log(arr);

    
})

})

console.log(arr);
//var x = Exercises3();

    
function Item(props) {
    return <li>{props.value}</li>;
 }
 
    return (
     <ul>
       
     </ul>
   );
 
};

export default Exercises3;
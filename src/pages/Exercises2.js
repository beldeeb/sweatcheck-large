import React, { useState } from "react";
import ReactDOM from "react-dom";
import {sessionService} from 'redux-react-session';
//const axios = require('axios');
import axios from 'axios';


import "./../components/styles.css";

import {
    StyledTitle, 
    StyledSubTitle, 
    Avatar, 
    StyledButton, 
    ButtonGroup,
    StyledFormArea,
    colors,
    topBanner, 
    TodoComponent,
    StyledSubTitleLanding,
    StyledTitleLanding,
    StyledFormAreaLanding,
    StyledButtonLanding,
    StyledButtonLanding2, 
    ExtraText,
    TextLink
} from "./../components/Styles";

//auth & redux
import {connect} from 'react-redux';
import {logoutUser} from './../auth/actions/userActions';
//formik
import {Formik, Form} from 'formik';
import {TextInput} from './../components/FormLib';
import * as Yup from 'yup';

//React router
import {useNavigate} from 'react-router-dom';

export function Exercises2(data) { 
        //const history = useNavigate();

    
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const ex1 = {name:"Situps",_id:"62c4b275af00074d489fd15a",musclegroup:"Abs",complete:false}
  const ex2 = {name:"Bicep Curls",_id:"62d9a577aae05bb55b7ae238",musclegroup:"Biceps",complete:false}
  const ex3 = {name:"Barbell Flat Bench Press",_id:"62d9a591aae05bb55b7ae239",musclegroup:"Chest",complete:false}
  const ex4 = {name:"Standing Calf Raises",_id:"62d9a5dcaae05bb55b7ae23a",musclegroup:"Calves",complete:false}
  const ex5 = {name:"Barbell Reverse Biceps Curl",_id:"62d9a7a1aae05bb55b7ae23b",musclegroup:"Forearms",complete:false}
  const ex6 = {name:"Back Squat",_id:"62d9a7d5aae05bb55b7ae23c",musclegroup:"Glutes",complete:false}
  const ex7 = {name:"Romanian Deadlifts",_id:"62d9a7f8aae05bb55b7ae23d",musclegroup:"Hamstrings",complete:false}
  const ex8 = {name:"Lat pull-down machine",_id:"62d9a825aae05bb55b7ae23e",musclegroup:"Lats",complete:false}
  const ex9 = {name:"Deadlift",_id:"62d9a845aae05bb55b7ae23f",musclegroup:"Lower Back",complete:false}
  const ex10 = {name:"Bent-Over Barbell Row",_id:"62d9a89eaae05bb55b7ae240",musclegroup:"Mid Back",complete:false}
  const ex11 = {name:"Front Squats",_id:"62d9a8c6aae05bb55b7ae241",musclegroup:"Quads",complete:false}
  const ex12 = {name:"Incline Bench Press",_id:"62d9a8f9aae05bb55b7ae242",musclegroup:"Shoulders",complete:false}
  const ex13 = {name:"Farmer's Carry",_id:"62d9a925aae05bb55b7ae243",musclegroup:"Chest",complete:false}
  const ex14 = {name:"Walking Leg Cradles",_id:"62dcad85d87210047cace303",musclegroup:"Glutes",complete:false}
  const ex15 = {name:"Weighted Pullup",_id:"62dcaedad87210047cace304",musclegroup:"Biceps",complete:false}
  const ex16 = {name:"Reverse Dumbbell Box Lunge",_id:"62dcafafd87210047cace306",musclegroup:"Hamstrings",complete:false}


  
  const checkList = [ex1.name,ex2.name,ex3.name,ex4.name];
  const exercises = [ex1,ex2,ex3,ex4,ex5,ex6,ex7,ex8,ex9,ex10,ex11,ex12,ex13,ex14,ex15,ex16]
  const array = [];//array to send to api

  var i;

  const [exercise,setExercise]=useState({_id:"", name:"",musclegroup:"",complete:false})
  // once you get checkeditems list, can call a function to get the index of each exercise,
  // then push that exercise into the array you send to api, then send
  //const spot = checkList.indexOf(ex2.name)  // gets the position in the checklist
  //console.log(spot)

  /*const class Exercises
  {
      const string name { get; set; }
      public string contact_name { get; set; }
  } */
  
  
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    
  };
    console.log(checked)

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
        
      })
    : "";
    
    function createWorkout() {
        const workout = "New Workout 3";
        const userEXERCISES = checked;
        sessionService.loadSession()
        .then(token => {
            console.log(token);
        axios.post("https://sweatcheck.herokuapp.com/api/workouts", 
        {name:workout, userEXERCISES},
        {
            headers: {
                "tok":token
    
            }
        
    } 
    
    ) 
})  
};
  // Return classes based on whether item is checked
  var isChecked = (item) => checked.includes(item) ? "checked-item" : "not-checked-item";
      


        return (
          
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
            }}>
                <TodoComponent>
                    <StyledSubTitleLanding size={30}>Sweat Check</StyledSubTitleLanding> 
                    
                </TodoComponent>
            </div>      

        <div className="Exercises2">
          <div className="checkList">
            <div className="title">All Exercises:</div>
            <div className="list-container">
              {exercises.map((item, index) => (
                <div key={index}>
                  <input value={item._id} type="checkbox" onChange={handleCheck} />
                  <span className={isChecked(item)} >{item.name}</span>
                </div>
                
              ))}
            </div>
          </div>

          <div>
            
            <div>
            <ButtonGroup>
            <button onClick={createWorkout}>Create Workout</button>            
            </ButtonGroup>
            </div>
            
          </div>
          
        </div>            
        </div>
        
      );
     
    }    

    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<Exercises2 />, rootElement);
    
    export default connect(null, {logoutUser})(Exercises2);
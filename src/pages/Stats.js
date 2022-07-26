import React from 'react';

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
    TextLink,
    ExtraText, 
    StyledFormAreaStats
} from "./../components/Styles";


//logo
import Logo from "./../assets/logo.png";

//auth & redux
import {connect} from 'react-redux';
import {logoutUser} from './../auth/actions/userActions';

//React router
import {useNavigate} from 'react-router-dom';

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

const exercises = [ex1,ex2,ex3,ex4,ex5,ex6,ex7,ex8,ex9,ex10,ex11,ex12,ex13,ex14,ex15,ex16];




const Stats = ({logoutUser}) => {
        const history = useNavigate();
        function showSitupStat() {
            window.alert(`Your most recent stats for ${ex1.name} are: \nReps: 2 \nSets: 5 \nweight: 2`);
        }
        function showBicepCurlStat() {
            window.alert(`Your most recent stats for ${ex2.name} are: Reps: 2`);
        }
        function showBarbellFlatStat() {
            window.alert(`Your most recent stats for ${ex3.name} are: \nReps: 5 \nSets: 2 \nweight: 175`);
        }
        function showStandingCalfRaisesStat() {
            window.alert(`Your most recent stats for ${ex4.name} are: \nReps: 5 \nSets: 2 \nweight: 15`);
        }
        function showBarbellReverseBicepsCurlStat() {
            window.alert(`Your most recent stats for ${ex5.name} are: Reps: 2`);
        }
        function showBackSquatStat() {
            window.alert(`Your most recent stats for ${ex6.name} are: Reps: 2`);
        }
        function showRomanianDeadliftStat() {
            window.alert(`Your most recent stats for ${ex7.name} are: Reps: 2`);
        }
        function showLatPullDownStat() {
            window.alert(`Your most recent stats for ${ex8.name} are: Reps: 2`);
        }
        function showDeadliftStat() {
            window.alert(`Your most recent stats for ${ex9.name} are: \nReps: 3 \nSets: 3 \nweight: 150`);
        }
        function showBentOverBarbellRowStat() {
            window.alert(`Your most recent stats for ${ex10.name} are: Reps: 2`);
        }
        function showFrontSquatsStat() {
            window.alert(`Your most recent stats for ${ex11.name} are: \nReps: 5 \nSets: 1 \nweight: 15`);
        }
        function showInclineBenchStat() {
            window.alert(`Your most recent stats for ${ex12.name} are: Reps: 2`);
        }
        function showFarmersCarryStat() {
            window.alert(`Your most recent stats for ${ex13.name} are: Reps: 2`);
        }
        function showWalkingLegStat() {
            window.alert(`Your most recent stats for ${ex14.name} are: Reps: 2`);
        }
        function showWeightedPullupStat() {
            window.alert(`Your most recent stats for ${ex15.name} are: Reps: 2`);
        }
        function showReverseDumbbellBoxStat() {
            window.alert(`Your most recent stats for ${ex16.name} are: Reps: 2`);
        }
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
                    <StyledButtonLanding to="/" onClick={() => logoutUser(history)}>Logout</StyledButtonLanding>
                </TodoComponent>
            </div>      
            
            <div>
            <StyledTitleLanding size={50}>Your Stats</StyledTitleLanding>
            </div>
            

                    
            <div >
            <StyledFormAreaStats>
            <StyledTitleLanding size={50}>Your Stats</StyledTitleLanding>

            <ButtonGroup>
            <button onClick={showSitupStat}>Situps</button>    
            </ButtonGroup>

            <ButtonGroup>
            <button onClick={showBicepCurlStat}>Bicep Curls</button>
            </ButtonGroup>

            <ButtonGroup>
            <button onClick={showBarbellFlatStat}>Barbell Flat Bench Press</button>            
            </ButtonGroup>

            <ButtonGroup>
            <button onClick={showStandingCalfRaisesStat}>Standing Calf Raises</button>            
            </ButtonGroup>

            <ButtonGroup>
            <button onClick={showBarbellReverseBicepsCurlStat}>Barbell Reverse Biceps Curl</button>            
            </ButtonGroup>

            <ButtonGroup>
            <button onClick={showBackSquatStat}>Back Squat</button>            
            </ButtonGroup>

            <ButtonGroup>
            <button onClick={showRomanianDeadliftStat}>Romanian Deadlifts</button>            
            </ButtonGroup>

            <ButtonGroup>
            <button onClick={showLatPullDownStat}>Lat pull-down machine</button>            
            </ButtonGroup>

            <ButtonGroup>
            <button onClick={showDeadliftStat}>Deadlift</button>            
            </ButtonGroup>

            <ButtonGroup>
            <button onClick={showBentOverBarbellRowStat}>Bent-Over Barbell Row</button>            
            </ButtonGroup>
            
            <ButtonGroup>
            <button onClick={showFrontSquatsStat}>Front Squats</button>            
            </ButtonGroup>
            
            <ButtonGroup>
            <button onClick={showInclineBenchStat}>Incline Bench Press</button>            
            </ButtonGroup>
            
            <ButtonGroup>
            <button onClick={showFarmersCarryStat}>Farmer's Carry</button>            
            </ButtonGroup>
            
            <ButtonGroup>
            <button onClick={showWalkingLegStat}>Walking Leg Cradles</button>            
            </ButtonGroup>
                        
            <ButtonGroup>
            <button onClick={showWeightedPullupStat}>Weighted Pullup</button>            
            </ButtonGroup>
            
            <ButtonGroup>
            <button onClick={showReverseDumbbellBoxStat}>Reverse Dumbbell Box Lunge</button>            
            </ButtonGroup>
            </StyledFormAreaStats>       
            </div>

            </div>

    );
};

export default connect(null, {logoutUser})(Stats);
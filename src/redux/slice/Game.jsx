import { createSlice } from "@reduxjs/toolkit";



export const Game=createSlice({
    name:"smallgame",
    initialState:{
        playerChoice:undefined,
        cpuChoice:undefined,
        winner:undefined,
        playerscore:0,
        cpuscore:0,
        option:["paper","scissor","rock"],
    },
    reducers:{

        setPlayerChoice(state,action){
            state.playerChoice=action.payload;


        },

        setcpuChoice(state,action){
            const idx=Math.floor(Math.random() * state.option.length);
            state.cpuChoice=state.option[idx];

        },

        resetChoice(state,action){
            state.playerChoice=undefined;
            state.cpuChoice=undefined;
            state.winner=undefined;
            
        },
        setscore(state,action){
            if(
                (state.playerChoice === "paper" && state.cpuChoice === "rock")
                ||
                (state.playerChoice === "scissor" && state.cpuChoice=== "paper")
                ||
                (state.playerChoice === "rock" && state.cpuChoice=== "scissor")
            ){
                console.log("player Wins");
                state.playerscore+=1;
                state.winner="Player";
            }
            else if(

                (state.playerChoice === "rock" && state.cpuChoice === "paper")
                ||
                (state.playerChoice === "paper" && state.cpuChoice=== "scissor")
                ||
                (state.playerChoice === "scissor" && state.cpuChoice=== "rock")

            ){

                console.log("Computer Wins");
                state.cpuscore+=1;
                state.winner="CPU";

            }

            else{
                console.log("Draw");
                state.winner="Draw";
            }

        },


    }
});

export const {setPlayerChoice,setcpuChoice,setscore,resetChoice}=Game.actions;
export default Game.reducer;
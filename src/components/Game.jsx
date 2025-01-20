import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setcpuChoice, setPlayerChoice, setscore,resetChoice } from '../redux/slice/Game';
import paper from "../images/paper.png";
import rock from "../images/rock.png";
import scissor from "../images/scissor.png";


const Game = () => {

  const images = {
    paper: paper,
    rock: rock,
    scissor: scissor,
};
    const {cpuChoice,winner,playerscore,cpuscore,playerChoice}=useSelector(state=>state.smallgame);

    const dispatch=useDispatch();
    
    
    

    function handleclick(choice){
        
        // dispatch(setPlayerChoice(choice));
        // dispatch(setcpuChoice());
        // dispatch(setscore());



    setTimeout(()=>{
      dispatch(setPlayerChoice(choice));
      dispatch(setcpuChoice());
      dispatch(setscore());


    },2000);
    
    };

    function handleReady(){
      dispatch(resetChoice());
    };


    

    
  return (
    <div >
      <div className='flex flex-row items-center justify-center'>
        {/* player div */}
        <div className='flex flex-col items-center justify-center  pt-10'>
            <h1 className='text-green-500 font-semibold rounded-sm px-4 py-1 border border-green-500'>Player</h1>
            <div> 
              {
                playerChoice ? <img src={images[playerChoice]} width={130} className=' pt-4'/> :
                <div>
               <img src={rock} width={130} className='animate-bounce pt-4'/>
               </div>
               }

               
          


            </div>
            

            

        </div>

       
        <div>
              <p className='text-5xl text-white font-bold pt-5 pl-4'>
                vs
              </p>
            </div>

        {/* CPU div */}
        <div className='flex flex-col items-center justify-center  pt-10'>
        <h2 className='text-red-500 font-semibold rounded-sm px-4 py-1 border border-red-500'>CPU</h2>
       {
        cpuChoice ?
        <img width={130} src={images[cpuChoice]} alt={cpuChoice} className=' pt-4'/> 
        :

       <div>
         <img src={rock} width={130}
         className='animate-bounce pt-4'/>

       </div>
        
       }
          
        </div>
        
       
       


      </div>


      <div className='flex flex-row items-center justify-center space-x-4 pt-7'>

  <div className='flex flex-col item-center justify-center bg-slate-800 border border-slate-300 rounded-lg'>
  <p className='text-white mx-auto font-semibold'>Paper</p>
      <img src={paper} alt="paper" width={130} 
      onClick={()=>handleclick("paper")}/>

    </div>


    <div className='flex flex-col item-center justify-center bg-slate-800 border border-slate-300 rounded-lg'>
    <p className='text-white mx-auto font-semibold'>Rock</p>
    <img src={rock} alt="rock" width={130} 
    onClick={()=>handleclick("rock")}/>

    </div>

    <div className='flex flex-col item-center justify-center bg-slate-800 border border-slate-300 rounded-lg'>
    <p className='text-white mx-auto font-semibold'>Scissor</p>
    <img src={scissor} alt="scissor"  width={130}
    onClick={()=>handleclick("scissor")}/>

    </div>            


</div>
    
    <div className='flex flex-row items-center justify-center pt-8 space-x-3'>
    <p className='text-white  bg-slate-800 border border-slate-300 rounded-lg px-2 py-1'>Player Score: {playerscore}</p>
   <p className='text-white  bg-slate-800 border border-slate-300 rounded-lg px-2 py-1'>Cpu Score: {cpuscore}</p>


    </div>
   

    <div className='flex items-center justify-center pt-4'>
      <button onClick={handleReady} className='text-white bg-red-500 rounded-lg px-5 py-2 font-bold'>Ready</button>
    </div>

    



       
        
      </div>


      

    
  )
}

export default Game;
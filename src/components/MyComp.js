import React,{useEffect,useRef,div} from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import './Comp.css'

const MyComp = () => {
    const roadAnim = useWebAnimations({
        keyframes: [
          {transform: 'translate(0px)'},
          {transform: 'translate(-1800px)'},
      ],
      timing: {
        duration: 12000,
        iterations: Infinity,
        easing: "linear",
      }
      });
      
       const pacmanAnimate = useWebAnimations({
        keyframes: [
          {left:'10%'},
          {left:'50%'},
          {left:'100%'},
      ],
      timing: {
        duration: 30000,
        iterations: Infinity,
        direction:"alternate-reverse",
        easing: "ease-in-out",
      }
      });  const lineRef=useWebAnimations({
        keyframes: [
            {transform: 'translate(0px)'},
            {transform: 'translate(-200px)'},
            {transform: 'translate(-400px)'},
            {transform: 'translate(-600px)'},
            {transform: 'translate(-800px)'},
            {transform: 'translate(-1000px)'},
        ],
        timing: {
          duration: 7000,
          iterations: Infinity,
          easing: "linear",
        }
    });
    const lineRef2=useWebAnimations({
        keyframes: [
            {transform: 'translate(1000px)'},
            {transform: 'translate(800px)'},
            {transform: 'translate(600px)'},
            {transform: 'translate(400px)'},
            {transform: 'translate(200px)'},
            {transform: 'translate(100px)'},
            {transform: 'translate(0px)'},
            {transform: 'translate(-100px)'},
            {transform: 'translate(-200px)'},
            {transform: 'translate(-300px)'},
            {transform: 'translate(-400px)'},
            {transform: 'translate(-500px)'},
            {transform: 'translate(-600px)'},
            {transform: 'translate(-700px)'},
            {transform: 'translate(-800px)'},
            {transform: 'translate(-900px)'},
            {transform: 'translate(-1100px)'},
            {transform: 'translate(-1200px)'},
            {transform: 'translate(-1300px)'},
            {transform: 'translate(-1400px)'},
        ],
        timing: {
          duration: 6000,
          iterations: Infinity,
          easing: "linear",
        }
    });
    const bg = useRef();
const mainPar = useWebAnimations({bg,
  keyframes: [
    {backgroundPosition:'50% 50%'},
    {backgroundPosition:'100% 100%'},
    {backgroundPosition:'50% 50%'},
],
timing: {
  duration: 60000,
  iterations: Infinity,
  easing: "linear",
}
});

function changeSpeed(){
    lineRef.getAnimation().updatePlaybackRate(lineRef.getAnimation().playbackRate*1.15);
    roadAnim.getAnimation().updatePlaybackRate(roadAnim.getAnimation().playbackRate*1.15);

}
console.log('out')

useEffect(()=>{
    console.log('in useEffect')
    setInterval(()=>{
      if(mainPar.getAnimation().playbackRate > 1)
      {
        lineRef.getAnimation().updatePlaybackRate(lineRef.getAnimation().playbackRate*0.9);
        roadAnim.getAnimation().updatePlaybackRate(roadAnim.getAnimation().playbackRate*0.9);
  
    }
    },2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

return (
        <div id='mainDiv' ref={mainPar.ref} onClick={changeSpeed}>
            <div className='line' ref={lineRef.ref}></div>
            <div className='line2' ref={lineRef2.ref}></div>
            

            {/* <div className="road">
            </div> */}

            <div class="pacman" ref={pacmanAnimate.ref}>
                    <div class="pacman_eye"></div>
                    <div class="pacman_mouth"></div>
                    <div class="pacman_food"></div>
            </div> 
            <div className="road-top-half" ref={roadAnim.ref}></div>

       </div>
    )
}

export default MyComp

import React,{useRef,useEffect} from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
function App() {
  const moonAnim = useWebAnimations({
    keyframes: [
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(360deg)'},
    ],
    timing: {
      duration: 60000,
      iterations: Infinity,
      delay:2,
      easing: "linear",
    }
  });
  const bg = useRef();
  const bgAnim = useWebAnimations({bg,
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
  
  const wheel1Anim = useWebAnimations({
    keyframes: [
      {transform: 'rotate(0deg)'},
      {transform: 'rotate(360deg)'},
  ],
  timing: {
    duration: 1000,
    iterations: Infinity,
    easing: "linear",
  }
  });

  const wheel2Anim = useWebAnimations({
    keyframes: [
      {transform: 'rotate(0deg)'},
      {transform: 'rotate(360deg)'},
  ],
  timing: {
    duration: 1000,
    iterations: Infinity,
    easing: "linear",
  }
  });

  const carAnim = useWebAnimations({
    keyframes: [
      {left:'10%'},
      {left:'30%'},
  ],
  timing: {
    duration: 30000,
    iterations: Infinity,
    direction:"alternate-reverse",
    easing: "ease-in-out",
  }
  });

  const buildingAnim = useWebAnimations({
    keyframes: [
      {transform: 'translate(0px)'},
      {transform: 'translate(-2400px)'},
  ],
  timing: {
    duration: 15000,
    iterations: Infinity,
    easing: "linear",
  }
  });
  
  function speedUp(){
    buildingAnim.getAnimation().updatePlaybackRate(buildingAnim.getAnimation().playbackRate*1.15);
    moonAnim.getAnimation().updatePlaybackRate(moonAnim.getAnimation().playbackRate*1.15);
    bgAnim.getAnimation().updatePlaybackRate(bgAnim.getAnimation().playbackRate*1.15);
    roadAnim.getAnimation().updatePlaybackRate(roadAnim.getAnimation().playbackRate*1.15);
    wheel1Anim.getAnimation().updatePlaybackRate(wheel1Anim.getAnimation().playbackRate*1.15);
    wheel2Anim.getAnimation().updatePlaybackRate(wheel2Anim.getAnimation().playbackRate*1.15);
    carAnim.getAnimation().updatePlaybackRate(carAnim.getAnimation().playbackRate*1.15);
  }

  useEffect(()=>{
    setInterval(()=>{
      if(bgAnim.getAnimation().playbackRate > 1)
      {
        buildingAnim.getAnimation().updatePlaybackRate(buildingAnim.getAnimation().playbackRate*0.9);
        moonAnim.getAnimation().updatePlaybackRate(moonAnim.getAnimation().playbackRate*0.9);
        bgAnim.getAnimation().updatePlaybackRate(bgAnim.getAnimation().playbackRate*0.9);
        roadAnim.getAnimation().updatePlaybackRate(roadAnim.getAnimation().playbackRate*0.9);
        wheel1Anim.getAnimation().updatePlaybackRate(wheel1Anim.getAnimation().playbackRate*0.9);
        wheel2Anim.getAnimation().updatePlaybackRate(wheel2Anim.getAnimation().playbackRate*0.9);
        carAnim.getAnimation().updatePlaybackRate(carAnim.getAnimation().playbackRate*0.9);
      }
    },2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (      
    <div id="mainBg" ref={bgAnim.ref} onClick={speedUp}>
          <div className="moon" ref={moonAnim.ref}></div>

    <div className="skyline" ref={buildingAnim.ref}>
        {/* <div className="building1-shadow"></div> */}
        <div className="building1">
            <div className="building-left-half"></div>
            <div className="building-right-half"></div>
        </div>
  </div>
    <div className="road">
        <div className="road-top-half" ref={roadAnim.ref}></div>
        <div className="road-bottom-half"></div>
    </div>


   <div class="pacman" ref={carAnim.ref}>
  <div class="pacman__eye"></div>
  <div class="pacman__mouth"></div>
  <div class="pacman__food"></div>
</div> 
    </div>
  );
}
export default App;

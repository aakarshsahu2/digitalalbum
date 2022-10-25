gsap.registerPlugin(Flip);

let layouts = ["final", "plain", "columns", "grid"],
		container = document.querySelector(".container"),
		curLayout = 0; // index of the current layout

function nextState() {
  const state = Flip.getState(".letter, .for, .gsap", {props: "color,backgroundColor", simple: true}); // capture current state
  
  container.classList.remove(layouts[curLayout]); // remove old class
  curLayout = (curLayout + 1) % layouts.length;   // increment (loop back to the start if at the end)
  container.classList.add(layouts[curLayout]);    // add the new class

  Flip.from(state, { // animate from the previous state
    absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    spin: curLayout === 0, // only spin when going to the "final" layout
    simple: true,
    onEnter: (elements, animation) => gsap.fromTo(elements, {opacity: 0}, {opacity: 1, delay: animation.duration() - 0.1}),
    onLeave: elements => gsap.to(elements, {opacity: 0})
  });

  gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
}

gsap.delayedCall(1, nextState);











function skey(){
  var dim = document.querySelector(".card").getBoundingClientRect();
  var prev = dim.left;

    document.querySelector(".cards").addEventListener("scroll",function(){
      
       
          var dim2 = document.querySelector(".card").getBoundingClientRect();
          var diff = prev - dim2.left;
          document.querySelectorAll(".card").forEach(function(every){
            every.style.transform = `skew(${diff*0.1}deg)`;
          })
          prev = dim2.left;
      
      

    })
}

skey();



function mousemove(){
  document.querySelectorAll(".card").forEach(function(abc){
    abc.addEventListener("mousemove",function(e){
      if(e.target.tagName !== 'IMG') return;
  
      var dim = e.target.parentElement.getBoundingClientRect();
       
      
        e.target.style.clipPath = `circle(25% at ${e.clientX - dim.left}px ${e.clientY - dim.top}px)`;
      
    })
  
    
  
    
  
  })
  
}
mousemove();



gsap.from(".div",{
  scale:0,
  duration:5,
 repeat:-1,
 rotate:360,
})





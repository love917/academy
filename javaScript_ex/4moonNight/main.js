//querySelector은 css형식으로 호출하는 방법이다.
//scroll은 window의 이벤트이다. 
//window야, scroll이라는 이벤트가 발생할 때마다 어떤 일(function)을 해라
window.addEventListener('scroll',function(){
    let value = window.scrollY
    //console.log(value) 실행되는지 확인
    moon.style.transform=`translate(-${value * 0.2}px, ${value * 0.35}px)`; 
    // 값0.2 -> scroll내리는 속도보다 느리게 가도록 설정함
    bg.style.transform=`translate(0px, ${value * 0.5}px)`; 
    mountain.style.transform=`translate(0px, -${value * 0.15}px)`; //산은 올라감
    road.style.transform=`translate(0px, ${value * 0.15}px)`; //길은 내려감
    text.style.transform=`translate(0px, ${value}px)`; 

})
let bg=document.querySelector("#bg")
let moon=document.querySelector("#moon")
let mountain=document.querySelector("#mountain")
let road=document.querySelector("#road")
let text=document.querySelector("#text")
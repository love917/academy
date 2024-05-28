gsap.registerPlugin(ScrollTrigger)

gsap.from(".visual .subtitle",{
    y:50, opacity:0, ease:"expo.out", duration:1, delay:0.5
})

gsap.from(".visual .text",{
    y:50, opacity:0, ease:"expo.out", duration:1, delay:1
})

//slide
let list = document.querySelectorAll(".work ul li")
console.log(list)//[li, li, li, li, li, li] --> '유사배열'

let imgBoxs = document.querySelectorAll(".imgBox")
//console.log(imgBox)// --> '유사배열'

let txtBoxs = document.querySelectorAll('.textBox')


//가로 스크롤
//let scrollTween = gsap.to(무엇을 - 변수이기 때문에 (쌍따옴표)""를 넣으면 안됨)
let scrollTween = gsap.to(list,{
    xPercent : -100*(list.length - 1),//==> -100*6 ==> 전체 길이에서 -1을한다.
    ease:"none",
    scrollTrigger:{
        trigger:".work",
        start: "center center",
        end:"+=300%",//애니메이션이 빠르다 싶으면 이 값을 조절하면됨
        scrub:1,
        pin:true
    }
})

//forEach : 배열 안의 요소를 하나씩 가져와서 어떤 일을 시킨다.
imgBoxs.forEach(function(imgBox){//파란색 글자 ==> item(이름 달라도 상관x)은 배열 안의 각각 요소를 순서대로 받는다.
    gsap.timeline({
        scrollTrigger:{
            trigger:imgBox,
            start:"center right",//나의 허리가 화면의 오른쪽에 부딪히면
            end:"center right",
            scrub:1,
            markers: true,
            containerAnimation:scrollTween//⭐⭐부모안에 imgBox들이 타고 있음. 그 부모가 전체적으로(container) 옆으로 움직여야함(Animation)⭐⭐
        }
    })
    .to(imgBox,{'clip-path':'inset(0%)',ease:"none",duration:1},0)
})

//왼쪽으로 사라질 때 이미지를 작게 만드는 법
imgBoxs.forEach(function(imgBox){
    gsap.timeline({
        scrollTrigger:{
            trigger:imgBox,
            start:"center center",
            end:"center left",
            scrub:1,
            markers: true,
            containerAnimation:scrollTween
        }
    })
    .to(imgBox,{'clip-path':'inset(30%)',ease:"none",duration:1},0)
})

txtBoxs.forEach(function(txtBox){
    gsap.timeline({
        scrollTrigger:{
            trigger:txtBox,
            start:"center 70%",
            end:"center 40%",
            scrub:1,
            markers: true,
            containerAnimation:scrollTween
        }
    })
    .to(txtBox,{opacity:1,x:-100},0)
})
txtBoxs.forEach(function(txtBox){
    gsap.timeline({
        scrollTrigger:{
            trigger:txtBox,
            start:"center 30%",
            end:"center 20%",
            scrub:1,
            containerAnimation:scrollTween
        }
    })
    .to(txtBox,{opacity:0},0)
})

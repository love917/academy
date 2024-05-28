gsap.registerPlugin(ScrollTrigger)

gsap.timeline({
    scrollTrigger:{
        trigger:'.sec02 ul',
        start:"top 90%",//ul의 top/ 화면의 90%
        end:"20% 20%",
        scrub:true,//=true
        markers:false
    }
})
.from('.sec02 li:nth-child(1)',{y:400},"0.2")//지연 0.2
.from('.sec02 li:nth-child(2)',{y:400},"0.4")
.from('.sec02 li:nth-child(3)',{y:400},"0.6")
.from('.sec02 li:nth-child(4)',{y:400},"0.8")

gsap.timeline({
    scrollTrigger:{
        trigger:'.sec03',
        start:"top 100%",//sec03의 머리가 화면의 100%에 닿이면 시작해
        end:"100% 100%",//sec03의 끝이, 화면의 끝에 부딪히면 애니메이션을 끝내
        scrub:true,
        markers:true,
    }
})
//.fromTo('무엇을'{from},{to},delay값)
.fromTo('.sec03 .a',{y:"400%"},{y:0},1.2)
.fromTo('.sec03 .b',{y:"400%"},{y:0},1.4)
.fromTo('.sec03 .c',{y:"400%"},{y:0},1.6)
.fromTo('.sec03 .d',{y:"400%"},{y:0},1.8)
.fromTo('.sec03 .e',{y:"400%"},{y:0},2)
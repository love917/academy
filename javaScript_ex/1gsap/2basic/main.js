gsap.registerPlugin(ScrollTrigger)

gsap.timeline({
    scrollTrigger:{
        trigger:'.sec02',
        start:"top 50%",
        end:"30% top",//내 영역의 30%가 화면의 top에 닿였을 때 끝낼거야
        scrub:1,//srub:1=true. 2로 바뀌면 애니메이션의 효과가 부드러워짐
        markers:true
    }
})
.fromTo(".circle",{width:0, height:0,top:"3%"},{width:2500, height:2500,top:"30%"})

//textBox
gsap.timeline({
    scrollTrigger:{
        trigger:'.sec02 .textBox',
        start:"top 80%",
        end:"100% 80%",
        scrub:1,
        markers:true
    }
})
.fromTo(".textBox",{top:"50%",opacity:0},{top:"40%",opacity:1})
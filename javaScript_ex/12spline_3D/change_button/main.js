gsap.registerPlugin(ScrollTrigger)
function lenis(){
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      //console.log(e)
    })
    
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)
}

lenis();

///////////////////////////////////

import { Application } from 'https://unpkg.com/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/cIA22NKuInRQDTO8/scene.splinecode')
.then(()=>{

    let Grogu = app.findObjectByName("Grogu")
    let BMO = app.findObjectByName("BMO")
    let Child = app.findObjectByName("Child")
    let Child2 = app.findObjectByName("Child2")
    let GiftBox = app.findObjectByName("GiftBox")

    //배열
    let objects = [Grogu,BMO,Child,Child2,GiftBox]

    //버튼
    function showObject(object,scale){
        objects.forEach((object)=>{
            gsap.to(object.scale,{x:0,y:0,z:0})}) //버튼을 누르면 전에 있던게 없어지도록함
        gsap.to(object.scale,0.3,{x:scale,y:scale,z:scale,delay:0.5,ease:"expo.inOut"},0)
    }
    //위로 올라오면 사라지게하는 함수(XXXXXX)
    //function reduceObjectNo(duration){
    //    objects.forEach((object)=>{
    //        gsap.set(object.scale,duration,{x:0,y:0,z:0},0)
    //        gsap.set(GiftBox.scale,0.3,{x:1,y:1,z:1},0)
    //})


    objects.forEach((object)=>{
        gsap.set(object.scale,{x:0,y:0,z:0})
        gsap.to(object.rotation,10,{y:Math.PI*2,repeat:-1,ease:"none"})
    })//10-->duration....repeat:-1 -->무한반복
    gsap.set(Grogu.scale,{x:1,y:1,z:1})
    gsap.set(Grogu.position,{x:300,y:-100})//position은 x,y만 있어도 됨

    gsap.timeline({
        scrollTrigger:{
            trigger:".first",
            start:"top top",
            end:"90% top",
            scrub:2
        }
    })
    .to(Grogu.position,{x:0,y:-100},0)
    .to(Grogu.rotation,{x:Math.PI*2},0)//뒤집히게 함


    //두번째 영역-----------------------//
    gsap.timeline({
        scrollTrigger:{
            trigger:".second",
            start:"top top",
            end:"100% top",
            scrub:2,
            markes:true,
        }
    })
    .to(Grogu.scale,{x:0,y:0,z:0})
    .to(BMO.scale,{x:1,y:1,z:1},0)
    .to(BMO.rotation,{x:Math.PI*2,ease:"expo.inOut"},0)//뒤집히게 함

    //세번째 영역-----------------------//
    gsap.timeline({
        scrollTrigger:{
            trigger:".third",
            start:"top top",
            end:"100% top",
            scrub:2
        }
    })
    .to(BMO.scale,{x:0,y:0,z:0})
    .to(Child.scale,{x:1,y:1,z:1},0)
    .to(Child.rotation,{x:Math.PI*2,ease:"expo.inOut"},0)//뒤집히게 함

    //네번째 영역-----------------------//
    gsap.timeline({
        scrollTrigger:{
            trigger:".four",
            start:"top top",
            end:"100% top",
            scrub:2
        }
    })
    .to(Child.scale,{x:0,y:0,z:0})
    .to(Child2.scale,{x:1,y:1,z:1},0)
    .to(Child2.rotation,{x:Math.PI*2,ease:"expo.inOut"},0)//뒤집히게 함

    //다섯번째 영역-----------------------//
    gsap.timeline({
        scrollTrigger:{
            trigger:".five",
            start:"top top",
            end:"100% top",
            scrub:2,
            onEnterBack:()=>{console.log("onEnterBack")},
            onLeaveBack:()=>{console.log("onLeaveBack")},
        }
    })
    .to(Child2.scale,{x:0,y:0,z:0})
    .to(GiftBox.scale,{x:1,y:1,z:1},0)
    .to(GiftBox.rotation,{x:Math.PI*2,ease:"expo.inOut"},0)//뒤집히게 함

    
    document.querySelector("#toGrogu").addEventListener("click",()=>{showObject(Grogu,1)})
    document.querySelector("#toBMO").addEventListener("click",()=>{showObject(BMO,1)})
    document.querySelector("#toChild").addEventListener("click",()=>{showObject(Child,1)})
    document.querySelector("#toChild2").addEventListener("click",()=>{showObject(Child2,1)})
    document.querySelector("#toGiftBox").addEventListener("click",()=>{showObject(GiftBox,1)})
})


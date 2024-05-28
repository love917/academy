gsap.registerPlugin(ScrollTrigger)
function lenis(){
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
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
app
.load('https://prod.spline.design/SXflPZHRKQdxFf5D/scene.splinecode')
.then(()=>{//then : 로드가 성공했다면 할 일 

    let car = app.findObjectByName('car');
    console.log(car)

    gsap.set(car.scale,{x:1.8,y:1.8,z:1.8})
    gsap.set(car.position,{x:0,y:-40,z:0})

    let stopRotation = gsap.to(car.rotation,{
        y:Math.PI * 2 + car.rotation.y,
        //더해주는 이유 : 만약 45도 회전한 상태에서 움직임을 준다면, 그 상태의 값을 더해줘야 튕겨지지 않고 그대로 회전이 되기 때문이다.
        x:0,
        z:0,
        duration:10,
        repeat: -1,//계속 돌것이기 때문에 -1
        ease:"none"
    })

    let tl = gsap.timeline;
    
    //두번째 영역-----------------------//
    tl({
        scrollTrigger:{
            trigger:".second",
            start:"top 100%",
            end:"top top",
            scrub:1,
            onEnter:()=>{
                stopRotation.pause();//애니메이션 멈춤
            },
            //스크롤을 다시 올릴때, 원래 자리로 돌아가게 함
            onLeaveBack:()=>{
                let newProgress = Math.PI * 2 + car.rotation.y;
                stopRotation.progress(newProgress).resume();

            }
        }
    })

    //PI :180도를 돌림*0.8(80%)만 돌려라
    .to(car.rotation,{x:0, y:-Math.PI*0.8,z:0},0)
    .to(car.position,{x:0, y:0, z:0},0)//제일 뒤에 있는 0 값이 같으면 동시에 진행됨
    .to(car.scale,{x:2, y:2, z:2},0)

    //세번째 영역-----------------------//
    tl({
        scrollTrigger:{
            trigger:".third",
            start:"top 100%",
            end:"top top",
            scrub:1,
        }
    
    })
    .to(car.rotation,{x:Math.PI*0.2, y:-Math.PI*2.8,z:0},0)
    .to(car.position,{x:150, y:0, z:20},0)
    .to(car.scale,{x:1.8, y:1.8, z:1.8},0)

    //네번째 영역-----------------------//
    tl({
        scrollTrigger:{
            trigger:".four",
            start:"top 100%",
            end:"top top",
            scrub:1,
        }
    
    })
    .to(car.rotation,{x:Math.PI*0.1, y:-Math.PI*1.8,z:0},0)
    .to(car.position,{x:-180, y:0, z:20},0)
    .to(car.scale,{x:1.8, y:1.8, z:1.8},0)

    //다섯번째 영역-----------------------//
    tl({
        scrollTrigger:{
            trigger:".five",
            start:"top 100%",
            end:"top top",
            scrub:1,
        }
    
    })
    .to(car.rotation,{x:0, y:-Math.PI*2,z:0},0)
    .to(car.position,{x:0, y:0, z:20},0)
    .to(car.scale,{x:2.2, y:2.2, z:2.2},0)

    //여섯번째 영역-----------------------//
    tl({
        scrollTrigger:{
            trigger:".six",
            start:"top 100%",
            end:"top top",
            scrub:1,
        }
    
    })
    .to(car.rotation,{x:0, y:-Math.PI*2.5,z:0},0)
    .to(car.position,{x:0, y:0, z:20},0)
    .to(car.scale,{x:2.2, y:2.2, z:2.2},0)
})//<---then안에 있는거임




///////////컨텐츠들
//###FIRST
gsap.timeline()
.to(".section--one--container1",{
    opacity:0,
    scrollTrigger:{
        trigger:".section--one--container1",
        start:"top top",
        end:"bottom top",
        scrub:1
    }
})
gsap.timeline()
.to(".section--one--container2",{
    opacity:0,
    scrollTrigger:{
        trigger:".second",
        start:"top bottom",
        end:"top center",
        scrub:1
    }
})

//###SECOND
.to(".section--two--container1", {
    scrollTrigger: {
      trigger: ".section--two--container1",
      start: "top 80%",
      end: "bottom center",
      toggleClass: "activeRightSpecific",
      scrub: true,
    },
})
  .to(".section--two--container2", {
    scrollTrigger: {
      trigger: ".section--two--container2",
      start: "top 80%",
      end: "bottom center",
      toggleClass: "resetPosition",
      scrub: true,
    },
})

//###THIRD
.to(".section--three--container", {
    scrollTrigger: {
      trigger: ".section--three--container",
      start: "top 80%",
      end: "bottom center",
      toggleClass: "resetPosition",
      scrub: true,
    },
})

//###FOURTH
  .to(".section--four--container", {
    scrollTrigger: {
      trigger: ".section--four--container",
      start: "top 80%",
      end: "bottom center",
      toggleClass: "resetPosition",
      scrub: true,
    },
})

//###FIVETH
to(".section--five--container ", {
    scrollTrigger: {
      trigger: ".section--five--container ",
      start: "top 80%",
      end: "bottom center",
      toggleClass: "resetPosition",
      scrub: true,
    },

  })

//###SIXTH
  .to(".section--six--container ", {
    scrollTrigger: {
      trigger: ".section--six--container ",
      start: "top 80%",
      end: "bottom center",
      toggleClass: "resetPosition",
      scrub: true,
    },
  });

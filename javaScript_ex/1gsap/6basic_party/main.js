gsap.registerPlugin(ScrollTrigger)
const lenis = new Lenis()

lenis.on('scroll', (e) => {
 // console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

//////////////////////////////////////

//badge -- 모든뱃지에 적용됨
gsap.to(".badge",{
    rotation:360,
    duration:5,
    ease:"none",
    repead:-1
})
//////////////////////////////////////

//첫번쨰 영역
//얼굴
let wrapper = document.querySelector(".tracker")
let emoji = document.querySelector(".emoji")
let emojiFace = document.querySelector(".emoji-face")
let sticky = document.querySelector(".sticky")

gsap.to(sticky,{
  scrollTrigger:{
    tigger: sticky,
    start:"top top ",
    end:"+=150%",//애니메이션이 끝나는 지점 (시작 지점에서 150% 더 아래로)
    scrub:1
  },
  y:250, // y축으로 250px 이동
  scale:0.75, // 크기를 0.75배로 축소
  rotation:-15, // -15도 회전
  ease:"power3.out"
})
//🍒예를 들어, 페이지 섹션의 높이가 1000px이라면 +=150%는 1500px 아래까지 스크롤할 때 애니메이션이 종료된다는 의미입니다.


let moveEvent = function(e){
    let wrapperRect = wrapper.getBoundingClientRect()//wrapper에 대한 공간 정보
    console.log(wrapperRect)

    //많은 값이 들어가기 때문에 값을 빼는 작업을 하는것임
    let relX = e.clientX - (wrapperRect.left + wrapperRect.width/2)
    let relY = e.clientY - (wrapperRect.top + wrapperRect.height/2)

    let emojiMaxDisplacement = 50;//최소값
    let emojiFaceMaxDisplacement =75; //최댓값

    let emojiFaceDisplacementX = (relX / wrapperRect.width)*emojiFaceMaxDisplacement
    let emojiFaceDisplacementY = (relY/ wrapperRect.height)*emojiFaceMaxDisplacement
    
    let emojiDisplacementX = (relX / wrapperRect.width)*emojiMaxDisplacement
    let emojiDisplacementY = (relY / wrapperRect.height)*emojiMaxDisplacement

    gsap.to(emojiFace,{
      x:emojiFaceDisplacementX,
      y:emojiFaceDisplacementY,
      duration:0.35,
      ease:"power3.out"
    })

    gsap.to(emoji,{
      x:e.clientX,
      y:emojiDisplacementY,
      duration:0.35,
      ease:"power3.out"
    })
};
wrapper.addEventListener("mousemove",moveEvent)

//////////////////////////////////////

//두번쨰 영역
let conScale = document.querySelector(".con-scale")

gsap.fromTo(conScale,{
  y:100,
  scale:0.7,
  rotation:15
},{
  scrollTrigger:{
    trigger:"conScale",
    start:"top 80%",
    end: "top 20%",
    scrub:2,
  },
  y:0,
  scale:1,
  duration:1,
  rotation:0,
  ease:"power3.out"
})

//second section---각각의 이미지 애니메이션
let secImgs = document.querySelector(".section-images")
let imgs = secImgs.querySelectorAll("img")

imgs.forEach(function(img,index){
  let imgDey = index * 0.8;
  gsap.set(img,{y:400})
  gsap.timeline({
    scrollTrigger:{
      trigger : ".con-scale",
      start: "top 60%",
      end: "top top",
      scrub: 2,
    }
  })
  .to(img,{
    y:0,
    duration:2,
    delay:imgDey,//delay값을 변수에다가 할당해놓음
    ease: "power3.out"
  })
})

//third section ---글자 자르기
let splitTypes = document.querySelectorAll(".heading-large")

splitTypes.forEach(function(char, i){
  let parent=char.parentNode.parentNode;
  const text=new SplitType(char, { types: 'chars' })
  console.log(text)

  gsap.from(text.chars,{
     opacity:0,
     yPercent:100,
     duration:0.4,
     stagger:0.04,
     scrollTrigger:{
      trigger:parent,
      start:"top 60%",
      end:"top 20%",
      ease:"power3.out"
      
     }
  })
})

///텍스트의 사라지는 방향 애니

gsap.to("[data-direct]",{ //속성 중에 data-direct이 있는 것들 다 호출됨
  x:(i,el)=> -(el.getAttribute("data-direct")) * 400   , 
  //el--> data-direct 속성을 가지고 있는 요소들을 하나씩 받아옴, i --> index번호
  //마이너스(-)값을 이용. +1이 -1을 만나면 -1이 되고 이런식으로 
  ease:"none",
  scrollTrigger:{
      trigger:".text_wrap",
      start:"top 20%",
      end:"top top",
      duration:2,
      scrub:2
  }
})

wrapper.addEventListener("mousemove",moveEvent)

//둥근 얼굴들 애니
gsap.to("[data-speed]",{
  y:(i,el)=>(el.getAttribute("[data-speed]") - 1) * 230,
  ease:"none",
  scrollTrigger:{
    start:0, //-->scolltrigger가 시작되는 스크롤 위치
    end:"max", //-->scolltrigger가 끝나는 위치에 끝남
    scurub:2
  }

})

let rarr = document.querySelectorAll("[data-speed]")

gsap.from(rarr[0], {
  scrollTrigger:{
  trigger :".website-content2",
  start:"top 100%",
  end:"top top",
  scrub:2
  },
  rotation:45 
})

gsap.from(rarr[1], {
  scrollTrigger:{
  trigger :".text-black",
  start:"top 100%",
  end:"top top",
  scrub:2
  },
  rotation:-45 
})

gsap.from(rarr[2], {
  scrollTrigger:{
  trigger :".text-black",
  start:"top 100%",
  end:"top top",
  scrub:2
  },
  rotation:45 
})
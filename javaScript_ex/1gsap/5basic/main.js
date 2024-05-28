gsap.registerPlugin(ScrollTrigger)
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

//////////////////////////////////////

backColor = document.querySelectorAll("[data-bgcolor]")//배열에 넣어라
//console.log(backColor)
backColor.forEach(function(item,index){
  let prevBg = index == 0? "":backColor[index - 1].dataset.bgcolor//backColor가 배열임
  ScrollTrigger.create({
    trigger:item,
    start:"top 50%",
    end: "bottom 5%",
    duration:1,
    onEnter:function(){
      gsap.to("#contents",{
        backgroundColor:item.dataset.bgcolor
      })
    },
    onLeaveBack:function(){//떠났을떄 어떤일이 일어나라
      gsap.to("#contents",{
        backgroundColor:prevBg
      })
    }
  })

})
//backColor.forEach(function(one,two,three){
//  //one --> backColor배열 안의 요소들이 차례로 들어옴
//  //two --> one의 변수 안에 할당된 아이템의 index번호가 들어옴
//  //three --> backColor 원배열 자체가 들어옴
//
//})

//🟥수평슬라이드
let horSection = document.querySelectorAll(".port_desc .port")
gsap.to(horSection,{
  xPercent : -97 * (horSection.length - 1),//(xPercent=GSAP에서 transform과 같다)
  scrollTrigger:{
    trigger:".port_desc",
    start:"top 20%",
    end:"+=5000",
    scrub: 1,
    pin:true
  }
})






//기본설명
//let sec = document.querySelector("#section1")
//console.log(sec.getAttribute("id"))//sec의 속성 가져오기 
//sec.setAttribute("id","아이디")//id안에 들어갈 내용이 '아이디'가 될것임 
//sec.setAttribute("data-bgcolor","red")

//sec.dataset.bgcolor="검정";
//console.log(sec.dataset.bgcolor)//검정

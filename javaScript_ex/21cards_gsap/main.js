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

let cardWrapper = document.querySelectorAll(".cards_item");
let cardsEl = document.querySelectorAll(".cards_item .cards_el");

cardWrapper.forEach(function(e,i){//e:아이템, i :아이템의 index
    let card = cardsEl[i]
    let img = e.querySelector(".cards_img img");
    let scale = 1;
    let rotate = 0;

    if(i !== cardsEl.length - 1){//4번이 아닌 것들은 
        scale = 0.9 + 0.025 *1;
        rotate = -10;
    }
    gsap.to(card,{
        scale:scale,
        rotateX:rotate,
        transformOrigin:"center top",//중심이동
        ease:"none",
        scrollTrigger:{
            trigger: e,
            start:"top "+( 100 + 40 *i), //끝나는 위치가 각자 다 달라서 계산을 해줘야함
            end:"bottom +=650px",
            endTrigger:".end-anim",
            pin:e, //각각에게 고정시켜줘야 하기 때문에, cards_item한테 줌(e)
            scrub:1,
            pinSpacing:false //pin을 걸때, 밑에 공간을 만들지 않게 함 
        }
    })
})
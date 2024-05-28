gsap.registerPlugin(ScrollTrigger)

//visual
gsap.timeline({
    scrollTrigger:{
        trigger:".visual",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true//명령이 끝날때까지 내눈앞에 보여라

    }
})
.to(".visual h1", {opacity:1,duration:10}, 5)//5초뒤에 실행해라(delay값)
.to(".visual img", {scale:0.4, opacity:0.3,duration:10},5)



let imgBox=document.querySelectorAll('.imgBox')
console.log(imgBox)
//gsap.utils.toArray('.imgBox') //--> gasp에서 배열 형태로 해줌, 위에 것과 같음

imgBox.forEach(function(imgBox){
    gsap.timeline({
        scrollTrigger:{
            trigger:imgBox,
            start:"50% 100%",
            toggleClass:{targets:imgBox, className:'active'},
            scrub:1,
        }
    })
})

let textBox=document.querySelectorAll('.textBox')

textBox.forEach(function(textBox){
    gsap.timeline({
        scrollTrigger:{
            trigger:textBox,
            start:"50% 100%",
            toggleClass:{targets:textBox, className:'active'},
            scrub:1,
        }
    })
})
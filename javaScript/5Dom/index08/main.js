//다른 이미지들 가져오기
let imgs = document.querySelectorAll(".samll_img")

//for(let i = 0; i<imgs.length; i++){
//    imgs[i].addEventListener("click",function(){
//        console.log(this.getAttribute("data-image"))
//        document.querySelector('#big_img').src=getAttribute("data-image")
//    })
//    
//}

//forEach()메서드 사용

//a:배열의 요소들을 순서대로 하나씩 가져옴
//b:순서대로 들어온 a의 index번호를 가져옴(생략가능)
//c:배열자체(생략가능)
imgs.forEach(function(elem){
    elem.addEventListener("click",function(){
        //data-image
        //console.log(this.getAttribute("data-iamge"))
        //console.log(this.dataset.image)
        //document.querySelector("#big_img").src=this.dataset.image
        document.querySelector("#big_img").setAttribute("src",this.dataset.image)
    })
    //console.log(`${a},${b},${c}`)
})

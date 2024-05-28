let container = document.querySelector(".items");
let imageIndex = 1;
let animationTimeout = null;
let currentlyPlaying = false;

function addNewItem(x,y){
    //div 태그만들기
    let newItem = document.createElement("div");
    newItem.className = "item"
    
    let img = document.createElement("img")
    img.src = `./assets/img${imageIndex}.jpg`
    newItem.appendChild(img)

    imageIndex = (imageIndex % 15) + 1
    //% ==> 나머지를 구함 이미지가 15장밖에 없는데 15/15는 0이 되므로 일부러 1을 더해줌
    //이미지가 1~15까지 선택되도록
    console.log(imageIndex)
    container.appendChild(newItem)
    newItem.style.left = `${x - 75}px`;
    newItem.style.top = `${y - 100}px`;

    manageItemLimit();
}
function manageItemLimit(){
    while(container.children.length > 20)
        container.removeChild(container.firstChild)
}

function startAnimation(){
    if(currentlyPlaying || container.children.length === 0){
        return;//✨한줄일때는 중괄호 생략가능
        // or연산자 ==> || 둘 중에 하나라도 true면 true임
        //currentlyPlaying = false인 상태이므로 실행이 안됨.
        //return ==> return을 싸고 있는 함수가 종료됨(둘다 false일때만 return이 실행x)
    }
    currentlyPlaying = true;

    gsap.to(".item",{
        y:1000,
        scale:0.5,
        opacity:0,
        duration:0.5,//기본값
        stagger:0.025,//간격을 두고 차례대로 올라가는 effect
        onComplete : function(){//위의 애니메이션이 끝나고 나면 할 일
            currentlyPlaying = false;
        }
    })
}

container.addEventListener("mousemove",function(event){
    //console.log(event.clientX)
    clearTimeout(animationTimeout)//멈추게 하고 없애고 다시 실행되게 함
    addNewItem(event.clientX,event.clientY)
    animationTimeout = setTimeout(startAnimation,100)//0.1초
})

//setInterval(할일,시간)//시간마다 할일 
//setTimeout(할일, 시간)//어떤 시간이 지나면(후에) 할일

////멈추게 하기
//let stopInterval = setInterval(할일, 시간)
//clearInterval(stopInterval) ==> setInterval //멈추기

//let stopTimeout = setInterval(할일, 시간)
//clearTimeout(stopTimeout) ==> setTimeout //멈추기
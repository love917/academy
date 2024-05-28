let rotationX = 0;
let rotationY = 0;
let cube = document.querySelector('.box-area')//css형식으로 부름 
let content = document.querySelector('.box-back h2')//3️⃣3(back면)글자가 뒤집어져서 수정
//= getElementsByClassName로 부른것과 같다.

function rotateXAxis(n){
    rotationX = rotationX + (90 * n)
    rotationY=0;//cube를 회전하다보면 값이 계속 추가되므로 리셋시킴
    console.log(rotationX)//값이 바뀌는지 확인
    content.style.transform = `rotateX(180deg) rotateY(180deg)`;/* 3️⃣ */
    cube.style.transform=`rotateX(${rotationX}deg) rotateY(0deg)`;

}

function rotateYAxis(n){
    rotationY = rotationY + (90 * n)//n = -1 => 90 * -1 = -90
    rotationX=0;//cube를 회전하다보면 값이 계속 추가되므로 리셋시킴
    //오른쪽 버튼이 왼쪽으로 돌지만 내눈으로는 오른쪽 면이 보고싶을 때는 -1로 바꿔주고
    //그냥 cube가 오른쪽으로 회전하게 하고싶으면 1로 해준다.
    console.log(rotationY)//값이 바뀌는지 확인
    //transform: rotateX(0deg) rotateY(0deg)
    content.style.transform = `rotateX(0deg) rotateY(0deg)`/* 3️⃣ */
    cube.style.transform=`rotateX(0deg) rotateY(${rotationY}deg)`;
}

function front(){
    rotationX=0;
    rotationY=0;
    cube.style.transform=`rotateX(0deg) rotateY(0deg)`;
}

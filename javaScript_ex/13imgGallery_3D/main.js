window.onload = function(){
    let gallery = document.querySelector('.gallery');
    let previewImage = document.querySelector('.preview-img img');
    let galleryWrap = document.querySelector('#page4');

    galleryWrap.addEventListener("mousemove",function(event){
        let x = event.clientX;
        let y = event.clientY;
        //console.log(`${x},${y}`)

        let centerX = window.innerWidth /2; //화면의 넓이값을 가져와서 반으로 나눔
        let centerY = window.innerHeight /2; 

        let percentX=(x - centerX)/centerX;//중앙을 기준으로 오(0.2 0.4 )왼(-0.2 -0.4)
        let percentY=(y - centerY)/centerY;//중앙을 기준으로 아래(0.2 0.4 )위(-0.2 -0.4)

        let rotateXX = 55 + percentY;//상하로 움직일 수 있도록 x값에 y를 넣었음
        let rotateY = percentX * 2//좌우로 움직일 수 있도록 y값에 x를 넣었음

        gsap.to(gallery,{
            duration:1,
            ease:"power2.out",
            rotateX:rotateX,
            rotateY:rotateY,
        })
    })

    for(let i = 0; i<150; i++){
        let item = document.createElement("div");
        item.className = "item";
        
        let img = document.createElement("img");
        img.src = "./assets/img"+ ((i % 15) + 1) + ".jpg";
        console.log(item)
        item.appendChild(img)
        gallery.appendChild(item)

    }
    let items = document.querySelectorAll(".item")//<-- 유사배열
    let numberOfItems = items.length;
    console.log(numberOfItems)//150

    let angleIncrement = 360 / numberOfItems
    console.log(angleIncrement)//2.4

    //각각의 요소는 item, 인덱스 번호 index
    items.forEach(function(item,index){
        gsap.set(item,{
            rotationZ: index * angleIncrement - 90,
            rotationY: 90,
            transformOrigin : "50% 400px"
        })

        //마우스를 올리면 조금씩 움직이게 하는 효과
        item.addEventListener("mouseover",function(){
            let imgInsideItem = item.querySelector("img");
            previewImage.src = imgInsideItem.src; //오른쪽에 있는 내용을 왼쪽에 넣는것임
            gsap.to(item,{
                x:10,
                y:10,
                z:10,
                ease:"power2.out"
            })
        })

        //마우스가 벗어나면 다시 원래자리로 돌아오게 함
        item.addEventListener("mouseout",function(){
            previewImage.src ="./assets/img1.jpg";
            gsap.to(item,{
                x:0,
                y:0,
                z:0,
                ease:"power2.out"
            })
        })
    })
    


}

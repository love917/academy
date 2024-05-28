//setInterval(함수, 시간3초)//🕐3초마다 함수가 실행

//setInterval(()=>{},1000)//1초마다 할 일

//let i=0;
//setInterval(()=>{
//    i++;
//    console.log(i)
//},1000)

let i=0;
setInterval(()=>{
   let today=new Date();
   let dayList=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
   let hh=addZero(today.getHours())
   let mm=addZero(today.getMinutes())
   let ss=addZero(today.getSeconds())
   let MM=addZero(today.getMonth()+1)//0~11
   let DD=addZero(today.getDate())
   let YY=addZero(today.getFullYear())
   let dd=dayList[today.getDay()].toUpperCase();//0~6 / toUpperCase - 다 대문자로 바꿔줌
   //dayList[5]
   //dayList[today.getDay()] ---> 5자리에 넣음

   console.log(YY)//나오는지 확인

    document.querySelector('#hours').innerHTML=hh;
    document.querySelector('#min').innerHTML=mm;
    document.querySelector('#sec').innerHTML=ss;
    document.querySelector('#month').innerHTML=MM;
    document.querySelector('#date').innerHTML=DD;
    document.querySelector('#year').innerHTML=YY;
    document.querySelector('#day').innerHTML=dd;

   function addZero(num){
    return(num<10?"0"+num:num)//삼항연산자를 이용해서 숫자 앞에 0을 붙이도록함
   }
},1000)
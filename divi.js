var strong = document.getElementById("strong");
var first  = document.getElementById("first");
var second = document.getElementById("second");
var answer = document.getElementById("answer");
var error  = document.getElementById("false");
var check  = document.getElementById("check");
var reset  = document.getElementById("reset");
var btns   = document.getElementById("btns");
var bien   = document.getElementById("bien");
var correct = document.getElementById("correct");
var score_result = document.getElementById("score_result");
var lastElement = document.getElementById("lastElement");
var tray = document.getElementById("tray");
var again = document.getElementById("again");
first.value = Math.floor(Math.random() * 10)+10;
second.value = Math.ceil(Math.random() * 9);
reset.addEventListener("click",function(){
    window.location.reload();
})
var count = 0;
check.addEventListener("click",function(){
    count++;
    console.log(count);
if(count<10){
    if(Number(first.value) / Number(second.value) == answer.value){
        bien.style.display = "block";
        btns.style.marginBottom = "10px";
        strong.innerHTML = Number(strong.innerHTML) + 3;
        btns.style.display = "none";
        setTimeout(function(){
            bien.style.display = "none";
            btns.style.marginBottom = "0px";
            first.value = Math.floor(Math.random() * 10)+10;
            second.value = Math.floor(Math.random() * 10);
            answer.value = 0;
            btns.style.display = "block";
        },2000);
    }
    else{
          error.style.display = "block";
          btns.style.marginBottom = "10px";
          strong.innerHTML = Number(strong.innerHTML) - 1;
          correct.innerHTML = (Number(first.value) / Number(second.value)).toFixed(2);
          btns.style.display = "none";
          setTimeout(function(){
            error.style.display = "none";
            error.style.marginBottom = "0px";
            first.value = Math.floor(Math.random() * 10)+10;
            second.value = Math.floor(Math.random() * 10);
            btns.style.display = "block";
        },2000);
    }
}
else{
        score_result.innerHTML = strong.innerHTML;
        lastElement.style.display = "block";
        setTimeout(function(){
            lastElement.style.display = "none";
            tray.style.display = "block";   
            var j = 6;
            setInterval(function(){
                   j = j-1
                   again.innerHTML = j;
                   if(j==0){
                      window.location.reload();
                   }
            },1000);
        },2000)
}
})



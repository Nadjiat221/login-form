


function login(){
    var center = document.getbyclass('center');
    var output1= document.getElementById("output1");
    var output2 = document.getElementById("output2");
    output1.innerHTML = "please enter your name";
    output2.innerHTML = "please enter your email";

    if(center.value == ''){
        output1.style.color= "red";
        fullname.style.border ='1px solid rgb(219, 28, 133)';
    }
    var output1 =document.querySelector("#output1");
   
    var output2 =document.querySelector("#output2");
    output2.style.color = "red";
    

}
// function test(e){
//     e.preventDefault();
//     var listcontainer= document.querySelector('#list');
//     listcontainer.innerHTML='hhey';
// }

// var submitbtn = document.getElementById("submit");
// submitbtn.addEventListener("click",test);
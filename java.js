
// document.getElementById("ok").addEventListener("click", function (){
//     localStorage.fistName=document.getElementById('input1').value;
// });

// function confr(){
//     document.getElementById('span2').innerHTML=localStorage.fistName;
// }

document.getElementById("ok").addEventListener("click", function(){
    localStorage.yes= document.getElementById('input1').value;
});

function confr(){
    document.getElementById("span2").innerHTML=localStorage.yes;
}
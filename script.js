$("button").click(function(){
    var colorPick= $(".colorPick").val();
    var wholeNumber =$(".wholeNumber").val();
if(colorPick==="red" && wholeNumber<=5) {
    alert(" You are Hannah");
}

else if(colorPick==="red" && wholeNumber >5){
  alert("You are Oliver");
}
else if(colorPick==="blue" && wholeNumber<=5) {
    alert("You are Lilly");
}
else if(colorPick==="blue" && wholeNumber>5) {
    alert("You are Jackson"); 
}
else {
    $(".message").html("Please Enter correct Information");
}
});

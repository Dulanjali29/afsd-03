//console.log("run");
$(document).ready(function(){
console.log("Jquery...");

})

$("#button").click(function(){
    $('.view').hide();

})
$("#button-view").click(function(){
    $('.view').show();

})

//task-1
$(document).ready(function(){
    $('.nav-About,.nav-detail,.nav-price').hide();
    
    })
$("#home").click(function(){

    $('.nav-About,.nav-detail,.nav-price').hide();
  $('.nav-Home').show();

})
$("#about").click(function(){
    $('.nav-Home,.nav-detail,.nav-price').hide();
 $('.nav-About').show();

})
$("#detail").click(function(){
    $('.nav-Home,.nav-About,.nav-price').hide();
    $('.nav-detail').show();

})
$("#price").click(function(){
    $('.nav-Home,.nav-About,.nav-detail').hide();
    $('.nav-price').show();

})

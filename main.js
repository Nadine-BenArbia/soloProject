//dropDown
$("#shoppingCart").click(function(){
    $(".dropdown").show()
    console.log("this",$("#order"))
})
$("#closeDrop").click(function(){
    $(".dropdown").hide()
    console.log("this",$("#order"))
})
// personal info
$("#order").click(function(){
    $(".formContainer").show()
    console.log("this",$("#order"))
})

$("#closeIcon").click(function(){
    $(".formContainer").hide()
    console.log($("#closeIcon"))
})
// shopping cart 
var allCookies = document.getElementsByClassName("cookie")
console.log("coookie",{allCookies})

allCookies.Onclick=function  (){
   // cookisList.push({allCookies.name,allCookies.price})
}
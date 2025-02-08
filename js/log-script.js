var first=document.querySelector("#form-login #fr-name")
var last=document.querySelector("#form-login #la-name")
var email_user=document.querySelector("#form-login #email")
var passwprd_user=document.querySelector("#form-login #password")
var send=document.querySelector("#form-login #send-btn")
var fill=document.querySelector("#note #alert-fill")
var help=document.querySelector("#note #helpp")
var short_alert=document.querySelector("#note #short")


 
send.addEventListener("click",function(r){
    r.preventDefault()
    var len=passwprd_user.value
    var minum=len.length
    if(first.value==""||email_user.value==""||passwprd_user.value==""){
             fill.style.display="block"
        help.style.display="none"
        short_alert.style.display="none"       
    }else if(minum<=4){
        short_alert.style.display="block"
        fill.style.display="none"
        help.style.display="none"
    }else{
        localStorage.setItem("frname",first.value)
        localStorage.setItem("laname",last.value)
        localStorage.setItem("email",email_user.value)
        localStorage.setItem("password",passwprd_user.value)
        setTimeout(function(){
            window.location="register.html"
        })
    }
})
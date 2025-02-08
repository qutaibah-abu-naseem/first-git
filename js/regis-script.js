var regis=document.querySelector("#form-register #reg-send")
var con_email=document.querySelector("#form-register #reg-email")
var con_pass=document.querySelector("#form-register #reg-pass")
var wrong=document.querySelector("#note-reg #wrong-alert")
var fill=document.querySelector("#note-reg #fill-alert")

wrong.style.display="none"
fill.style.display="none"


regis.addEventListener("click",function(f){
    f.preventDefault()
    if(con_email.value==""||con_pass.value==""){
        fill.style.display="block"
        wrong.style.display="none"
    }else{
        if(localStorage.getItem("email")==con_email.value&&localStorage.getItem("password")==con_pass.value){
            setTimeout(function(){
                window.location="file:///C:/Users/DELL/Desktop/project_fullstack/five-project/index.html"
            },1000)
        }else{
            wrong.style.display="block"
            fill.style.display="none"
            con_email.value=""
            con_pass.value=""
        }
        }
})
var parent=document.querySelector("#parent")
var content_name=document.querySelector("#container-name")
var links=document.querySelector("#links #first-log")

/////////////////local
var data=localStorage.getItem("data2")
var data2=JSON.parse(data)

///////////// local value
if(localStorage.getItem("email")){
    content_name.style.display="block"
    content_name.innerHTML=localStorage.getItem("frname")+" " +localStorage.getItem("laname")
    links.style.display="none"

}


function draw(){
    var draw_item=JSON.parse(data).map((item)=>{
        return `
         <div class="card row col-5 text-light ms-5 mt-5 border border-info-1" style=";height: 350px;  background-color: rgba(8, 92, 117, 0.8);">
        <div class="col-3 " style="height: 250px;">
            <img src="${item.img}" class="card-img-top border border-info-1" style="width: 250px; height:300px;margin-left:-24px; border-bottom-right-radius: 5%;" alt="...">
          <div class=" py-2" style="width:150px">
             <h6 class="card-title">title:  ${item.name}</h6>
            </div>
           
        </div>
        <div class="card-body intro" style="width: fit-content;height:100%;">
        <div style="margin:0 120px">
        <p class="card-text">category  :  ${item.categor}</p>
            <p>Price: ${item.price || "N/A"}</p>
          <p class="card-text ps-1 "style="border-top:2px solid white;width:200px;position:absolute">${item.desc}</p>
        </div>
           <div id="even"class="bg-light px-1 bg-opacity-50 border border-primary-1 rounded-1" style="margin:165px  120px;">
            <i class="fa-solid fa-minus text-danger  ms-2"style="cursor: pointer;" onclick="decrease(${item.id})"></i>
          <span class="ms-2 text-black" id="num-prod">${item.number}</span>
         <i id=""  class="fa-solid fa-plus text-success  d-inline"style="cursor: pointer;" onclick="incrise(${item.id})"></i>
            </div>
          <button class="btn btn-danger" style="margin:165px  250px;height:35px" onclick="delet(${item.id})">remove</button>
        </div>
      </div>
        `
        
}
)
parent.innerHTML=`<p>${draw_item}</p>`
temp=draw_item
}


{
  draw()
  var sum=Number(localStorage.getItem("total-price"))
  var l=[]
  l.push(JSON.parse(data))
    var itemIndex=l.find((ind)=>{
      return ind})
}
var total=document.querySelector("#total #total-price")
 



total.innerHTML=sum
  function incrise(id){
   var index=data2.map((item)=>item.id).indexOf(id)
   data2[index].number+=1
   var draw_item=data2.map((item)=>{
    return `
      <div class="card row col-5 text-light ms-5 mt-5 border border-info-1" style=";height: 350px;  background-color: rgba(8, 92, 117, 0.8);">
        <div class="col-3 " style="height: 250px;">
            <img src="${item.img}" class="card-img-top border border-info-1" style="width: 250px; height:300px;margin-left:-24px; border-bottom-right-radius: 5%;" alt="...">
          <div class=" py-2" style="width:150px">
             <h6 class="card-title">title:  ${item.name}</h6>
            </div>
           
        </div>
        <div class="card-body intro" style="width: fit-content;height:100%;">
        <div style="margin:0 120px">
        <p class="card-text">category  :  ${item.categor}</p>
            <p>Price: ${item.price || "N/A"}</p>
          <p class="card-text ps-1 "style="border-top:2px solid white;width:200px;position:absolute">${item.desc}</p>
        </div>
           <div id="even"class="bg-light px-1 bg-opacity-50 border border-primary-1 rounded-1" style="margin:165px  120px;">
            <i class="fa-solid fa-minus text-danger  ms-2"style="cursor: pointer;" onclick="decrease(${item.id})"></i>
          <span class="ms-2 text-black" id="num-prod">${item.number}</span>
         <i id=""  class="fa-solid fa-plus text-success  d-inline"style="cursor: pointer;" onclick="incrise(${item.id})"></i>
            </div>
          <button class="btn btn-danger" style="margin:165px  250px;height:35px" onclick="delet(${item.id})">remove</button>
        </div>
      </div>
    `
}
)
parent.innerHTML=`<p>${draw_item}</p>`
sum+=Number(data2[index].price)
total.innerHTML=sum

  }



  ///decrement
  function decrease(id){
    var index=data2.map((item)=>item.id).indexOf(id)
    data2[index].number-=1
    if(data2[index].number<1){
       data2[index].number=1
       total.innerHTML=sum
    }else{
      sum-=Number(data2[index].price)
  total.innerHTML=sum
    }
  total.innerHTML=sum
   var draw_item=data2.map((item)=>{
    return `
    <div class="card row col-5 text-light ms-5 mt-5 border border-info-1" style=";height: 350px;  background-color: rgba(8, 92, 117, 0.8);">
        <div class="col-3 " style="height: 250px;">
            <img src="${item.img}" class="card-img-top border border-info-1" style="width: 250px; height:300px;margin-left:-24px; border-bottom-right-radius: 5%;" alt="...">
          <div class=" py-2" style="width:150px">
             <h6 class="card-title">title:  ${item.name}</h6>
            </div>
           
        </div>
        <div class="card-body intro" style="width: fit-content;height:100%;">
        <div style="margin:0 120px">
        <p class="card-text">category  :  ${item.categor}</p>
            <p>Price: ${item.price || "N/A"}</p>
          <p class="card-text ps-1 "style="border-top:2px solid white;width:200px;position:absolute">${item.desc}</p>
        </div>
           <div id="even"class="bg-light px-1 bg-opacity-50 border border-primary-1 rounded-1" style="margin:165px  120px;">
            <i class="fa-solid fa-minus text-danger  ms-2"style="cursor: pointer;" onclick="decrease(${item.id})"></i>
          <span class="ms-2 text-black" id="num-prod">${item.number}</span>
         <i id=""  class="fa-solid fa-plus text-success  d-inline"style="cursor: pointer;" onclick="incrise(${item.id})"></i>
            </div>
          <button class="btn btn-danger" style="margin:165px  250px;height:35px" onclick="delet(${item.id})">remove</button>
        </div>
      </div>
    `
}
)
console.log(data2[index].number)
parent.innerHTML=`<p>${draw_item}</p>`
  }










  ////////////////delet
  function delet(id){
    var index=data2.map((ele)=>{return ele.id}).indexOf(id)
//    ///// 
sum-=(Number(data2[index].price)*(data2[index].number))
total.innerHTML=sum
//    //////////for price
   data2.splice(index,1)
// //    ////////////////// to delete from object
   var drawDeleted=data2.map((item)=>{
    return `
     <div class="card row col-5 text-light ms-5 mt-5 border border-info-1" style=";height: 350px;  background-color: rgba(8, 92, 117, 0.8);">
        <div class="col-3 " style="height: 250px;">
            <img src="${item.img}" class="card-img-top border border-info-1" style="width: 250px; height:300px;margin-left:-24px; border-bottom-right-radius: 5%;" alt="...">
          <div class=" py-2" style="width:150px">
             <h6 class="card-title">title:  ${item.name}</h6>
            </div>
           
        </div>
        <div class="card-body intro" style="width: fit-content;height:100%;">
        <div style="margin:0 120px">
        <p class="card-text">category  :  ${item.categor}</p>
            <p>Price: ${item.price || "N/A"}</p>
          <p class="card-text ps-1 "style="border-top:2px solid white;width:200px;position:absolute">${item.desc}</p>
        </div>
           <div id="even"class="bg-light px-1 bg-opacity-50 border border-primary-1 rounded-1" style="margin:165px  120px;">
            <i class="fa-solid fa-minus text-danger  ms-2"style="cursor: pointer;" onclick="decrease(${item.id})"></i>
          <span class="ms-2 text-black" id="num-prod">${item.number}</span>
         <i id=""  class="fa-solid fa-plus text-success  d-inline"style="cursor: pointer;" onclick="incrise(${item.id})"></i>
            </div>
          <button class="btn btn-danger" style="margin:165px  250px;height:35px" onclick="delet(${item.id})">remove</button>
        </div>
      </div>
    `
}
)
parent.innerHTML=`<p>${drawDeleted}</p>`


}



//favor item
var favor_data=JSON.parse(localStorage.getItem("favor-choose"))
var favor=document.querySelector(".favor")
var wrapper=document.querySelector("#swiper #swiper-wrapper")
if(favor_data.length){
  var draw_favor=favor_data.map((ele)=>{
    return`
    <div class="swiper-slide">
                        <img style="width: 320px; " src="${ele.img}">
                        <h3 id="title-img-favo" class="text-light ms-2 mt-3  ">${ele.title}</h3>
                    </div>
    `
  })
  wrapper.innerHTML=draw_favor.join("")
}else{
  favor.style.display="none"


}

var cars = document.querySelector("#swiper-wrapper");
var frimg=cars.querySelectorAll("img")[0]
var allIcon=document.querySelectorAll("#swiper i")
let value=frimg.clientWidth+70
allIcon.forEach(icon=>{
  icon.addEventListener("click",()=>{
    cars.scrollLeft+=icon.id=="icon-left"?-value:value
    icon.classList.add("dragging")
  })
})
let isdrag = false, prevpageX, prevscroll;

const drgstart = (e) => {
  isdrag = true;
  prevpageX = e.pageX;
  prevscroll = cars.scrollLeft;
};

const drg = (e) => {
  if (!isdrag) return; // إذا لم يكن السحب مفعلًا، لا تنفذ الكود
  e.preventDefault(); // لمنع تحديد النص أثناء السحب
  let nowvalue = e.pageX - prevpageX;
  cars.scrollLeft = prevscroll - nowvalue;
  cars.classList.add("dragging");
};

const drgstop = () => {
  cars.classList.remove("dragging");
  isdrag = false; // إنهاء السحب
};

cars.addEventListener("mousedown", drgstart);
document.addEventListener("mousemove", drg); // يجب أن يكون على document لضمان التقاط الحركة
document.addEventListener("mouseup", drgstop); // إنهاء السحب عند رفع الزر
cars.addEventListener("mouseleave", drgstop); // إنهاء السحب عند الخروج من العنصر

// منع السحب الافتراضي على الصور
cars.querySelectorAll('img').forEach((img) => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
});










// let isdrag=false,prevpageX,prevscroll

//   var cars = document.querySelector("#swiper-wrapper");

//   const drgstart=(e)=>{
//     isdrag=true
//     prevpageX=e.pageX
//     prevscroll= cars.scrollLeft
//   }
//   const drg = (e) => {
//     if(!isdrag)return;
//     e.preventDefault()
//    let nowvalue=e.pageX-prevpageX
//    cars.scrollLeft=prevscroll-nowvalue
   
//     };
//     const drgstop=(e)=>{
//       isdrag=false
//     }
//   cars.addEventListener("mouseup", drgstart);
//   cars.addEventListener("mousemove", drg);
//   cars.addEventListener("mousedown", drgstop);




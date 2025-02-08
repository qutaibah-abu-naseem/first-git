var content_name=document.querySelector("#container-name")
var links=document.querySelector("#links #first-log")
var pag_item=document.querySelector("#parent")
var logOut=document.querySelector("#links #log-out")
///////////////////////////////////////////
if(localStorage.getItem("email")){
    content_name.style.display="block"
    content_name.innerHTML=localStorage.getItem("frname")+" " +localStorage.getItem("laname")
    links.style.display="none"
    logOut.style.display="block"
}else{
    content_name.style.display="none"
    links.style.display="block"
    logOut.style.display="none"
}
var temp;
var id_heart;
//////////////////////////////log in
var addBtn=document.querySelector("#add")
var title=document.querySelector("#title")
var price=document.querySelector("#price")
var desc=document.querySelector("#desc")
var categ=document.querySelector("#category")
var url=document.querySelector("#img-url")
var alert1=document.querySelector("#alert-empty")
var all_inputs=document.querySelectorAll("#inputs .input")
var arry_inputs=Array.from(document.querySelectorAll("#inputs .input"))
var x=0;
var prod=[]
var mode_add=""
alert1.style.display="none"
//////////////////////////variable
addBtn.addEventListener("click",function(){
    var empty=arry_inputs.filter((ele)=>ele.value=="")
   
        if(empty.length){
            empty.forEach((item)=>{
                item.style.border="0.5px solid red"
            })/*foreach*/ 
            alert1.style.display="block"
        }else{
            alert1.style.display="none"
            all_inputs.forEach((ele)=>{
                ele.style.border="0.5px solid aqua"
            })
                // item.style.border="0.5px solid red"
                prod.push({id:++x,name:title.value,price:price.value,desc:desc.value,img:url.value,number:1,categor:categ.value})
                localStorage.setItem("items",JSON.stringify(prod))
                drawing()  
            }
    })
function drawing(){
    var draw=prod.map((item)=>{
        return `
        <div id="card" class="card ms-4 mt-5" style="width: 20rem;height:auto;">
  <img class="card-img-top" style="height: 250px;border-bottom-right-radius:10%" src="${item.img}" alt="${item.name}">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">Category: ${item.categor || "Unknown"}</p>
    <p class="card-text">${item.desc || "No description available."}</p>
    <p>Price: ${item.price || "N/A"}</p>
    <button class="btn btn-primary mt-3" onclick="add(${item.id},this)">Add to Cart</button>
    <div class="favorite-toggle h4"style="transform: translate(260px,-40px);cursor:pointer" onclick="toggleFavorite(this,${item.id})">
      <i class="fa-regular fa-heart heart"></i>
      <i class="fa-solid fa-heart heart-red text-danger d-none"></i>
    </div>
  </div>
</div>`



        
    })
    pag_item.innerHTML=draw
    title.value=""
    price.value=""
    desc.value=""
    url.value=""
    categ.value=""}

    var favor_choose=[]
    var result;
function toggleFavorite(container ,id) {
    const heart = container.querySelector(".heart"); // القلب العادي
    const heartRed = container.querySelector(".heart-red"); // القلب الأحمر
  
    // تبديل العرض بين القلبين
    heart.classList.toggle("d-none");
    heartRed.classList.toggle("d-none");
    if(heart.classList.contains('d-none')){
        var index=prod.map((item)=>{
            return item.id
        }).indexOf(id)
        favor_choose.push({ id: prod[index].id, img: prod[index].img, title: prod[index].name });
        result = favor_choose.filter((item, index, self) => 
        index === self.findIndex(obj => obj.id === item.id)
        
    );
          localStorage.setItem("favor-choose",JSON.stringify(result))   
    }else{
            //    let data=JSON.parse(localStorage.getItem("favor-choose"))
        var index=favor_choose.map((item)=>{
            return item.id
        }).indexOf(id)
        favor_choose.splice(index,1)
        localStorage.setItem("favor-choose",JSON.stringify(favor_choose))

    }

  }
          
  






////////////////////event111111
var content_add=document.querySelector("#container-add")
var choosenItem=[]
///////////////////////variable
var all_p=document.querySelector("#container-prod #bag-item")
var numOf=document.querySelector("#container-prod #bag-item #num-prod")
var counter=document.querySelector("#counter")
var icon_view=document.querySelector("#icon-all-prod")
// icon_view.style.display="none"
// counter.style.display="none"
/////////////////////
var sum=0
var count=0
counter.style.display="none"
icon_view.style.display="none"
function add(id,element){
  if(localStorage.getItem("email"))
  {
    content_add.style.display="none"
    var choose=prod.find((goods) =>goods.id==id)
    choosenItem=[...choosenItem,choose]
    temp=choosenItem
    localStorage.setItem("data2",JSON.stringify(temp))
    localStorage.setItem("choosen",JSON.stringify(choosenItem))
    all_p.innerHTML=temp.map((ele)=>{
        return`
        <p class="d-block"><span id="name-prod">${ele.name }
        <i class="fa-solid fa-minus text-danger ms-2 "style="cursor: pointer;" onclick="decrease(${choose.id},this)"></i>
        <span class="ms-2" id="num-prod">${ele.number}</span>
        <i  class="fa-solid fa-plus text-success ms-2"style="cursor: pointer;" onclick="incrise(${ele.id})"></i></p>
        `
    }).join('')
              
            //   if(num_prod.length==0){
            //     icon_view.style.display="none"
            //     counter.style.display="none"
            // }else{
            //     counter.style.display="block"
            //     icon_view.style.display="block"
            //     counter.innerHTML=num_prod.length
            // }

            counter.innerHTML=++count
            settotal(choose.id)
            ///////////////////////
            var index=temp.map((item)=>item.id).indexOf(id)
            console.log(index)
            element.textContent="remove"
            element.classList.add('bg-danger')
            element.style.border="0.5px solid gray" 


            element.onclick=function(){
                console.log(element.textContent)
                  if(element.textContent=="remove"){
                    temp.splice(index,1)
                    localStorage.setItem("data2",JSON.stringify(temp))
                    all_p.innerHTML=temp.map((ele)=>{
                        return`
                        <p class="d-block"><span id="name-prod">${ele.name }
                        <i class="fa-solid fa-minus text-danger ms-2 "style="cursor: pointer;" onclick="decrease(${choose.id},this)"></i>
                        <span class="ms-2" id="num-prod">${ele.number}</span>
                        <i  class="fa-solid fa-plus text-success ms-2"style="cursor: pointer;" onclick="incrise(${ele.id})"></i></p>
                        `
                    }).join('')
                        element.textContent="Add to cart"
                        element.classList.remove('bg-danger')
                        element.classList.add('bg-primary')
                        element.style.border="0.5px solid gray"
                        counter.innerHTML=--count
                     }else{
                        var choose_tow=prod.find((goods) =>goods.id==id)
                        console.log(choose_tow)
                        temp.push(choose_tow) 
                        localStorage.setItem("data2",JSON.stringify(temp))
                        all_p.innerHTML=temp.map((ele)=>{
                            return`
                            <p class="d-block"><span id="name-prod">${ele.name }
                            <i class="fa-solid fa-minus text-danger ms-2 "style="cursor: pointer;" onclick="decrease(${choose.id},this)"></i>
                            <span class="ms-2" id="num-prod">${ele.number}</span>
                            <i  class="fa-solid fa-plus text-success ms-2"style="cursor: pointer;" onclick="incrise(${ele.id})"></i></p>
                            `
                        }).join('')
                         element.textContent="remove"
                            element.classList.add('bg-danger')
                            element.style.border="0.5px solid gray"
                            counter.innerHTML=++count
                    }
            }
            if(count>=0){
                counter.style.display="block"
            icon_view.style.display="block"
              }else{
                counter.style.display="none"
                icon_view.style.display="none"
              }
            }
           
  else{
    window.location="file:///C:/Users/DELL/Desktop/project_fullstack/five-project/pages/login.html"
  }} 
  
  
    ///////////////////////////////even 2222222 incrise
    var data2=localStorage.getItem("data2")
    function settotal(id){
     var index=temp.map((ele)=>{
            return ele.id
        }).indexOf(id)
        sum+=Number(temp[index].price)
       localStorage.setItem("total-price",sum)
    }

    ///////////////////
    function incrise(id){
        temp.map((count)=>{
            count.price
        })
     var index=temp.map((item)=>{return item.id}).indexOf(id)
     temp[index].number+=1
     var lastDraw=temp.map((ele)=>{
        return ` <p class="d-block"><span id="name-prod">${ele.name}</span>
        <i class="fa-solid fa-minus text-danger ms-2"style="cursor: pointer;" onclick="decrease(${ele.id})"></i>
        <span class="ms-2" id="num-prod">${ele.number}</span>
        <i  class="fa-solid fa-plus text-success ms-2"style="cursor: pointer;" onclick="incrise(${ele.id})"></i></p>`
     })
     var T=lastDraw.join("")
     all_p.innerHTML=T
     localStorage.setItem("data2",JSON.stringify(temp))
     sum+=Number(temp[index].price)
     console.log(sum)
     localStorage.setItem("total-price",sum)


        }
       
        ///// decrement

    function decrease(id){
        var index=temp.map((item)=>{return item.id}).indexOf(id)
        if(temp[index].number<=1){
           delete_add(id)
        }else{
            temp[index].number-=1
            sum-=Number(temp[index].price)
            console.log(sum)
     localStorage.setItem("total-price",sum)
     console.log(temp[index].number)
        }
         
        var lastDraw=temp.map((item)=>{return ` <pclass="d-none">
            <span id="name-prod">${item.name}</span>
        <i class="fa-solid fa-minus text-danger ms-2"style="cursor: pointer;" onclick="decrease(${item.id},this)"></i>
        <span class="ms-2" id="num-prod">${item.number}</span>
        <i  class="fa-solid fa-plus text-success"style="cursor: pointer;" onclick="incrise(${item.id})"></i></p>`
        })
        all_p.innerHTML=lastDraw.join("")
        localStorage.setItem("data2",JSON.stringify(temp))
        

    }    
    
        
function delete_add(id){
var index=temp.map((item)=>item.id).indexOf(id)
sum-=Number(temp[index].price)
localStorage.setItem("total-price",sum)
temp.splice(index,1)
console.log(sum)
localStorage.setItem("data2",JSON.stringify(temp))
var redraw=temp.map((item)=>{
    return`
    <pclass="d-none">
            <span id="name-prod">${item.name}</span>
        <i class="fa-solid fa-minus text-danger ms-2"style="cursor: pointer;" onclick="decrease(${item.id},this)"></i>
        <span class="ms-2" id="num-prod">${item.number}</span>
        <i  class="fa-solid fa-plus text-success"style="cursor: pointer;" onclick="incrise(${item.id})"></i></p>
    `
})
all_p.innerHTML=redraw
if(temp.length==0){
    icon_view.style.display="none"
    counter.style.display="none"
    sum=0
localStorage.setItem("total-price",sum)
}else{
    counter.style.display="block"
    icon_view.style.display="block"
    counter.innerHTML=temp.length
}

}

/////////////////////////////////////////cart shop
var content_prod=document.querySelector("#container-prod")
var btn_add=document.querySelector("#create-add")
content_add.style.display="none"
content_prod.style.display="none"

icon_view.onclick=function(){
    if(content_prod.style.display=="none"){
        content_prod.style.display="block"
        content_add.style.display="none"
    }else{
        content_prod.style.display="none"
    }
}
btn_add.onclick=function(
){
    if(content_add.style.display=="none"){
        content_prod.style.display="none"
        content_add.style.display="block"
    }else{
        content_add.style.display="none"
    }
}
/////////////////////////////
var btn_all_brod=document.querySelector("#all-prod")
btn_all_brod.addEventListener("click",function(g){
    g.preventDefault()
    setTimeout(function(){
        window.location="file:///C:/Users/DELL/Desktop/project_fullstack/five-project/pages/choose-product.html"
    })
},1000)
//////////////////////search
var title_search=document.querySelector("#sec-search #title")
var change=document.querySelector("#change-icon")
var listOf_moode=document.querySelector("#moodes")
var moodes=document.querySelectorAll("#moodes p")
var search_inpt=document.querySelector("#sec-search #search")

var moode=title_search.value
change.onclick=function(){
listOf_moode.style.display="block"
moodes.forEach((tag)=>{
    tag.onclick=function(){
        title_search.value=tag.textContent
        moode=title_search.value
        listOf_moode.style.display="none"
        search_inpt.value=""
    }
})
} 
function search(value){
    if(moode=="search by name"){
        var result=prod.filter((every)=>every.name.includes(value))
        console.log(result)
        console.log(moode)
        var draw=result.map((item)=>{
            return `
             <div class="card ms-4 mt-5" style="width: 18rem;">
                        <img  class="card-img-top"style="height: 250px;"  src="${item.img}">
                        <div class="card-body">
                          <h5 class="card-title">${item.name}</h5>
                          <p class="card-text">category is :  ${item.categor}</p>
                          <p class="card-text">${item.desc}</p>
                          <p>price:${item.price}</p>
                          <p href="" class="btn btn-primary" onclick="add(${item.id})">add to cart</p>
                        </div>
                      </div>
            `
        })
       
        pag_item.innerHTML=draw

    }else if(moode=="search by category"){
        var result=prod.filter((every)=>every.categor.includes(value))
        console.log(result)
        console.log(moode)
        var draw=result.map((item)=>{
            return `
             <div class="card ms-4 mt-5" style="width: 18rem;">
                        <img  class="card-img-top"style="height: 250px;"  src="${item.img}">
                        <div class="card-body">
                          <h5 class="card-title">${item.name}</h5>
                           <p class="card-text">category is :  ${item.categor}</p>
                          <p class="card-text">${item.desc}</p>
                          <p>price:${item.price}</p>
                          <p href="" class="btn btn-primary" onclick="add(${item.id})">add to cart</p>
                        </div>
                      </div>
            `
        })
       
        pag_item.innerHTML=draw
    }
   
}

var out=document.querySelector("header #log-out")
out.onclick=function(){
    setTimeout(() => {
        window.location="file:///C:/Users/DELL/Desktop/project_fullstack/five-project/pages/login.html"
        localStorage.clear()
    }, 500);
}

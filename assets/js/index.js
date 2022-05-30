$(".card").isotope({
    itemSelector:".test",
    layoutMode: 'fitRows'
})

$(".my-list li").click(function(){
//   $(".my-list li").removeClass("active");
//   $(this).addClass("active");

   var selector = $(this).attr("data-filter");
   $(".card").isotope({
      filter:selector
})
})

let buttons=document.getElementsByClassName('add-to-card');
[...buttons].forEach(btn=>{
    btn.onclick=function (e) {
        let id=this.parentElement.parentElement.getAttribute("data-id");
        let title=this.previousElementSibling.innerText;
        let price=this.nextElementSibling.innerHTML;
        let img=this.parentElement.previousElementSibling.firstElementChild.getAttribute("src");
        
        let obj={
            id:id,
            title:title,
            price: price,
            img:img,
            count:1
        }
        addBasket(obj);
    }
})

function addBasket(obj) {
    let basket=localStorage.getItem('basket');
        if (basket==null) {
            let basketArr=[obj];
            localStorage.setItem('basket',JSON.stringify(basketArr));
        }
        else{
            let basketArr=JSON.parse(basket);
            let isExist=basketArr.find(ob=>ob.id==obj.id);
            if(isExist===undefined){
                basketArr.push(obj);
            }
            else{
                isExist.count+=1;
            }
            localStorage.setItem('basket',JSON.stringify(basketArr));
        }
        
}
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
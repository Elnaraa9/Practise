$(".test").isotope({
    itemSelector:".nested-card",
    layoutMode: 'fitRows'
})

$(".my-list li").click(function(){
//   $(".my-list li").removeClass("active");
//   $(this).addClass("active");

   var selector = $(this).attr("data-filter");
   $(".test").isotope({
      filter:selector
})
})
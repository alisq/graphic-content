$("#menu a").click(function(e){
  e.preventDefault();
  destination = $(this).attr("href")
  
  fromTop = $(window).height()/10

  $(document).scrollTo(destination,{
      duration:400,
      offset:{top:-fromTop}
  })

  setTimeout(function(){
      window.location.hash=destination;
  },200)
})


$(".name").hover(function(){
  $(".bio").remove();
  $("<div class='bio'></div>")
      .html("<p>"+$(this).data("bio")+"</p>")
      .appendTo( $(this).data("session") )
      .css({"opacity":1})
  })

      


  $(document).on("mouseout",".bio",function(){
      $(this).remove();
  })
$(document).ready(function(){
      $('.wraper').slick({
        arrows:true
      });

      $(".toggleMobMenu").on("click",function(){
		$(".headerCont").stop().slideToggle();
	});

    });


	
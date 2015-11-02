function closeCarousel(){
  var carouselContainer = document.body.querySelector('#carouselContainer');
  carouselContainer.setAttribute('style','display:none');
  var features = document.body.querySelector('#features');
  features.setAttribute('style','display:block');
}
function showCarousel(idx){
  var index = parseInt(idx);
  var carouselContainer = document.body.querySelector('#carouselContainer');
  carouselContainer.setAttribute('style','display:block');
  var features = document.body.querySelector('#features');
  features.setAttribute('style','display:none');
  var carousel = document.body.querySelector('#myCarousel');
  var item = carousel.getElementsByClassName('item active');
  item[0].setAttribute('class','item');
  var carouselItems = carousel.getElementsByClassName('item');
  carouselItems[index].setAttribute('class', 'item active');
}
$( ".cycle-big li" ).on( "click", function(e) {
	e.stopPropagation();
	$(".cycle-big li").removeClass('selected');
	$(".cycle-big li").css('opacity','.2');
	$(this).addClass('selected');
	$(this).css('opacity','1');
	$('.cycle-big').addClass('active');
	
});

$('html').click(function() {
  $('.cycle-big').removeClass('active');
  $(".cycle-big li").removeClass('selected');
  $(".cycle-big li").css('opacity','1');
});


$(".sec-tabs").on("click", function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$('.sn-expand').hide();
	}else{
		$(".sec-tabs").removeClass('active');
		$(this).addClass('active');

		$('.sn-expand').hide();
		$('.sn-expand.'+$(this).attr('id')+'-tab').show();
	}
});


$('.overlayWrap .hotPanel .btn-d,.overlayWrap .hotPanel .btn-a').click(function(e){
  if ($(window).width() > 992) {
    e.preventDefault();  
    $('.overlay .contain').html($(this).closest('.hotPanel').html());
    $('.overlay').find('.morecontent').show();
    $('.overlay').find('.btn-d,.btn-a').hide();
    var bg = $(this).closest('.hotPanel').css('background-image');
    bg = bg.replace('url(','').replace(')','');  
    $('.overlay').css('background-image','url(' + bg + ')');
    $('.overlay').css('background-size','cover');
    $('.overlay').prepend('<a class="glyphicon glyphicon-remove"></a>');
    $('.overlay').fadeIn('normal');

    $('html,body').animate({
      scrollTop: $('.overlayWrap').offset().top - 10},
      'normal');
  }
  else{


    $(this).css('display','none');
    $(this).siblings('.morecontent').show();
  };
});





$('.overlay').on("click", "a.glyphicon-remove", function() {
  $('.overlay').fadeOut('normal');  
  $('.overlay .glyphicon-remove').remove();
});

$('.menu-mobile-trigger').on("click", function(){
	$(".menu-mobile").toggleClass("mob-on");
	$('.sn-expand').css('display','none');
});


function UpdateTableHeaders() {
 $(".persist-area").each(function() {

   var el             = $(this),
   offset         = el.offset(),
   scrollTop      = $(window).scrollTop(),
   floatingHeader = $(".floatingHeader", this)

   if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
     floatingHeader.css({
      "visibility": "visible"
    });
   } else {
     floatingHeader.css({
      "visibility": "hidden"
    });      
   };
 });
}

// DOM Ready      
$(function() {

 var clonedHeaderRow;

 $(".persist-area").each(function() {
   clonedHeaderRow = $(".persist-header", this);
   clonedHeaderRow
   .before(clonedHeaderRow.clone())
   .css("width", clonedHeaderRow.width())
   .addClass("floatingHeader");

 });

 $(window)
 .scroll(UpdateTableHeaders)
 .trigger("scroll");



//  var svg = document.getElementById("chart"),
//  arcs = svg.querySelectorAll(".arc"),
//  arc;

//  for (var i = 0; i < arcs.length; i += 1) {
//   arc = arcs[i];
//   $(arc).on("click", toggle)
//   .on("mouseenter", function() {
//     var path = $(this).find(".path");
//     path.attr("fill", path.attr("data-hover"));
//   })
//   .on("mouseleave", function() {
//     var path = $(this).find(".path");
//     path.attr("fill", path.attr("data-fill"));
//   });
// }

function toggle(e) {
  var $el = $(this),
  name = $el.attr("data-name"),
  active = svg.querySelector(".arc.focused");
  if (active) {
        // Remove the focused class from svg group
        $(active).attr("class", function(i, c) {
          return c.replace(/\s*focused\s*/, "");
        });
      }
      if (active !== $el[0]) {
        $el.attr("class", function(i, c) {
          return c += " focused";
        });
        // Push the chart element left or right
        $('.chart-popup.shown').removeClass("shown");
        $('.chart-popup.'+name).toggleClass("shown");
        if (name === "architect" || name === "secure" || name === "build") {
          $('#chart-container').removeClass("right").addClass("left");
        } else {
          $('#chart-container').removeClass("left").addClass("right");
        }
      }
      else {
        $('.chart-popup.shown').removeClass("shown");
        $('#chart-container').removeClass("left right");
      }
    }



  });


$(window).scroll(function() {
  var height = $(window).scrollTop();

  if(height  > 30) {

    $('.sticky-body .main-panel-inner').addClass('sticky');

  }
  else{

    $('.sticky-body .main-panel-inner').removeClass('sticky');
  }
});

$(".selectbox").change(function () {
  $("[for='" + $(this).attr("name") + "']").text($(this).find("option:selected").val());
});


$( ".selectbox").select(function() {
  alert( "Handler for .select() called." );
});

$('.cm-box.plan').append($('.chart-popup.plan').html());
$('.cm-box.architect').append($('.chart-popup.architect').html());
$('.cm-box.secure').append($('.chart-popup.secure').html());
$('.cm-box.build').append($('.chart-popup.build').html());
$('.cm-box.manage').append($('.chart-popup.manage').html());


// $('.cm-box.plan').append($('.art.plan tspace').html());


$('.cm-box').on( "click", function(e) {
  $(this).children('.cm-details').toggle();
  $(this).children('h3').toggle();

});


(function ($) {
    // VERTICALLY ALIGN FUNCTION
    $.fn.vAlign = function() {
      return this.each(function(i){
        var ah = $(this).height();
        var ph = $(this).parent().height();
        var mh = (ph - ah) / 2;
        $(this).css('margin-top', mh);
      });
    };

    
 $('.arc').on( "click", function() {
  setTimeout(function(){
    var className = $('#chart-container').attr("class");
    if (className.indexOf("left") !== -1 || className.indexOf("right") !== -1) {
      console.log("open");
      $('.campaign-text').addClass('focus');
    }
    else {

      $('.campaign-text').removeClass('focus');
    }
 }, 10);
 });
  

  })(jQuery);

  $('.cm-box h3').vAlign();


$(document).ready(function(){
  $('.open-icon').on('click',function(){
    $(this).parents('.az-box').find('.content').removeClass('hide');
    $(this).parents('.az-box').find('.text').addClass('opened');
    $(this).parents('.az-box').find('.close-icon').removeClass('hide');
    $(this).addClass('hide');
  });
  $('.close-icon').on('click',function(){
    $(this).parents('.az-box').find('.content').addClass('hide');
    $(this).parents('.az-box').find('.text').removeClass('opened');
    $(this).parents('.az-box').find('.open-icon').removeClass('hide');
    $(this).addClass('hide');
  });
})



 var _gaq = _gaq || [];
 _gaq.push(['_setAccount', 'UA-48263479-1' ]); 
//#'UA-48086474-1']);
 _gaq.push(['_trackPageview']);

 (function() {
   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
 })();

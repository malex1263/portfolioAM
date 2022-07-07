(function navWindow() {
	
	$('.nav-window').click(function(e){
      var target = this.getBoundingClientRect();
      var x = e.clientX - target.left;
      var y = e.clientY - target.top;
      var result = $('#coord-click').html(x + ', ' + y);

      $('.nav-window_tooltip:not(.selected)').css({
         'top': y,
         'left': x
      });
   });


   $(".nav-window_tooltip").hide();

   $(".item").click(function(e){
   		e.preventDefault();

      if ($(".item").length = 1) {

        $(".nav-window_tooltip").show(200); 

        let data_title = $(this).attr('datta-title');
        let data_link = $(this).attr('data-link');
        let data_id = $(this).attr('data-id');

        $(".nav-window_tooltip .nav-window_tooltip__title").text(data_title);
        $(".nav-window_tooltip").attr("id", data_id);
      }
   });

   $(document).mouseup(function (e){ 
      var obgect = $(".obgect"); 
      if (!obgect.is(e.target) 
        && obgect.has(e.target).length === 0) { 
        $(".nav-window_tooltip").hide(); 
      }
   });


  //=== content appearance events ==========
  $(".nav-window_tooltip").click(function() {
    $('body').addClass('window-open');
  });

  $('.close-window').click(function() {
    $(".nav-window_tooltip").removeClass('selected');
    $('.window-content').removeClass('open');
    $('body').removeClass('window-open');
  });

  $(".nav-window, .window-content").on('click', '#item_about', function() {
    $(this).addClass('selected'); 
    $('.window-content_about').addClass('open').siblings('.window-content').removeClass('open');
  });

  $(".nav-window, .window-content").on('click', '#item_contacts', function() {
    $(this).addClass('selected'); 
    $('.window-content_contacts').addClass('open').siblings('.window-content').removeClass('open');
  });

  $(".nav-window, .window-content").on('click', '#item_works', function() {
    $(this).addClass('selected'); 
    $('.window-content_works').addClass('open').siblings('.window-content').removeClass('open');
  });

  //=== nav windows ==========



})(jQuery);




// $.get( "fragments/header.html", function( data ) {
// 	$("#header").replaceWith(data);
// });
// 	$.get( "fragments/footer.html", function( data ) {
// 	$("#footer").replaceWith(data);
// });
$('body').on('click', '.hamburger', function(){
	$('header').toggleClass('nav--open');
});

(function ($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

	$.fn.visible = function (partial) {

		var $t = $(this),
			$w = $(window),
			viewTop = $w.scrollTop(),
			viewBottom = viewTop + $w.height(),
			_top = $t.offset().top,
			_bottom = _top + $t.height(),
			offset = $t.height() * 0.8,
			compareTop = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top + offset  : _bottom;

		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

	};

})(jQuery);

function retrieveGetParameter(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function preloadImages(images){
	var p = window.location.protocol,
		h = window.location.hostname,
		url = p + "//" + h + "/";
	images.forEach(function(img){
		var i = new Image();
    i.src = url + img;
	});
}


var top1 = $('#facts').offset().top;
var top2 = $('#services').offset().top;
var top3 = $('#about').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {
    $('#change').css('background-color', '#fff');
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('#change').css('background-color', 'rgb(236, 0, 0)');
  } else if (scrollPos >= top3) {
    $('#change').css('background-color', 'rgb(236, 0, 0)');
  }
})(jQuery);
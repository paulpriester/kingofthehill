function mutedVideo () {
var myVideo =  iframe.getElementsByTagName('iframe');
for(x in myVideo ) {
	myVideo[x].mute();
}

}

$(document).ready(function(){
  		$(window).resize(function(){
			    var footerHeight = $('.footer').outerHeight();
			    var stickFooterPush = $('.push').height(footerHeight);
		
    			$('.wrapper').css({'marginBottom':'-' + footerHeight + 'px'});
		    });
		
    		$(window).resize();
	    });
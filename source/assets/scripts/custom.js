﻿var preventOrphans = function(element) {
	//Would suggest this is used for title text mainly
	$('p').each(function(){
	    var string = $(this).html();
	    string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
	    $(this).html(string);
	});
}
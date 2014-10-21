'use strict';

function confusalator (a,b,c,d) {
	/* params:
		a = username before @
		b = domain host name before the extension
		c = domain extension
		d = bool: true ? generate the entire anchor and echo the email address : just return the mailto:address href
	*/
	var obfus = '',
		thehref = 'mai';
	thehref += 'lto';
	thehref += ':';
	thehref += a;
	thehref += '@';
	thehref += b;
	thehref += '.';
	thehref += c;
	if (d) {
		// generate the anchor and echo the email address
		obfus = '<a href="';
		obfus += thehref;
		obfus += '">';
		obfus += a;
		obfus += '@';
		obfus += b;
		obfus += '.';
		obfus += c;
		obfus += '<\/a>';
	} else {
		obfus = thehref;
	}
	return obfus;
}

$(document).ready(function(){
	$('a.confusalator').each(function(){
		var a = $(this).data('a'),
			b = $(this).data('b'),
			c = $(this).data('c');
		// replace the anchor's href
		$(this).attr('href',confusalator(a,b,c,0));
		// replace the entire anchor tag and contents
		// $(this).replaceWith(confusalator(a,b,c,0));
	});
});
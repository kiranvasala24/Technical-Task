   // WhatApp API Section
$(document).ready(function() {
    var $whatsapp = $('.whatsapp-section');
    if ($whatsapp.length) {
        var $whatsappBtn = $whatsapp.find('button');
        $whatsappBtn.click(function() {
            var phone = $whatsappBtn.parent().attr('href').replace('tel:', '');
            $whatsappBtn.attr('href', 'https://api.whatsapp.com/send?phone=' + phone);
        });
    }
});

// Scroll to top function
function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

// Show/hide floating button based on scroll position
window.addEventListener('scroll', function() {
	const floatingButton = document.querySelector('.floating-button');
	if (window.pageYOffset > 200) {
		floatingButton.style.display = 'block';
	} else {
		floatingButton.style.display = 'none';
	}
});

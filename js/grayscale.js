/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



var testimonials = [{
    "name": "cederholm",
    "attribution": "John Doe, Some Company",
    "quote": "We\u2019ve been using <a href=\"http://www.apollowebstudio.com\">Apollo Web Studio</a> here at Company Name for years. The services offered have been indispensable to our little company."
}, {
    "name": "lisagor",
    "attribution": "John Doe 2, Another Company",
    "quote": "<a href=\"http://www.apollowebstudio.com\">Apollo Web Studio</a> is the web development company of the FUTURE.  The quality of work they provide for the price is just unmatched and blows the competition out of water or space in thee situation!"
}]


testimonial = testimonials[Math.floor(Math.random() * testimonials.length)];
    document.getElementById("quote-quote").innerHTML = testimonial.quote
    document.getElementById("quote-attrib").innerHTML = testimonial.attribution
    document.getElementById("quote-wrapper").className = testimonial.name
$('.js-accordion-trigger').bind('click', function(e){
  var $submenu = jQuery(this).parent().find('.submenu');
  $submenu.slideToggle('fast');  // apply the toggle to the ul
  // toggle aria attributes
  $submenu.attr('aria-hidden') == 'true' ? 
	 $submenu.attr('aria-hidden', 'false') :
	 $submenu.attr('aria-hidden', 'true');
  jQuery(this).parent().toggleClass('is-expanded');
  e.preventDefault();
});

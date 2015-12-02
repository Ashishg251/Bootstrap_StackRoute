/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function() {

	$('#alertMe').click(function(e) {

		e.preventDefault();

		$('#successAlert').slideDown();

	});

	$('#close').on('click',function(){

		$('#successAlert').slideUp();

	})

	$('a.pop').click(function(e) {
		e.preventDefault();
	});

	$('a.pop').popover();

	$('[rel="tooltip"]').tooltip();

	// // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
  // $('.dropdown').on('show.bs.dropdown', function(e){
  //   $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  // });
	//
  // // ADD SLIDEUP ANIMATION TO DROPDOWN //
  // $('.dropdown').on('hide.bs.dropdown', function(e){
  //   $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  // });

});


$(document).ready( function() {
	var answersLeft = [];
	$('.quiz-wrapper').find('li.option').each( function(i) {
	  var $this = $(this);
	  var answerValue = $this.data('target');
	  var $target = $('.answers .target[data-accept="'+answerValue+'"]');
	  var labelText = $this.html();
	  $this.draggable( {
		revert: "invalid",
		containment: ".quiz-wrapper"
	  });
	  if ( $target.length > 0 ) {
		$target.droppable( {
			accept: 'li.option[data-target="'+answerValue+'"]',
			drop: function( event, ui ) {
				$this.draggable('destroy');
				$target.droppable('destroy');
				$this.html('&nbsp;').css('border','none');
				$target.html(labelText);
			}
		});
	  } else {
		  console.log('asfdsfsd')
	   }
	 });
	 $('.quiz-wrapper button[type="submit"]').click( function() {
		 if ( answersLeft.length > 0 ) {
			  $('.lightbox-bg').show();
		$('.status.deny').show();
		$('.lightbox-bg').click( function() {
				$('.lightbox-bg').hide();
		  $('.status.deny').hide();
		  $('.lightbox-bg').unbind('click');
		});
		 } else {
			  $('.lightbox-bg').show();
		$('.status.confirm').show();
		 }
	 });
  });

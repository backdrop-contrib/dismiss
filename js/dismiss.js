/**
 * @file
 * Main JavaScript file for Dismiss module.
 */

(function($) {

Backdrop.behaviors.dismiss = {
  attach: function(context, settings) {

    // Prepend the Dismiss button to each message box.
    $('.messages').each(function() {
      if ($(this).children().not('.dismiss')) {
        $(this).prepend('<button class="dismiss"><span class="element-invisible">' + Backdrop.t('Close this message.') + '</span></button>');
      }
    });

    // When the Dismiss button is clicked, hide this set of messages.
    $('.dismiss').click(function(event) {
      $(this).parent().hide('fast');
      // In case this message is inside a form, prevent form submission.
      event.preventDefault();
    });

    // Fadeout status messages when positive value defined.
    if (Backdrop.settings.dismiss.fadeout > 0) {
      setTimeout(function() {
        $('.messages.status').fadeOut();
      }, Backdrop.settings.dismiss.fadeout);
    }

  }
};

})(jQuery);

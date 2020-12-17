/**
 * @file
 * Main JavaScript file for Dismiss module.
 */

(function($) {

Backdrop.behaviors.dismiss = {
  attach: function(context, settings) {

    // Prepend a Dismiss link to each message.
    var dismissLink = '<a href="#" class="dismiss" title="' + Backdrop.t('Dismiss') + '"><span class="element-invisible">' + Backdrop.t('Dismiss') + '</span></a>';
    $('.messages').once('dismiss').prepend(dismissLink);

    // When a Dismiss link is clicked, hide the message.
    $('a.dismiss').click(function(event) {
      event.preventDefault();
      hideMessage($(this).parent());
    });

    // Hide status messages automatically.
    if (Backdrop.settings.dismiss.auto_dismiss) {
      setTimeout(function() {
        hideMessage($('.messages.status, .messages.info'));
      }, Backdrop.settings.dismiss.timeout);
    }

    /**
     * Hide a message, and then the messages container (if empty).
     */
    function hideMessage(message) {
      message.fadeOut('fast', function() {
        if ($('.l-messages').children(':visible').size() == 0) {
          $('.l-messages').hide();
        }
      });
    }

  }
};

})(jQuery);

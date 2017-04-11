/**
 * @file
 * Fontawesome field widget.
 */

(function ($) {
  Drupal.behaviors.stanford_field_formatters = {
    attach: function (context, settings) {
      $('.stanford-fontawesome-icon', context).find('option').each(function () {
        if (!$(this).hasClass('icon-added')) {
          var icon = $('<i>', {
            class: 'fa fa-' + $(this).attr('value')
          });
          $(this).addClass('icon-added').prepend(icon);
        }
      });
    }
  }
})(jQuery);

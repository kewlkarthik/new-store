define(['jquery'], function ($) {
    'use strict';

    return function (widget) {
        $.widget('mage.sidebar', widget, {
            _initContent: function () {
                var self = this,
                    events = {};

                this.element.decorate('list', this.options.isRecursive);

                /**
                 * @param {jQuery.Event} event
                 */
                events['click ' + this.options.button.remove] = function (event) {
                    self._removeItem($(event.currentTarget));
                };

                this._on(this.element, events);
                this._calcHeight();
            }
        });

        return $.mage.sidebar;
    };
})

define(
    [
        'lib/jquery', 
        'lib/underscore', 
        'lib/backbone',
        'lib/text!templates/bar.html'
    ], 
    function($, _, Backbone, barViewTemplate) {
        
        return Backbone.View.extend({

            className: 'barView',
            initialize: function() {
            },
            
            render: function() {
                this.$el.html(_.template(barViewTemplate)());
            }
        });
    }
);
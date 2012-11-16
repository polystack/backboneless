define(
    [
        'lib/jquery', 
        'lib/underscore', 
        'lib/backbone',
        'lib/text!templates/foo.html'
    ], 
    function($, _, Backbone, fooViewTemplate) {
        
        return Backbone.View.extend({

            className: 'fooView',
            initialize: function() {
            },
            
            render: function() {
                this.$el.html(_.template(fooViewTemplate)());
            }
        });
    }
);
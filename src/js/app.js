require(
    ['lib/jquery', 'views/fooview', 'views/barview'],
    function($, FooView, BarView) {
        
        //Load the app class and go go go
        console.log('app.js running');
        
        var fooView = new FooView({});
        $('#content').append(fooView.$el);
        fooView.render();

        var barView = new BarView({});
        $('#content').append(barView.$el);
        barView.render();
    }
);
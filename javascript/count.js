var $contador = $("#contador");
var $count = $('.count');
var $flag = 1;
$contador.waypoint(function (direction) {
    if (direction == 'down') {
        if ($flag == 1) {
            $count.each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now) + "+");
                    }
                });
            });
            $flag = 2;
        }
    }


}, {
    offset: '70%'
});

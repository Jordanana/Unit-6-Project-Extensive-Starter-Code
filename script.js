 $(".tapered").hide(); 
$(".tapered-sets").hide();
$(".Story").hide();
$(".Ending").hide();
$(".coffin").hide();

$(".right-button").click(function() {
    $(".tapered").show();
    $(".start").hide();

});


$(".left-button").click(function() {
    $(".start").hide();
    $(".coffin").show();

});
$(".yes-button").click(function() {
    $(".tapered").show();
    $(".start").hide();

});

$(".no-button").click(function() {
    $(".tapered").hide();
    $(".Part-Two-No").show();
});
$(".two-right-button").click(function() {
    $(".tapered-sets").show();
    $(".start").hide();

});

$(".two-left-button").click(function() {
    $(".tapered-sets").hide();
    $(".Part-Two-No").show();
});

$(".two-left-button").click(function() {
    $(".tapered-sets").hide();
    $(".Part-Two-No").show();
});


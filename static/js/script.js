var calculation = "";
var result = "";

function render() {
    $(".upper").html(calculation);
    $(".lower").html(result);
}

$(function(){
    $(".upper").html(calculation);
    $(".lower").html(result);
})

$(".item").click(function(){
    if($(this).html().length === 1 && !$(this).hasClass("answer")){
        calculation += $(this).html();
        render();
    }
})
$(".answer").click(function(){
    result = eval(calculation);
    render();
    calculation = result;
})
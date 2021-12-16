//Sumir com o menu após redmensionar a tela;

// window.addEventListener("resize", function () {
//     var tam = $(window).width();
//     if (tam >= 800) {
//         $("#menuHorizontal").show();
//     } else {
//         $("#menuHorizontal").hide();
//     }
// });


//Scroll
$(document).ready(function () {
    $("#btn_position").click(function () {
        var posicao_btn = $(".scroll").scrollLeft();
        alert(posicao_btn);
    });
});

// // Position();
// $(document).ready(function () {
//     var x = $("img").position();     
//     alert("Top position da imagem: " + x.top + "px. Left position da imagem: " + x.left + "px.");
// })


// // Offset();
// $(document).ready(function () {
//     var x = $("img").offset();
//     alert("Top position da imagem: " + x.top + "px. Left position da imagem: " + x.left + "px.");
// })


//01.
// $(document).ready(function(){
//     $("div").height("500").width("500");
// })

//02.
// $(document).ready(function(){
//     alert($("div").height());
// });

//03
// $(document).ready(function(){
//     alert($("div").innerHeight());
// });
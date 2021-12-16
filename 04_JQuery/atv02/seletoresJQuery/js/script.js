// 1) Selecionar todas as tags h2 e colocar um background verde nos elementos selecionados.
// 2) Selecionar o pai da classe buttons e colocar um background vermelho no elemento selecionado.
// 3) Selecionar os elementos filhos da classe module e colocar como background a cor azul.
// 4) Selecionar o item da lista de índice 2 da classe module utilizando a função eq() e colocar como background a cor verde.
// 5) Selecionar o primeiro elemento da lista myList e colocar como background a cor Amarelo.
// 6) Selecionar o último elemento da lista slideshow e colocar como background a cor preta.
// 7) Verifique se o primeiro elemento filho de Search é um form. Se for, exiba um alert na tela com a mensagem “O elemento form é filho de Search. Caso não seja, exiba um alert na tela com a mensagem “O elemento form não é filho de Search.
// 8) Selecionar todas as listas não ordenadas, exceto a de id slideshow e colocar como background a cor azul.
// 9) Selecionar todos os itens de lista que possuam um parágrafo nele e colocar como background a cor rosa.
// 10) Alterar o conteúdo da tag que possui a classe myListItem para “Este é um novo item de lista”
// 11) Selecionar o próximo elemento após o elemento de classe selected e colocar um background cinza nele.
// 12) Selecionar o elemento anterior ao elemento de classe input_text e colocar um background cinza nele.
// 13) Selecionar todos os irmãos do elemento que possui o id listItem_2 e colocar um background verde nele.
// 14) Selecionar todos os elementos que possuam um atributo src e colocar um background amarelo nele.
// 15) Selecionar dentro do elemento de id header e dentro do id nav, o elemento que contenha a classe selected. (Utilizando um seletor que contenha esse caminho)
// 16) Selecionar todos os elementos que possui o atributo type=”text”.
// 17) Selecionar todos os elementos que possuam o atributo value.
// 18) Selecionar todos os elementos que possuam o atributo type diferente de submit e colocar um background vermelho nele.
// 19) Selecionar todos os elementos que possuam o atributo href que inicia com a palavra blog e colocar um background verde nele.
// 20) Selecionar todos os elementos que possuam o atributo value que terminam com a letra a e colocar um background vermelho nele.
// 21) Selecionar todos os elementos que possuam o atributo href que contenham a palavra html e colocar um background cinza nele.
$(document).ready (function(){
    $("h2").css({
        backgroundColor:"green"
    });

    $(".buttons").parent().css({
        backgroundColor:"red"
    });

    $(".module").has("*").css({
        backgroundColor:"blue"
    });

    $(".module").find("li").eq(2).css({
        backgroundColor:"green"
    });

    $("#myList li").first().css({
        backgroundColor:"yellow"
    });

    $("#slideshow li").last().css({
        backgroundColor:"black"
    });

    if ($("#search").children().first().is("form")) {
        alert("O elemento form é filho de Search");
      }else{
          alert("O elemento form não é filho de Search");
    }  

    $("ul").not("#slideshow").css({
        backgroundColor:"blue"
    });

    $("li").has("p").css({
        backgroundColor:"pink"
    });

    $("#myListItem").text("Este é um novo item de lista");

    $(".selected").next().css({
        backgroundColor:"gray"
    });

    $(".input_text").prev().css({
        backgroundColor:"gray"
    });

    $("#listItem_2").siblings().css({
        backgroundColor:"green"
    });

    $("[src]").css({
        backgroundColor:"yellow"
    });

    $("#header, #nav").find(".selected")
    ;

    $("[type='text']");
    
    $("[value]");

    $("[type]").not("[type='submit']").css({
        backgroundColor:"red"
    });

    $("[href^='blog']").css({
        backgroundColor:"green"
    });

    $("[value$='a']").css({
        backgroundColor:"red"
    });

    $("[href*='html']").css({
        backgroundColor:"gray"
    });
})

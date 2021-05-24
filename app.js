var main = function (toDoObjects){
    "use strict";
    var toDos = toDoObjects.map(function (toDo) {
        // просто возвращаем описание
        // этой задачи
        return toDo.description;
    });
    // сейчас весь старый код должен работать в точности как раньше!
//... все остальное, относящееся к вкладкам
$("document").ready( function(){
$(".tabs a span").toArray().forEach(function (element) {
$(element).on("click", function () {
var $element = $(element),
    $content;
$(".tabs a span").removeClass("active");
$element.addClass("active");
$("main .content").empty();
if ($element.parent().is(":nth-child(1)")) {
    $content = $("<ul>");
    for (var i = toDos.length; i >-1; i--) {
        $content.append($("<li>").text(toDos[i]));
    }
    $("main .content").append($content);
} else if ($element.parent().is(":nth-child(2)")) {
$content = $("<ul>");
toDos.forEach(function (todo) {
$content.append($("<li>").text(todo));
});
$("main .content").append($content);
} else if ($element.parent().is(":nth-child(3)")) {
    // ЭТО КОД ДЛЯ ВКЛАДКИ ТЕГИ
    console.log("щелчок на вкладке Теги");
var organizedByTag = [
    {
        "name": "покупки",
        "toDos": ["Купить продукты "]
        },
        {
        "name": "рутина",
        "toDos": ["Купить продукты", "Вывести Грейси на прогулку в парк "]
        },   
        {
        "name": "работа",
        "toDos": ["Сделать несколько новых задач", "Ответить на электронные письма", "Закончить писать книгу"]
        }   
]
organizedByTag.forEach(function (tag) {
var $tagName = $("<h3>").text(tag.name),
$content = $("<ul>");
tag.toDos.forEach(function (description) {
var $li = $("<li>").text(description);
$content.append($li);
});
$("main .content").append($tagName);
$("main .content").append($content);
});
} else if ($element.parent().is(":nth-child(4)")) {
    $(".content").append(
                '<input type="text" class="inp">'+
                '<button class="btn">Добавить</button>'
            );
            var newToDo;
            $('.btn').on('click',function(){
                newToDo= $('.inp').val();
                if (newToDo!='') {
                    toDos.push( newToDo);
                    alert('Новое задание "'+newToDo+'" успешно добавлено!');
                    $('.inp').val("");
                }
            })
}
    return false;
})
})
    $(".tabs a:first-child span").trigger("click");

})
};
$(document).ready(function () {
    $.getJSON("todos.json", function (toDoObjects) {
    // вызов функции main с аргументом в виде объекта toDoObjects
        main(toDoObjects);
    });
});



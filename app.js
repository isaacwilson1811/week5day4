navItem = $('.navItem');
navItem.each(function(){
    $(this).css("color", "white");
});

nav = $('#nav');
$(nav).css("background-color", "#145")

evenLi = $('li').even();
$(evenLi).css("background-color", "#ccc");

oddLi = $('li').odd();
$(oddLi).css("background-color", "#aaa");

input = $(':input');
$(input).val("Isaac");
// JavaScript Document
$(document).on("click", "#manualAdd",function(e){
	e=window.event || e;
    e.preventDefault();
    var href=$(this).attr("href");
    var url="template/teacher/"+href;
    $.get(url).done(function(response){
        $("#content").html(response);
    });
})

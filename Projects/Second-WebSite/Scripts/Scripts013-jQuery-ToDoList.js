// //Mark Complete with if Statement
// $("li").click(function() {
// 	if($(this).css("color") === "rgb(33, 37, 41)") {
// 		$(this).css({
// 			color: "green",
// 			textDecoration:"line-through"
// 		});
// 	} else {
// 		$(this).css({
// 			color: "rgb(33, 37, 41)",
// 			textDecoration: "none"
// 		});
// 	} 
// });

//OR Mark Complete with toggle class
//Note use the "on" listner to "UI" with "li" as a second argument to listen to future elements
$("ul").on("click","li",function(){
	$(this).toggleClass("markComplete");
})

//Remove To-Do from list
//Note use the "on" listner to "UI" with "span" as a second argument to listen to future elements
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation(); //include this jQuery function to prevent event listerner bubbling from Span --> li --> ul --> container --> body
})

//Add To-Do item to List
$("#toDoItem").keypress(function(event){
	//Check if enter key is entered
	if(event.which === 13) {
		let newToDo = $(this).val()
		//Create new li and add to ul
		$("ul").append(`<li><span>
							<svg class="bi bi-camera" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
	  						<path d="M9 5C7.343 5 5 6.343 5 8a4 4 0 014-4v1z"/>
	  						<path fill-rule="evenodd" d="M14.333 3h-2.015A5.97 5.97 0 009 2a5.972 5.972 0 00-3.318 1H1.667C.747 3 0 3.746 0 4.667v6.666C0 12.253.746 13 1.667 13h4.015c.95.632 2.091 1 3.318 1a5.973 5.973 0 003.318-1h2.015c.92 0 1.667-.746 1.667-1.667V4.667C16 3.747 15.254 3 14.333 3zM1.5 5a.5.5 0 100-1 .5.5 0 000 1zM9 13A5 5 0 109 3a5 5 0 000 10z" clip-rule="evenodd"/>
	  						<path d="M2 3a1 1 0 011-1h1a1 1 0 010 2H3a1 1 0 01-1-1z"/>
							</svg></span> ${newToDo}</li>`)
		$("#toDoItem").val("")
	}
})

function newItem(){

//Add ne item on the To Do List
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
  alert("You must write something!");
} else {
  $('#list').append(li);
}
//strike an item on the To Do List
function crossOut() {
    li.toggleClass("strike");
}

li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
});

//Delete an item on the To Do List

let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

   crossOutButton.on("click", deleteListItem);
   function deleteListItem(){
 		li.addClass("delete")
 	}
   $('#list').sortable();
}
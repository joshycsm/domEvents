const enterButton = document.getElementById("enter");
const enterItemsInput = document.getElementById("user-input");
const ul = document.querySelector("ul");

function inputLength() {
  return enterItemsInput.value.length;
}

function createListElement() {
  const li = document.createElement("li");
  li.append(document.createTextNode(enterItemsInput.value.capitalize()));
  ul.append(li);
  enterItemsInput.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

functon addListAfterKeyPress(event){
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);
enterItemsInput.addEventListener("keypress", function() {
  console.log(event.which);
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
});

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

var addBtn = document.querySelector(".addInput");

addBtn.addEventListener("click", function () {
    var input = document.createElement("input");
    var button = document.createElement("button");
    var div = document.createElement("div");
    button.innerHTML="clear";
  div.style.display = "block";

    document.querySelector(".input").appendChild(div);
    div.appendChild(input);
    div.appendChild(button);

});





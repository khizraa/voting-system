let add = document.querySelector(".fourth-div");
let nmber = document.querySelectorAll(".names-div");

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else {
        let newDiv = document.createElement("div");
        newDiv.className = 'names-div';

        let para = document.createElement("p");
        para.textContent = x;

        let forNum = document.createElement("input");
        forNum.type = "number";
        forNum.step = "1";
        forNum.name = "quantity1";
        forNum.max = "100";
        forNum.value = "0";

        newDiv.appendChild(para);
        newDiv.appendChild(forNum);

        add.appendChild(newDiv);

        document.forms["myForm"]["fname"].value = "";

        newDiv.addEventListener('click', function () {

            forNum.value = String(parseInt(forNum.value) + 1);
        });

        return false;
    }
}

nmber.forEach((nmbers, index) => {
    nmbers.addEventListener("click", function () {
        let forIncrement = nmbers.querySelector('input[name="quantity1"]');
        forIncrement.value = String(parseInt(forIncrement.value) + 1);
    });

});

let quantityInput = document.querySelector('input[name="quantity1"]');
quantityInput.addEventListener('keydown', function (e) {
    e.preventDefault();
});

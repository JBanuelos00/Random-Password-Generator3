//Variables

//setting password length according to customRange1
let passLength = document.getElementById("customRange1");
let lengthDisp = document.getElementById("length");

//getting all necessary check boxes here
let lowCase = document.getElementById("optionLow");
let upCase = document.getElementById("optionUp");
let Nums = document.getElementById("optionNum");
let Symb = document.getElementById("optionSymb");

let passText = document.getElementById("password");
let genPass = document.getElementById("generate");
let copyPasta = document.getElementById("copy");

let passImg = document.getElementById("passImg");
let passSauce = document.getElementById("sauce");


//add event listener to generate password button

genPass.addEventListener("click", function () {

    let options = document.forms[1];
    let passVals = "";
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            passVals = passVals + options[i].value;
        }
    }
    // console.log(passVals);
    //check if any options have been enabled
    if (passVals === "") {

        alert("You need to select at least one set of characters to include in your random password.");

    } else {

        let pass = "";
        //for loop that chooses password characters
        for (i = 0; i <= passLength.value; i++) {
            pass = pass + passVals.charAt(Math.floor(Math.random() * Math.floor(passVals.length - 1)));

            //write the password result to the textbox
            passText.value = pass;
        }
    }
});

//display length display
lengthDisp.innerHTML = "Length:64";

//function to set length text based on the customRange1 value
passLength.oninput = function () {
    if (passLength.value > 0) {
        lengthDisp.innerHTML = "Length: " + passLength.value;

    } else {
        lengthDisp.innerHTML = "Length: 8";
    }
}

//copying password to clipboard
copyPasta.addEventListener("click", function () {
    passText.select();

    document.execCommand("copy");

    alert("Password has been copied to your clipboard.");

});
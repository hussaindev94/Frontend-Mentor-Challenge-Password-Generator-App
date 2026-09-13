
/*
Notes:
1. If the form is empty, then add the "hidde-copy-text" class to hide it.
*/

/*Slider functionality*/
//Select both the slider or range input and the number:
const passwordLength = document.querySelector(".password-length-number");
const passwordLengthSlider = document.querySelector(".password-length-slider");

const sliderEvent = () => {
    const passwordLengthValue = passwordLengthSlider.value
    passwordLength.innerText = passwordLengthValue;

    const min = passwordLengthSlider.min;
    const max = passwordLengthSlider.max;
    const percentage = ((passwordLengthValue - min) / (max - min)) * 100;

    passwordLengthSlider.style.background = `linear-gradient(to right, hsl(127, 100%, 82%) 0%, hsl(127, 100%, 82%) ${percentage}%, hsl(248, 15%, 11%) ${percentage}%, hsl(248, 15%, 11%) 100%)`;
}

passwordLengthSlider.addEventListener("input", sliderEvent);

/*Checkboxes */

const checkboxes = document.querySelectorAll(".checkboxes");
const passwordOptions = [];
const strengthLevel = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
const colors = ["#f74b4b", "#fb7a56", "#f8cb63", "#a3ffae"];
const strengthLevelElement = document.querySelector(".strength-level");
const strengthBars = document.querySelectorAll(".bars");
const generationButton = document.querySelector(".generate-button-container")
const generatedPassword = document.querySelector(".generated-password");
console.log(generatedPassword);

console.log(generationButton)

/*Copy Icon functionality*/
//Select both the text & the icon
const copyText = document.querySelector(".copy");
const copyIcon = document.querySelector(".copy-icon");

const generatePassword = () => {
    //Check if the length and the options lengths are greater then 0
    //If 0 do nothing
    //if > 0 generate the password pased on the length and the options
    //Then change the inner text of the password.
    //then reset the sellections.
    const length = passwordLength.innerText;
    let result = '';
    let options = '';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~|}{[]:;?><,./-=';
    if (passwordLength.innerText > 0 && passwordOptions.length > 0) {
        console.log(length, passwordOptions);

        passwordOptions.forEach(option => {
            switch (option) {
                case "Include Uppercase Letters":
                    options = options.concat(upperCase);
                    break
                case "Include Lowercase Letters":
                    options = options.concat(lowerCase);
                    break
                case "Include Numbers":
                    options = options.concat(numbers);
                    break
                case "Include Symbols":
                    options = options.concat(symbols);
                    break
            }

        })

        for (let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * options.length);
            result += options[randomIndex];
        }
        generatedPassword.innerText = result;
        copyText.classList.add("hidde-copy-text");
    }

}
generationButton.addEventListener("click", generatePassword);



copyIcon.addEventListener("click", () => {
    if (passwordLength.innerText > 0 && passwordOptions.length > 0) {
        copyText.classList.remove("hidde-copy-text");
    }

    navigator.clipboard.writeText(generatedPassword.innerText)
        .then(() => {
            console.log("The paswword has been copied!!")

        }).catch(error => {
            console.error("Failed to copy text", error);
        })
});

const hideStrengthLevel = (length) => {
    for (let i = length; i >= 0; i--){
        strengthBars[i].style.background = "";
    }
}
const showStrengthLevel = (length) => {

    const color = colors[length - 1];

    for (let i = 0; i < length; i++){
        strengthBars[i].style.background = color;
    }
};

const showStrengthText = (optionsArray, strengthArray) => {

    const optionsLength = optionsArray.length;
    if (optionsLength === 0) {
        strengthLevelElement.innerText = "";
    } else {
        strengthLevelElement.innerText = strengthArray[optionsLength - 1];
    }

    showStrengthLevel(optionsLength);

}

const handelPasswordOptions = (e) => {

    if (e.target.checked) {
        passwordOptions.push(e.target.labels[0].textContent);
    }
    if (!e.target.checked) {
        passwordOptions.splice(passwordOptions.indexOf(e.target.labels[0].textContent), 1);
        hideStrengthLevel(passwordOptions.length);
    }

    showStrengthText(passwordOptions, strengthLevel);
}
const checkboxesHnadler = (e) => {
    e.preventDefault();

    handelPasswordOptions(e);
}
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", e => checkboxesHnadler(e));
})

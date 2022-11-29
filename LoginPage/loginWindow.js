function setFormMessage(formElement, type, message) {
    const messageElement  = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message_success", "form_message_error");  // cleaning previous form_message name
    messageElement.classList.add(`form_message_${type}`)    // adding proper class name
}

function setInputError(inputElement, message)   {
    inputElement.classList.add("form_input_error"); // adding message directly to this class
    inputElement.parentElement.querySelector(".form_input_error_message").textContent = message;    // adding text for error message
}

function  clearInputError(inputElement) {
    inputElement.classList.remove("form_input_error");
    inputElement.parentElement.querySelector(".form_input_error_message").textContent = "";
    // cleaning error message by remove previous message and adding empty message
}

document.addEventListener("DOMContentLoaded", () => { // DOMContentLoaded - event started when the initial html document has been completely loaded
    const loginForm = document.querySelector("#login"); // return first element which match to selector - login
    const createAccountForm = document.querySelector("#createAccount"); // return first element which match to selector - createAccount

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>    {    // after click at link with LinkCreateAccount id
        e.preventDefault(); // default action shouldn't be taken if the event doesnt get handled
        loginForm.classList.add("form_hidden"); // adding form_hidden class to loginForm (login id) -> form_hidden = display = none
        createAccountForm.classList.remove("form_hidden");  // remove form_hidden class from createAccount id
    });

    // opposite operation
    document.querySelector("#linkLogin").addEventListener("click", e =>    {
        e.preventDefault();
        createAccountForm.classList.add("form_hidden");
        loginForm.classList.remove("form_hidden");
    });

    loginForm.addEventListener("submit", e => { // after submit show error message in form_message_{type} ("error") class
        e.preventDefault();
        setFormMessage(loginForm, "error", "Invalid username/password");
    });

    document.querySelectorAll(".form_input").forEach(inputElement =>    {   // for all elements form_input
        inputElement.addEventListener("blur", e => {    // addEventListener - allows to register events
            if (e.target.id === "singUsername" && e.target.value.length >0 && e.target.value.length <10)  {
                setInputError(inputElement, "username must be at least 10 characters in lenght");
            }
        });

        inputElement.addEventListener("input", e =>{
            clearInputError(inputElement);
        })

    });
});
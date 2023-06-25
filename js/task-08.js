document.querySelector(".login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let emailInput = this.elements.email;
    let passwordInput = this.elements.password;

    if (emailInput.value === "" || passwordInput.value === "") {
        alert ('Будь ласка, заповніть всі поля.');
    } else {
        let formData = {
            email: emailInput.value,
            password: passwordInput.value
        };

        console.log(formData);
        this.reset();
    }
})

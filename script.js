let addToCartButton = document.querySelector("button");
addToCartButton.addEventListener("click", function() {
    alert("Товар добавлен в корзину");
});
const singUpEl = document.querySelector("#singUP")

const handleSingUpFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(singUpEl);
    const newUser = Object.fromEntries(formData);

    console.log("newUser", newUser)
};

singUpEl.addEventListener("submit", handleSingUpFormSubmit);

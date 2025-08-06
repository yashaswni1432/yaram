function greetUser() {
    const name = document.getElementById("username").value;
    const message = "Hello, " + name + "! 👋";
    document.getElementById("greeting").innerText = message;
}

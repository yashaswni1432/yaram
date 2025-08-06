function greetUser() {
    const name = document.getElementById("username").value;
    const message = "Hello bye, " + name + "! 👋";
    document.getElementById("greeting").innerText = message;
}

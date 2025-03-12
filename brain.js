document.getElementById("clearButton").addEventListener("click", function() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");
});

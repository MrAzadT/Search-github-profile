const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", () => {
  const userInput = document.getElementById("userInput").value;
  console.log(userInput);
  const userName = userInput.split(" ").join("");

  fetch("https://api.github.com/users/" + userName)
    .then((response) => response.json())
    .then((data) => display(data));
});

const display = (user) => {};

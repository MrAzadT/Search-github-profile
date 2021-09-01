const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", (e) => {
  const userInput = document.getElementById("userInput").value;
  console.log(userInput);
  const userName = userInput.split(" ").join("");
  alert(userName);

  fetch("https://api.github.com/users/" + userName)
    .then((response) => response.json())
    .then((data) => console.log(data));
});

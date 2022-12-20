const readmore = document.querySelector(".readmore")
const readmoreText = document.querySelector(".readmore h2")

readmore.addEventListener("click", () => {
  readmoreText.style.color = "dodgerblue"
  readmoreText.innerText = "Loading more..."
  setInterval(() => {
    readmoreText.style.color = "#626972"
    readmoreText.innerText = "Show more"
  }, 3000);
})

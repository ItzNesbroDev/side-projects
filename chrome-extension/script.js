const btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
  const movieName = document.querySelector("input").value;

  if (!movieName) {
    alert("Please type a movie name.");
  } else {
    const res = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=46dd27dc`)
    const resJson = await res.json()  

    const card = document.createElement("div");
    card.classList.add("card", "mt-4");
    card.style.width = "360px";

    const img = document.createElement("img");
    img.alt = "poster";
    img.src =
      resJson.Poster;
    img.classList.add("card-img-top");
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerText = resJson.Title;
    cardBody.appendChild(title);

    const plot = document.createElement("h5");
    plot.classList.add("card-text");
    plot.innerText =
      resJson.Plot;
    cardBody.appendChild(plot);

    card.appendChild(cardBody);
    document.querySelector(".container").appendChild(card);
  }
});

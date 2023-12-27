const title = "Starboard";

const navbarEl = document.createElement("div");
navbarEl.className = "navbar";

const imgEl = document.createElement("img");
imgEl.className = "logo";
imgEl.src = "https://starboard-one.vercel.app/starboard.svg";
imgEl.alt = title;

const btnEl = document.createElement("button");
btnEl.textContent = "Get Started";

btnEl.addEventListener("click", () => {
  navbarEl.style.backgroundColor = "lightcoral";
});

navbarEl.appendChild(imgEl);
navbarEl.appendChild(btnEl);

document.body.appendChild(navbarEl);

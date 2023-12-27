const heroEl = document.createElement("div");

heroEl.className = "hero";
heroEl.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae possimus qui expedita deserunt quos ipsam sapiente? Totam tenetur alias accusantium officia! Impedit delectus explicabo saepe alias accusamus accusantium excepturi, fugiat voluptas nam laudantium dolore omnis itaque officia cumque veritatis autem culpa? Quidem eos recusandae nesciunt, numquam a harum blanditiis velit?";

heroEl.addEventListener("mouseover", () => {
  heroEl.style.color = "red";
});

document.body.appendChild(heroEl);

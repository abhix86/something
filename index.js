const words = [
  " Developer",
  " Learner",
  " Reader",
  " Watcher",
  " Listener",
  " Dreamer",
  " Writer",
  " Wanderer",
];
const value = document.querySelector(".rand-word");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function changeWord() {
  let displayText = "";
  const randomIndex = Math.floor(Math.random() * words.length);
  for (let i = 0; i < words[randomIndex].length; i++) {
    displayText += words[randomIndex][i];
    value.textContent = displayText;
    await wait(500);
  }
}
setInterval(changeWord, 6000);

let isClicked = false;
let isTooltipActive = false;
let isChildOn = false;
const tooltip = document.createElement("div");

document.querySelectorAll("[data-tooltip]").forEach((el) => {
  tooltip.className = "custom-tooltip";

  el.addEventListener("click", () => {
    isClicked = !isClicked;
  });

  el.addEventListener("mouseenter", () => {
    if (el.hasAttribute("true") && isClicked) return;

    tooltip.innerHTML = el.getAttribute("data-tooltip");
    document.body.appendChild(tooltip);

    const rect = el.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
    let top = rect.top - tooltipRect.height - 10;

    if (left < 10) {
      left = 5;
    } else if (left + tooltipRect.width > window.innerWidth - 10) {
      left = window.innerWidth - tooltipRect.width - 10;
    }

    if (top < 10) {
      top = rect.bottom + 10;
    }

    tooltip.style.position = "fixed";
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;

    el._tooltip = tooltip;
  });

  el.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (el._tooltip && !isClicked | isClicked) {
        el._tooltip.remove();
        el._tooltip = null;
      }
    }, 0);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const accBttn = document.querySelector(".acc_bttn");
  let isActive = false;
  const svg = document.querySelector("#acc_svg");
  accBttn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isActive) {
      accBttn.style.cssText = "";
      isActive = false;
      svg.setAttribute("fill", "transparent");
    } else {
      accBttn.style.cssText = "box-shadow: 0 0 60px #3d6fff88; opacity: 0.8;";
      svg.setAttribute("fill", "white");

      isActive = true;
    }
  });

  document.addEventListener("click", () => {
    accBttn.style.cssText = "";
    svg.setAttribute("fill", "transparent");
    isActive = false;
  });
});

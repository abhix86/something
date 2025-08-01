const words = ["Developer", "Learner", "Reader", "Watcher", "Listener", "Dreamer", "Writer", "Wanderer"];
const value = document.querySelector(".rand-word");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeWord() {
  let displayText = ''
  const randomIndex = Math.floor(Math.random() * words.length);
  for (let i = 0; i < words[randomIndex].length; i++) {
    displayText += words[randomIndex][i]
    value.textContent = displayText
    await wait(500)
  }

}

setInterval(changeWord, 5000)


document.querySelectorAll('[data-tooltip]').forEach(el => {
  el.addEventListener('mouseenter', e => {
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    tooltip.innerText = el.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);

    const rect = el.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - 30}px`;

    el._tooltip = tooltip; // store reference
  });

  el.addEventListener('mouseleave', e => {
    if (el._tooltip) {
      el._tooltip.remove();
      el._tooltip = null;
    }
  });
});



const progressCard = document.querySelectorAll('.progress_cards');



function floating() {
  const viewPort = window.innerHeight / 2;
  progressCard.forEach(cards => {
const position = cards.getBoundingClientRect().top;

    if (position < viewPort) {
      cards.style.animation = `floating 1s forwards`;
    }

  })
  
  }

window.addEventListener('scroll', floating);
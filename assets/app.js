const coin = document.getElementById('coin');
const button = document.getElementById('btn-coin');
const resultText = document.getElementById('result');

let flipping = false;
let totalRotation = 0;  // menyimpan total rotasi yang sudah dilakukan

[coin, button].forEach(el => {
  el.addEventListener('click', flipCoin);
});

function flipCoin() {
  if (flipping) return;
  flipping = true;

  const spinCount = 5; // putaran tetap
  const isHeadsFlip = Math.random() < 0.5;
  const rotationThisFlip = 360 * spinCount + (isHeadsFlip ? 0 : 180);

  totalRotation += rotationThisFlip;

  coin.style.transition = 'transform 1s ease-out';
  coin.style.transform = `rotateX(${totalRotation}deg)`;

  setTimeout(() => {
    // Hitung sudut rotasi mod 360
    const normalizedRotation = totalRotation % 360;

    // Kalau sudut 0 atau 360 -> HEAD, kalau 180 -> TAIL
    const isHeadsResult = normalizedRotation === 0;

    resultText.textContent = `Result: ${isHeadsResult ? 'HEAD' : 'TAIL'}`;
    flipping = false;
  }, 1000);
}


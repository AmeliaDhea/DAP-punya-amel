const scrollContainer = document.querySelector('.scroll-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
  scrollContainer.scrollLeft += 50; // Menggulir 50 piksel ke kanan
});

prevBtn.addEventListener('click', () => {
  scrollContainer.scrollLeft -= 50; // Menggulir 50 piksel ke kiri
});

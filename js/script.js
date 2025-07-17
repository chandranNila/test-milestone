
    let index = 0;

    function showSlide(i) {
      const slides = document.getElementById('slides');
      const total = slides.children.length;
      index = (i + total) % total;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      showSlide(index + 1);
    }

    function prevSlide() {
      showSlide(index - 1);
    }

    setInterval(nextSlide, 5000); // Auto-slide every 5s
    window.onload = () => showSlide(index);

    function toggleMenu() {
      document.getElementById("navLinks").classList.toggle("active");
    }



  function toggleButtons(hideId, showId) {
    var text = document.getElementById('text');
    text.classList.toggle('expanded');
    document.getElementById(hideId).style.display = 'none';
    document.getElementById(showId).style.display = 'inline-block';
  }
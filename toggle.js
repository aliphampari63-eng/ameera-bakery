document.addEventListener('DOMContentLoaded', function () {

  // ===== Toggle menu mobile =====
  var mobileMenuBtn = document.getElementById('mobileMenuBtn');
  var mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });

    // Tutup menu mobile saat salah satu link diklik
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // ===== Filter kategori produk =====
  var catButtons = document.querySelectorAll('.cat-btn');
  var productCards = document.querySelectorAll('.product-card');
  var emptyState = document.getElementById('emptyState');

  catButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var selected = btn.getAttribute('data-cat');

      // Update tampilan tombol aktif
      catButtons.forEach(function (b) {
        b.classList.remove('active', 'bg-primary', 'text-white');
        b.classList.add('bg-transparent', 'text-[#6b6b6b]');
      });
      btn.classList.add('active', 'bg-primary', 'text-white');
      btn.classList.remove('bg-transparent', 'text-[#6b6b6b]');

      // Filter kartu produk
      var visibleCount = 0;
      productCards.forEach(function (card) {
        var cardCat = card.getAttribute('data-cat');
        var show = selected === 'all' || cardCat === selected;
        card.classList.toggle('is-hidden', !show);
        if (show) visibleCount++;
      });

      if (emptyState) {
        emptyState.classList.toggle('hidden', visibleCount !== 0);
      }
    });
  });

  // ===== Tombol Kontak Kami (floating button) =====
  var contactFab = document.getElementById('contactFab');
  if (contactFab) {
    contactFab.addEventListener('click', function () {
      var contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

});
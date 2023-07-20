document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("custom-navbar").innerHTML = '<ul class="navbar-items">\
      <li><a class="nav-link is-active" id="home" href="">HOME</a></li>\
      <li><a class="nav-link" id="initiatives" href="">INITIATIVES</a></li>\
      <li><a class="nav-link" id="community" href="">THE COMMUNITY</a></li>\
      <li><a class="nav-link" id="team" href="">THE TEAM</a></li>\
      <li><a class="nav-link" id="media" href="">MEDIA</a></li>\
      <li><a class="nav-link" id="more" href="">MORE</a></li>\
    </ul>';
  });

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const activeElement = document.querySelector(".is-active");
      if (activeElement) {
        activeElement.classList.remove("is-active");
      }

      this.classList.add('is-active');

    })
  })
});
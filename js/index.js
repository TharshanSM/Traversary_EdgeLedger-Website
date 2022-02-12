function initMap() {
  const edgeLedger = { lat: 7.70788, lng: 81.701736 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: edgeLedger,
  });

  const marker = new google.maps.Marker({
    position: edgeLedger,
    map: map,
  });
}

$(document).ready(function () {
  // Add smooth scrolling to all links
  $('#navbar a,btn').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

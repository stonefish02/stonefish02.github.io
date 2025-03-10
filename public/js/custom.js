
  function swapImage() {
    var img = document.getElementById('profile-picture');
    if (img.src.includes('IMG_1007.jpeg')) {
      img.src = '/GEOMETRY_1007.jpeg';
    } else {
      img.src = '/IMG_1007.jpeg';
    }
  }

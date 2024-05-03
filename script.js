window.onload = function () {
  const allVideos = document.querySelectorAll('video');
  const sidebar = document.querySelector('.left-section');
  const sidebarItems = document.querySelectorAll('.sidebar .item');
  const catItems = document.querySelectorAll('.categories a');

  // Play/Pause video on mouse enter/leave
  allVideos.forEach((video) => {
    video.addEventListener('mouseover', () => {
      video.play();
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
    });
  });

  // Handle sidebar item click
  sidebarItems.forEach((sideItem) => {
    sideItem.addEventListener('click', () => {
      sidebarItems.forEach((item) => {
        item.classList.remove('active');
      });

      sideItem.classList.add('active');
    });
  });

  // Handle category item click
  catItems.forEach((catItem) => {
    catItem.addEventListener('click', () => {
      catItems.forEach((item) => {
        item.classList.remove('active');
      });
      catItem.classList.add('active');
    });
  });
};

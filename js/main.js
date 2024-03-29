loadImage = (id, targetId) => {
  const el = document.getElementById(id);
  const targetEl = targetId ? document.getElementById(targetId) : el;
  let imageToLoad;

  if(el.dataset.image) {
    imageToLoad = el.dataset.image
  }

   if (imageToLoad) {
     const img = new Image();
     img.src = imageToLoad;
     img.onload = function() {
       targetEl.classList.add('is-loaded');
     }
   }
}

document.addEventListener('DOMContentLoaded', function() {
  loadImage('wallpaper');
  loadImage('pictureImage', 'picture');
});
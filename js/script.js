document.addEventListener("DOMContentLoaded", () => {
    const previewImg = document.getElementById("image-preview");
    const links = document.querySelectorAll(".hover-link");
  
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        const imgSrc = link.getAttribute("data-image");
        previewImg.src = imgSrc;
        previewImg.style.opacity = 1;
        previewImg.style.transform = "scale(1.05)";
      });
  
      link.addEventListener("mouseleave", () => {
        previewImg.style.opacity = 0;
        previewImg.style.transform = "scale(1)";
      });
    });
  });
  
fetch("photos.json")
  .then(response => response.json())
  .then(images => {
    // Sort newest → oldest
    images.sort((a, b) => new Date(b.date) - new Date(a.date));

    const container = document.getElementById("gallery");

    images.forEach(photo => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("photo-card");

      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.title;

      const caption = document.createElement("div");
      caption.classList.add("caption");

      caption.innerHTML = `
        <h3>${photo.title}</h3>
        <p>${photo.description}</p>
        <small>Date: ${photo.date}</small><br>
        <small>Tags: ${photo.tags.join(", ")}</small>
      `;

      wrapper.appendChild(img);
      wrapper.appendChild(caption);
      container.appendChild(wrapper);
    });
  })
  .catch(err => console.error("Error loading photos:", err));

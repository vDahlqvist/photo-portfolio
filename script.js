// Photo Portfolio Gallery Script
// This script loads photo data from photos.json and dynamically creates a photo gallery

// Fetch the photos.json file containing photo metadata
fetch("photos.json")
  .then(response => response.json()) // Parse the JSON response
  .then(images => {
    // Sort photos by date: newest photos first (descending order)
    images.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Get the gallery container element from the HTML
    const container = document.getElementById("gallery");

    // Loop through each photo object and create HTML elements
    images.forEach(photo => {
      // Create a wrapper div for each photo card
      const wrapper = document.createElement("div");
      wrapper.classList.add("photo-card"); // Add CSS class for styling

      // Create the image element
      const img = document.createElement("img");
      img.src = photo.src; // Set image source from photo data
      img.alt = photo.title; // Set alt text for accessibility

      // Create a caption container for photo information
      const caption = document.createElement("div");
      caption.classList.add("caption"); // Add CSS class for styling

      // Populate caption with photo details using template literals
      caption.innerHTML = `
        <h3>${photo.title}</h3>
        <p>${photo.description}</p>
        <small>Date: ${photo.date}</small><br>
        <small>Tags: ${photo.tags.join(", ")}</small>
      `;

      // Assemble the photo card: add image and caption to wrapper
      wrapper.appendChild(img);
      wrapper.appendChild(caption);
      
      // Add the completed photo card to the gallery container
      container.appendChild(wrapper);
    });
  })
  // Handle any errors that occur during the fetch or processing
  .catch(err => console.error("Error loading photos:", err));

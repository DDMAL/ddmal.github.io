// gallery.js — Parses a CSV file of poster filenames and years, then dynamically generates a thumbnail gallery grouped by year.
// Also controls view switching between list and grid.

document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded, starting CSV parsing...");

  // Toggle view logic
  function showView(view) {
    document.getElementById('text-view').classList.toggle('hidden', view !== 'text');
    document.getElementById('gallery-view').classList.toggle('hidden', view !== 'gallery');

    const icons = document.querySelectorAll('.toggle-buttons i');
    icons.forEach(icon => icon.classList.remove('active'));

    if (view === 'text') {
      document.querySelector('.toggle-buttons i.fa-list-ul').classList.add('active');
    } else {
      document.querySelector('.toggle-buttons i.fa-grip').classList.add('active');
    }
  }

  // Make showView globally accessible
  window.showView = showView;

  // Set default view on load
  showView('gallery');

  // Load and parse CSV
  Papa.parse("poster_filenames.csv", {
    download: true,
    header: true,
    complete: function (results) {
      console.log("CSV parsed results:", results.data);

      const data = results.data.filter(row => row.filename && row.year);
      const groupedByYear = {};

      data.forEach(row => {
        const year = row.year.trim();
        if (!groupedByYear[year]) groupedByYear[year] = [];
        groupedByYear[year].push(row.filename.trim());
      });

      const container = document.getElementById("poster-gallery-container");

      Object.keys(groupedByYear).sort((a, b) => b - a).forEach(year => {
        // Create a wrapper for both heading and gallery
        const yearBlock = document.createElement("div");
        yearBlock.className = "year-block";
        // Add year heading and horizontal line
        yearBlock.innerHTML = `<h2 id="${year}">${year}</h2><hr />`;

        // Create the gallery grid
        const gallery = document.createElement("div");
        gallery.className = "gallery";

        groupedByYear[year].forEach(filename => {
          const posterDiv = document.createElement("div");
          posterDiv.className = "poster";

          const img = document.createElement("img");
          img.src = `../../posters/jpg/${filename}`;
          img.alt = filename;

          img.onerror = function () {
            console.warn("Image not found:", img.src);
          };

          const link = document.createElement("a");
          link.href = `../../posters/jpg/${filename}`;
          link.target = "_blank";
          link.appendChild(img);

          // const caption = document.createElement("p");
          // caption.textContent = filename;

          posterDiv.appendChild(link);
          // posterDiv.appendChild(caption); // Removed caption text below thumbnail
          gallery.appendChild(posterDiv);
        });

        yearBlock.appendChild(gallery);   // Add gallery inside year block
        container.appendChild(yearBlock); // Append full block to container
      });
    }
  });


});

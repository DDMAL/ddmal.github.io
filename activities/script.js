document.addEventListener('DOMContentLoaded', function() {
    // Function to load and display JSON content
    function loadJSON() {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let jsonData = JSON.parse(xhr.responseText);
                displayContent(jsonData);
            }
        };

        xhr.open('GET', 'content.json', true);
        xhr.send();
    }

    // Function to display JSON content in the HTML
    function displayContent(data) {
        let container = document.getElementById('json-content');
        let html = '';
        let years = Object.keys(data).reverse();
        for (let key of years) {
            if (data.hasOwnProperty(key)) {
                year = key;
                html += `<h2 id="${year}">${year}</h2><hr /><ul>`;
                for (entry of data[key]) {
                    html += `<li><p>${entry}</p></li>`;
                }
                html += `</ul><p><br /></p>`;
            }
        }
        container.innerHTML = html;
    }

    // Load JSON content on page load
    loadJSON();
});
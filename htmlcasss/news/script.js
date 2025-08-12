const apiKey = "80ac33af06cd4b4d80c6985772dc4449";
const newsContainer = document.getElementById("newsContainer");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

async function fetchNews(query = "latest") {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        
        newsContainer.innerHTML = "";

        if (data.articles.length === 0) {
            newsContainer.innerHTML = "<p>No news found.</p>";
            return;
        }

        data.articles.forEach(article => {
            const card = document.createElement("div");
            card.classList.add("news-card");

            card.innerHTML = `
                <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="News image">
                <h3>${article.title}</h3>
                <p>${article.description || ""}</p>
                <a href="${article.url}" target="_blank">Read More</a>
            `;

            newsContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = "<p>Error loading news.</p>";
    }
}

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    fetchNews(query || "latest");
});

// Load default news on page load
fetchNews();

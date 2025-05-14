// Список фильмов и сериалов
const movies = [
    { title: "Интерстеллар", link: "film-interstellar.html" },
    { title: "Начало", link: "film-inception.html" },
    { title: "Форрест Гамп", link: "film-forrest-gump.html" },
    { title: "Кобра Кай", link: "series-cobra-kai.html" },
    { title: "Игра престолов", link: "series-got.html" },
    { title: "Черное зеркало", link: "series-black-mirror.html" }
];

// Поиск
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    searchResults.innerHTML = "";

    if (query.length > 0) {
        const results = movies.filter(movie => movie.title.toLowerCase().includes(query));

        if (results.length > 0) {
            results.forEach(movie => {
                const resultItem = document.createElement("div");
                resultItem.textContent = movie.title;
                resultItem.classList.add("search-result-item");
                resultItem.addEventListener("click", () => {
                    window.location.href = movie.link;
                });
                searchResults.appendChild(resultItem);
            });
            searchResults.style.display = "block"; // Показываем результаты
        } else {
            const noResult = document.createElement("div");
            noResult.textContent = "Ничего не найдено";
            noResult.classList.add("search-result-item");
            searchResults.appendChild(noResult);
            searchResults.style.display = "block"; // Показываем сообщение
        }
    } else {
        searchResults.style.display = "none"; // Скрываем результаты, если поле пустое
    }
});

// Скрыть результаты при клике вне поля поиска
document.addEventListener("click", function (event) {
    if (event.target !== searchInput && event.target !== searchResults) {
        searchResults.style.display = "none";
    }
});
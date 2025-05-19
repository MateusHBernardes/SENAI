document.addEventListener("DOMContentLoaded", () => {
    const categoryFilter = document.getElementById("categoryFilter");
    const sortOrder = document.getElementById("sortOrder");
    const productContainer = document.getElementById("productContainer");
    const cards = Array.from(productContainer.getElementsByClassName("card"));

    function extractNumberFromTitle(title) {
        const match = title.match(/\d+/);
        return match ? parseInt(match[0], 10) : 0;
    }

    function filterAndSort() {
        const selectedCategory = categoryFilter.value;
        const selectedSort = sortOrder.value;

        // Filtro por categoria
        let filteredCards = cards.filter(card => {
            if (selectedCategory === "all") return true;
            return card.id === selectedCategory;
        });

        // Ordenação
        if (selectedSort === "name-asc") {
            filteredCards.sort((a, b) => {
                const numberA = extractNumberFromTitle(a.querySelector("h2").textContent);
                const numberB = extractNumberFromTitle(b.querySelector("h2").textContent);
                return numberA - numberB;
            });
        } else if (selectedSort === "name-desc") {
            filteredCards.sort((a, b) => {
                const numberA = extractNumberFromTitle(a.querySelector("h2").textContent);
                const numberB = extractNumberFromTitle(b.querySelector("h2").textContent);
                return numberB - numberA;
            });
        }

        // Limpa o container
        productContainer.innerHTML = "";

        // Reinsere os cards filtrados e ordenados
        filteredCards.forEach(card => productContainer.appendChild(card));
    }

    // Eventos
    categoryFilter.addEventListener("change", filterAndSort);
    sortOrder.addEventListener("change", filterAndSort);
});

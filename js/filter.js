document.addEventListener("DOMContentLoaded", function() {
    const openFilterButton = document.getElementById("openFilterButton");
    const filters = document.getElementById("filters");

    console.log("openFilterButton:", openFilterButton);
    console.log("filters:", filters);

    openFilterButton.addEventListener("click", function() {
        console.log("Button clicked");

        const computedStyle = window.getComputedStyle(filters);
        if (computedStyle.display === "none" || computedStyle.display === "") {
            filters.style.display = "block";
        } else {
            filters.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const filterPrice = document.getElementById("filterPrice");
    const selectedPrice = document.getElementById("selectedPrice");

    filterPrice.addEventListener("input", function() {
        const value = filterPrice.value;
        selectedPrice.textContent = `$${value}`;
    });
});
//
// const prevPage = document.getElementById("prevPage");
// const nextPage = document.getElementById("nextPage");
// const pages = document.querySelectorAll(".page");
// const productCards = document.querySelectorAll(".product-card");
// const itemsPerPage = 3;
// let currentPage = 1;
//
// function updatePagination() {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//
//     productCards.forEach((card, index) => {
//         if (index >= startIndex && index < endIndex) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }
//     });
// }
//
// prevPage.addEventListener("click", () => {
//     if (currentPage > 1) {
//         currentPage--;
//         updatePagination();
//     }
// });
//
// nextPage.addEventListener("click", () => {
//     if (currentPage < pages.length) {
//         currentPage++;
//         updatePagination();
//         console.log("Next button clicked. Current page: " + currentPage);
//     }
// });
//
// updatePagination();

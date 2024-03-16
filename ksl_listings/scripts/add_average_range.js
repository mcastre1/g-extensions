const listings = document.querySelectorAll(".listing-item");

console.log("YAY!");
console.log(listings);

for (var i = 0; i < listings.length; i++) {
    console.log(listings[i].querySelector(".item-info-title-link").textContent);
}

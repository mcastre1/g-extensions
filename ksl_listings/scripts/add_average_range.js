const listings = document.querySelectorAll(".listing-item");

console.log("YAY!");
console.log(listings);

for (var i = 0; i < listings.length; i++) {
    let title = listings[i].querySelector(".item-info-title-link").textContent
    let price = listings[i].querySelector(".item-info-price").textContent
    console.log("%s %s", title, price);
}

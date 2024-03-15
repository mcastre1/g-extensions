// Finds and saves the first element article
const article = document.querySelector("article");

// If theres an article found
if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g; // Matches everything except whats inside the brackets [set], which is \s, whitespace
    const words = text.matchAll(wordMatchRegExp); // Returns iterator, convert to list to get word count

    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");

    badge.classList.add('color-secondary-text', "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    // Support for API reference docs
    const heading = article.querySelector('h1');
    // Support for article docs with date
    const date = article.querySelector("time")?.parentNode;  // The question mark is so whenever whatever is to the left of it is null, nothing after ?. will be ran

    // Double question mark (??) means that if the first operator is null then the second one will be used
    (date ?? heading).insertAdjacentElement("afterend", badge);
}
function selectOnChangeHandler() {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("select-sort");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("products");
    cards = cardContainer.getElementsByClassName("product");
    const names = sortNames(cards)
    const newCards = []
    for(const name of names) {
            for(const c of cards) {
            if(c.querySelector(".product-title").innerText === name) {
                newCards.push(c)
                c.style.marginRight = "10px"
            }
        }};
    for (i = 0; i < newCards.length; ++i) {
        document.getElementById("products").appendChild(newCards[i]);
      }
  }
  

// sort by names
function sortNames(cards) {
    let names = []
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".product-title").innerText
        names.push(title)
    }
    names.sort(function(a, b){
        if (a < b)
         return -1;
        if (a > b)
         return 1;
        return 0; 
       });
    return names
}

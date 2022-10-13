function inputKeyUpHandler() {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("form1");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("products");
    cards = cardContainer.getElementsByClassName("product");
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".product-title");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
  
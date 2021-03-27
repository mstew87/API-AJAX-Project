drawCard = async (e) => {
  const response = await fetch(`https://api.scryfall.com/cards/random`);
  const card = await response.json();
  const imageEl = document.getElementById("card");
  imageEl.src = card.image_uris.normal;
};

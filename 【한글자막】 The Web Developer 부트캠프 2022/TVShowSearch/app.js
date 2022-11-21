const form = document.querySelector("#searchForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm, isFunny: "colt" } };
    const res = await axios.get("http://api.tvmaze.com/search/shows", config);
    makeImages(res.data);
  } catch (err) {
    console.log("ERROR!", err);
  }
});

const makeImages = async (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

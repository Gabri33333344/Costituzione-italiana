function search() {
    var input = document.getElementById("search-input").value;
    // Simulazione della ricerca
    var results = ["Risultato 1", "Risultato 2", "Risultato 3"];
    var searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";
    for (var i = 0; i < results.length; i++) {
      var resultItem = document.createElement("div");
      resultItem.textContent = results[i];
      searchResults.appendChild(resultItem);
    }
  }
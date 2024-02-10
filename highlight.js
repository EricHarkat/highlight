function highlightText() {
    let textToSearch = document.getElementById("text-to-search").value;
    let contentParagraph = document.getElementById("paragraph");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let pattern = new RegExp(`${textToSearch}`, "gi");
    contentParagraph.innerHTML = contentParagraph.textContent.replace(
      pattern,
      (match) => `<mark>${match}</mark>`
    );
  }
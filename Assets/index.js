function openMenu() {
document.body.classList += " menu--open"
}

function closeMenu() {
document.body.classList.remove("menu--open")
}

const button = document.getElementById("searchButton");
const input = document.getElementById("searchInput");

button.addEventListener("click", () => {
  const query = input.value.trim();

  if (query === "") {
    alert("Please enter a search term!");
    return;
  }})


/*e.loading ? r("button", {
                staticClass: "loading"
            }, [r("Spinner")], 1) : r("button", {
                staticClass: "not-loading",
                on: {
                    click: e.search
                }
            }, [r("font-awesome-icon", {
                attrs: {
                    icon: "search"
                }
            })]) */

 
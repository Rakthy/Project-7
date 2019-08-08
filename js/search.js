const search = document.getElementById("search");

search.addEventListener("keyup", filter);
function filter() {
  const searchValue = search.value.toLowerCase();
  const chart = document.querySelectorAll(".chart");
  for (let i = 0; i < chart.length; i++) {
    const heading = document.querySelectorAll(".chart-heading");
    for (let i = 0; i < heading.length; i++) {
      const headingValue = heading[i].innerHTML.toLowerCase();
      if (headingValue.indexOf(searchValue) > -1) {
        chart[i].style.display = "grid";
      } else {
        chart[i].style.display = "none";
      }
    }
  }
}

//search for user//

const form = document.querySelector("#widget-container");

form.addEventListener("submit", e => {
  e.preventDefault();
  const userSearch = document.querySelector("#userField");
  userSearch.addEventListener("keyup", userFilter);
  function userFilter() {
    const userSearchValue = userSearch.value.toLowerCase();
    const members = document.querySelectorAll(".members-container");
    for (let i = 0; i < members.length; i++) {
      const memberName = document.querySelectorAll(".member-name");
      for (let i = 0; i < memberName.length; i++) {
        const memberNameValue = memberName[i].innerHTML.toLowerCase();
        if (memberNameValue.indexOf(userSearchValue) > -1) {
          members[i].style.display = "flex";
        } else {
          members[i].style.display = "none";
        }
      }
    }
  }
});

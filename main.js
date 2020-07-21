const input = document.getElementById("userInput");
const logo = document.getElementById("logo");

input.addEventListener("keyup", filterBrands);

function filterBrands() {
  const filteredValue = input.value.toUpperCase();
  const lis = document.getElementsByTagName("li");

  logo.style.display = "none";

  for (let i = 0; i < lis.length; i++) {
    const a = lis[i].getElementsByTagName("a")[0];

    aValue = a.innerHTML.toUpperCase().indexOf(filteredValue);

    if (aValue > -1) {
      lis[i].style.display = "block";
    } else {
      lis[i].style.display = "none";
    }
  }


}

const screenWidth = window.innerWidth;

if (screenWidth > 1500) {
  document.getElementById("demo").innerText = "Hello JavaScript";
}
else {
  document.getElementById("demo").innerText = "Hello JavaScript on a small screen";
}

document.getElementById("demo").innerHTML = "Screen width is " + window.innerWidth + " pixels";

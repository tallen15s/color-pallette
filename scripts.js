// grab all of the palette divs and use
const display = document.querySelector("#display");
const paletteDivs = document.querySelectorAll("#palette div");

const paletteStyles = getComputedStyle(paletteDivs[0]);

paletteDivs.forEach((paletteDiv, index) => {
  paletteDiv.style.setProperty(
    "background-color",

    paletteStyles.getPropertyValue(`--${index}`)
  );

  paletteDiv.addEventListener("click", function handleClick() {
    display.style.setProperty("background-color", this.style.backgroundColor);
  });
});

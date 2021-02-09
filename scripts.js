// grab all of the palette divs and use
const paletteDivs = document.querySelectorAll("#palette div");

const paletteStyles = getComputedStyle(paletteDivs[0]);

paletteDivs.forEach((paletteDiv, index) => {
  paletteDiv.style.setProperty(
    "background-color",

    paletteStyles.getPropertyValue(`--${index}`)
  );
});

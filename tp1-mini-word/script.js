const colorInput = document.getElementById('color');
const fontSizeInput = document.getElementById('font-size');
const fontFamilySelect = document.getElementById('font-family');
const paragraph = document.getElementById('paragraph');

colorInput.addEventListener('input', () => {
    paragraph.style.color = colorInput.value;
});

fontSizeInput.addEventListener('input', () => {
    paragraph.style.fontSize = fontSizeInput.value + 'px';
});

fontFamilySelect.addEventListener('change', () => {
    paragraph.style.fontFamily = fontFamilySelect.value;
});

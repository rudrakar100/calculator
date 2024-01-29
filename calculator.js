let showDisplay = '';
document.querySelector('.display').value=showDisplay;
const pressBTN = () => {
    document.querySelector('.display').value=showDisplay;
}
pressBTN();

const handleBackspace = () => {
    showDisplay = showDisplay.slice(0, -1);
     pressBTN();
}
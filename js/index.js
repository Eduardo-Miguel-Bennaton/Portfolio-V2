// Function to toggle content visibility
function toggleContent(element) {
    let isHidden = false;
    const hiddenMessage = element.querySelector('#Hidden');
    const display = element.querySelector('#Display');
    const body = element.querySelector('#Body');

    element.addEventListener('click', function () {
        if (isHidden) {
            element.style.backgroundColor = '#FFF';
            element.style.boxShadow = '0px 0px 14px 0px rgba(0, 0, 0, 0.11)';
            hiddenMessage.style.display = 'none';
            display.style.display = 'block';
            body.style.display = 'block';
        } else {
            element.style.backgroundColor = '#B3B3B3';
            element.style.boxShadow = '0px 0px 14px 0px rgba(0, 0, 0, 0.21)';
            hiddenMessage.style.display = 'block';
            display.style.display = 'none';
            body.style.display = 'none';
        }
        isHidden = !isHidden;
    });
}

// Get and toggle content for each button
const buttons = document.querySelectorAll('.box-container');
buttons.forEach(button => {
    toggleContent(button);
});

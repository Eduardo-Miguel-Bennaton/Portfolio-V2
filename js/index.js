// Get and toggle content for each button
const buttons = document.querySelectorAll('.box-container');
var currentSelected = null

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentSelected != null) {
            currentSelected.style.backgroundColor = 'var(--color-5)';
            currentSelected.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 0)';
        }
        currentSelected = button
        button.style.backgroundColor = '#B3B3B3';
        button.style.boxShadow = '0px 0px 14px 0px rgba(0, 0, 0, 0.11)';
    })
})

// URL new-tab definition and icon generator
const instagram = document.getElementById('instagram')
const linkedin = document.getElementById('linkedin')

function openNewTab(url){
    window.open(url,'_blank')
}

instagram.addEventListener('click', function(){
    const urlToOpen = 'https://www.instagram.com/ebennatonh/';
    openNewTab(urlToOpen)
});

linkedin.addEventListener('click', function(){
    const urlToOpen = 'https://www.linkedin.com/in/eduardo-miguel-bennaton-handal-945588270/';
    openNewTab(urlToOpen)
});
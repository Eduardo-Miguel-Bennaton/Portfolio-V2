// Get and toggle content for each button
const buttons = document.querySelectorAll('.box-container');
const dispalyContext = document.getElementById('displayboard-content')

const dictionary = {
    1:'The etiquette course has been an unforgettable learning experience, empowering me to navigate social situations with respect and sophistication. I am grateful for the guidance of experienced experts and the practical skills I have acquired. I am confident that these refined social manners will enhance my personal and professional interactions.',
    
    2:'The public speaking course has helped me overcome my fear of public speaking and become a more confident and effective communicator. I have learned the fundamentals of crafting compelling presentations, delivering them with balance, and engaging the audience. The course has been an invaluable asset in my personal and professional development.',
    
    3:'Having completed the leadership course in 2019, I\'ve gained a profound understanding of leadership principles, strategies, and how to effectively communicate and motivate others. I\'m deeply grateful to the experienced leaders who generously shared their insights and wisdom with us. I\'m now eager to apply these newfound knowledge and skills to my personal and professional experiences.',

    4:'Never anticipating the chance to accomplish an internship at an early stage in Germany, I embarked on this journey with an open mind and gratitude. I quickly adapted to the linguistic landscape and advanced upon the development process, overcoming any challenges with discipline. This unforgettable experience has left a mark on my personal and professional growth.',

    5:'Looking back, my high school years were a time of great personal growth and development. I was challenged academically and encouraged to pursue my interests. I made lifelong friends and learned valuable lessons. I am grateful for the experiences that shaped me.',

    6:'My internship provided me with insights into the German approach to quality and efficiency, which has significantly enhanced my understanding of how to deliver high-quality products and services. The experience has allowed me to think through a new level of professionalism and work ethic, which I am confident will serve me well in future internships and throughout my career.',

    7:'On my journey to becoming a skilled software engineer, I immerse myself in learning, experimenting, and perseverance. Through hybrid courses, projects, and challenges, I solidify my technical skills and collaborative spirit. With dedication, passion, and teamwork, I\'m confident in achieving my milestone by the half of 2025.',

    8:'The Harvard Online Course on Alternative Investments and portfolio growth has been a transformative experience, empowering me to navigate the world of finance with confidence and informed decisions. Fueling my desire to continue learning and expanding my knowledge base, I am confident that the skills and insights I have acquired will serve me well in my personal and professional matters.',
}

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

        dispalyContext.textContent = dictionary[button.id]
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
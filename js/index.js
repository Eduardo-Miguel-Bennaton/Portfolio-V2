const PublicSpeaking = document.getElementById('PublicSpeakingCourse')
const LeadershipCourse = document.getElementById('LeadershipCourse')
const Internship = document.getElementById('Internship')
const BachelorYears = document.getElementById('BachelorYears')
const EtiquetteTraining = document.getElementById('EtiquetteTraining')
const InternshipThiel = document.getElementById('Internship-Thiel')
const University = document.getElementById('University')

function toggleBackgroundColor(element){
    let isHidden = false;

    element.addEventListener('click', function(){
        if (isHidden) {
            element.style.backgroundColor = '#FFF';
        } else {
            element.style.backgroundColor = '#B3B3B3';
        }
        isHidden = !isHidden
    });
}

// WRITTING INDIVIDUAL BUTTON ANIMATIONS FOR SWITCHING 
toggleBackgroundColor(PublicSpeaking)
toggleBackgroundColor(LeadershipCourse)
toggleBackgroundColor(Internship)
toggleBackgroundColor(BachelorYears)
toggleBackgroundColor(EtiquetteTraining)
toggleBackgroundColor(InternshipThiel)
toggleBackgroundColor(University)
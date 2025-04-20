const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let gen_pword_button = document.getElementById("generate-button")
let pword_output = document.getElementById("generatedPWord")

// get the slider element
const slider = document.querySelector('.password-slider');
let sliderVal = document.querySelector('.password-slider').value

// password generator
function genPword () {
    let pword = []
    
    for (let i = 0; i < sliderVal; i++) {
        let r = Math.floor(Math.random() * characters.length)
        pword.push(characters[r])
        pword_output.value = pword.join("")
    }

    // displays the copy button once a valid password has been created
    if (pword.length >= 8) {
        copy_btn = document.getElementById("copy-button").style.visibility = "visible";
    }
}

// copy button

let copy_btn = document.getElementById("copy-button")

copy_btn.onclick = function () {
    let val = document.getElementById('generatedPWord').value;
    navigator.clipboard.writeText(val).then(function (){
        alert("Text copied")
    })
}


// dropdown
let customizeSection = document.querySelector('.customize-section');
let menuDropdown = document.getElementById('menu-dropdown');

// function to update slider background
function updateSliderBackground(slider) {
    // get the dimensions
    const thumbWidth = 18; // width of the thumb
    const totalWidth = slider.offsetWidth;
    
    // calculate the percentage through the range
    const min = parseInt(slider.min);
    const max = parseInt(slider.max);
    const value = parseInt(slider.value);
    
    // calculate the percentage position
    const range = max - min;
    const percentageThrough = ((value - min) / range);
    
    // calculate the actual pixel position of the thumb
    const availableWidth = totalWidth - thumbWidth;
    const pixelThrough = percentageThrough * availableWidth + (thumbWidth / 2);
    
    // convert back to percentage for gradient
    const gradientPercentage = (pixelThrough / totalWidth) * 100;
    
    // apply the gradient
    slider.style.background = `linear-gradient(to right, #080808 ${gradientPercentage}%, #F1F5F9 ${gradientPercentage}%)`;
}


// update the background & password length when the slider value changes
slider.addEventListener('input', function() {
    updateSliderBackground(this);
    document.getElementById('pword-length-num').textContent = this.value;
    sliderVal = this.value // this and the line above are what adjusts the password length dynamically as we adjust the slider. prob could make it more efficient, but yea
    console.log(sliderVal)
});

// initialize the slider background
updateSliderBackground(slider);

// handle window resize to recalculate dimensions
window.addEventListener('resize', () => updateSliderBackground(slider));

// Add click handler to the customize section
customizeSection.onclick = function() {
    // Toggle the 'visible' class instead of directly manipulating style
    menuDropdown.classList.toggle('visible');
    
    // Update the container height to accommodate the dropdown
    const container = document.querySelector('.inner-container');
    if (menuDropdown.classList.contains('visible')) {
        container.style.height = container.scrollHeight + 'px';
    } else {
        container.style.height = 'auto';
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!customizeSection.contains(event.target) && !menuDropdown.contains(event.target)) {
        menuDropdown.classList.remove('visible');
        document.querySelector('.inner-container').style.height = 'auto';
    }
});

// Prevent dropdown from closing when clicking inside it
menuDropdown.addEventListener('click', function(event) {
    event.stopPropagation();
});
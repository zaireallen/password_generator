const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let gen_pword_button = document.getElementById("generate-button")
let pword_output = document.getElementById("generatedPWord")

let copy_btn = document.getElementById("copy-button")

// password generator
function genPword () {
    let pword = []
    
    for (let i = 0; i < 15; i++) {

        let r = Math.floor(Math.random() * characters.length)

        pword.push(characters[r])
        
        pword_output.value = pword.join("")
    }

    // displays the copy button once a valid password has been created
    if (pword.length > 5) {
        copy_btn = document.getElementById("copy-button").style.visibility = "visible";
    }
}

// copy button

copy_btn.onclick = function () {
    // pword_output.select()
    let val = document.getElementById('generatedPWord').value;
    navigator.clipboard.writeText(val).then(function (){
        alert("Text copied")
    })
}


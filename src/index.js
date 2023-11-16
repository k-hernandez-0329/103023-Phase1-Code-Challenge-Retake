// Your code here
const characterAPI = "http://localhost:3000/characters"




//Elements
const cutieName = document.getElementById('name')
const cutieImg = document.getElementById('image')
const cutieVotes = document.getElementById('vote-count')
const currentCutie = document.getElementById('character-bar')
const cutieList = document.getElementById('detailed-info')







//section1

fetch(characterAPI)
.then(res => res.json())
.then(addCutie)


function addCutie(cutie){
  cutie.forEach((cutie) => {
    const cutieCharacter = document.createElement('span')
    cutieName.textContent = cutie.name
    cutieImg.src = cutie.image
    cutieVotes.textContent = cutie.votes
    currentCutie.append(cutieCharacter)
    cutieName.addEventListener('click', () => {
        addCutie(cutie) 
})

})

}

//section2
fetch (characterAPI)
.then(res => res.json())
.then(addCutieBar)

function addMoreCuties(cuties){
    cutieName.textContent = cuties.name
    cuties.innerHTML = ''
    cuties.forEach(addCutieBar)
}
//Add buddies up there somehwere
function addCutieBar(cutie){
    const currentCutie = document.getElementById('character-bar')
    cutieName.textContent = cutie.name
    //cutie.cutieList.append(cutieDetails)
}



//button
document.getElementById('votes-form').addEventListener('submit', (e) => {
    e.preventDefault()
addCutie.cutieVotes = parseInt(e.target['votes'].value)
cutieVotes.textContent = addCutie.cutieVotes
e.target.reset()
})

document.getElementById('reset-btn').addEventListener('click', resetButton)

function resetButton(e){
console.log('click')
}

// function addVote(e){
//     e.preventDefault()

// //     const currentVote = parseInt(document.getElementById('vote-count').textContent)
// //     if (currentVote < 0 ){
// //         document.getElementById('detailed-info').textContent = currentVote = 1
// //     }
// //    else{alert ('ADD VOTE')}





// }
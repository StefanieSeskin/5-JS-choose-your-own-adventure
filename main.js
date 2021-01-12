
var stillGoing = true
var endOfSurvey = false
var theEnd = false

alert ('Welcome to the Led Zeppelin Survey! Click OK to continue.')
    var yesNoNeither = prompt('Do you even like Led Zeppelin?')

if (yesNoNeither === 'no') {
    theEnd = true
    alert('Sending Whole Lotta Love anyway.  Bye!')
    let (yesNoNeither) = 'no'

}

// else if (yesNoNeither !== 'yes' && yesNoNeither !== 'no') {
//     theEnd = true
//     alert('This was a yes or no question.  Babe I\'m Gonna Leave You to start over!')
//     let (yesNoNeither) !== 'yes' && (yesNoNeither) !== 'no'
// }

else if (yesNoNeither === 'yes') {
    theEnd = false
    alert('Let\'s Talk about Favorite song, then.  Ok?')
}

// this answer doesn't end the survey

if (!theEnd)
    var faveSong = prompt('Is your favorite song Stairway to Heaven?')
    if (faveSong === 'yes') {
        stillGoing = false
        alert('Lame.  Time for you to Ramble On.')
        let (faveSong) = 'yes'

}



else if (faveSong == 'no') {
    stillGoing = true
    alert('Whew.  Good to hear.  Let\'s continue, shall we?')

}


var wholeLotta = prompt('Is your favorite song Whole Lotta Love?')
    if (wholeLotta === 'yes') {
    alert('Mine too!  Rock on!')
    theEnd = true
    let (wholeLotta) = 'yes'
 
    }


else if (wholeLotta === 'no') {
    alert('Me either.  I\'m a Black Dog gal.  Thanks for playing!')
    theEnd = true
    let (wholeLotta) = 'no'

    } 

// else if (wholeLotta !== 'yes' && wholeLotta !== 'no') {
//         alert('This was a yes or no question.  Guess we had a Communication Breakdown.  Take care!')
//         let (wholeLotta) wholeLotta !== 'yes' && wholeLotta !== 'no'
//         endOfSurvey = true 
//     }
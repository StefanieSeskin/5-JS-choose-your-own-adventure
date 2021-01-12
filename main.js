
var stillGoing = true
var endOfSurvey = false
var theEnd = false

alert ('Welcome to the Led Zeppelin Survey! Click OK to continue.')
    var yesNoNeither = prompt('Do you even like Led Zeppelin?')


if (yesNoNeither === 'yes') {
    theEnd = false
    alert('Let\'s Talk about Favorite song, then.  Ok?')
}

else if (yesNoNeither === 'no') {
    theEnd = true
    alert('Sending Whole Lotta Love anyway.  Bye!')
    
}

// this no answer doesn't end the survey

else if (yesNoNeither !== 'yes' && yesNoNeither !== 'no') {
    theEnd = true
    alert('This was a yes or no question.  Babe I\'m Gonna Leave You to start over!')
}

// this answer doesn't end the survey

if (!theEnd)
    var faveSong = prompt('Is your favorite song Stairway to Heaven?')
    if (faveSong === 'yes') {
    alert('Lame.  Time for you to Ramble On.')
    stillGoing = false
}

// this answer doesn't end the survey

else if (faveSong == 'no') {
    stillGoing = true
    alert('Whew.  Good to hear.  Let\'s continue, shall we?')

}


var wholeLotta = prompt('Is your favorite song Whole Lotta Love?')
    if (wholeLotta === 'yes') {
    alert('Mine too!  Rock on!')
    // theEnd = true
    endOfSurvey = true
    }

else if (wholeLotta === 'no') {
    alert("Me either.  I'm a Black Dog gal.  Thanks for playing!")
    endOfSurvey = true
    // theEnd = true

    } 

else if (wholeLotta !== 'yes' && wholeLotta !== 'no') {
        endOfSurvey = true
        // theEnd = true
        alert('This was a yes or no question.  Guess we had a Communication Breakdown.  Take care!')
    }

var theEnd = false
var stillGoing = true
var wholeLotta = false
var endOfSurvey = false

alert ('Welcome to the Led Zeppelin Survey! Click OK to continue.')
    var yesNoNeither = prompt('Do you even like Led Zeppelin?')

if (yesNoNeither === 'no') {
    theEnd = true
    alert('Sending Whole Lotta Love anyway.  Bye!')

}

// else if (yesNoEither !'yes' || 'no' )
//     theEnd = true
//     alert('You seem Dazed and Confused so Ramble On.  Catch you later!')
// }

else if (yesNoNeither === 'yes') {
    theEnd = false
    alert('Let\'s Talk about Favorite song, then.  Ok?')
}


if (!theEnd)
    var faveSong = prompt('Is your favorite song Stairway to Heaven?')
    if (faveSong === 'yes') {
    alert('Lame.  Time for you to Ramble On.')
    stillGoing = false
}

else if (faveSong == 'no') {
    stillGoing = true
    alert('Whew.  Good to hear.  Let\'s continue, shall we?')

}


var wholeLotta = prompt('Is your favorite song Whole Lotta Love?')
    if (wholeLotta=== 'yes') {
    alert('Mine too!  Rock on!')
    endOfSurvey = true
    }

else if (wholeLotta = 'no') {
    alert("Me either.  I'm a Black Dog gal.  Thanks for playing!")
    endOfSurvey = true

    }
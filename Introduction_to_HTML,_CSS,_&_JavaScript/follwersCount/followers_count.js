let Count = 0;

function increaseCount(){
    Count++;
    displayCount();

    checkCountValue();
}

function displayCount(){
    document.getElementById("countDisplay").innerHTML = Count;
}

function checkCountValue(){
    if (Count === 10){
        alert("your Instagram post gained 10 followers! congratulaions!");
    }
    else if (Count === 20){
        alert("Your Instagram post gained 20 followers! Keep it up!")
    }
}

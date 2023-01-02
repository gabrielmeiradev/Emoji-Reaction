let emojisclicked = [],
    random = Math.round(Math.random() * 100);

function clicked(emoji){
    const feedbackNull = document.querySelector(".null-feedback");
    const emojiSelectedElement = document.querySelector("#emoji-selected-image");
    if(emoji != emojisclicked[emojisclicked.length-1]){
        emojisclicked.push(emoji);
        emojiSelectedElement.style.display="inherit";
        feedbackNull.innerHTML = `You and ${random} people reacted with <img height="10px" width="auto" src="reactions/${emoji}.svg"> to this post`;
        emojiSelectedElement.src="reactions/" + emoji + ".svg";
        emojiSelectedElement.style.marginRight = "15px";
    }

    else {
        emojisclicked.push(' ');
        feedbackNull.innerHTML = `${random} people reacted to this post`;
        emojiSelectedElement.style.display="none";
    }
}

function appLoad(){
    var   emojiListElement = document.querySelector(".emoji-list");
    let   emojiListArray   = ['like', 'love', 'haha', 'wow', 'sad', 'angry']; 

    for(var i = 0; i < emojiListArray.length; i++){
        const emojiDiv = document.createElement('div');
        emojiDiv.className = 'emoji';
        emojiDiv.innerHTML = "<img src='reactions/" + emojiListArray[i] + ".svg' onclick=clicked('" + emojiListArray[i] + "') id='" + emojiListArray[i] + "'class='emoji-img'><p class='emoji-name'>" + emojiListArray[i] + "</p>";
        emojiListElement.appendChild(emojiDiv);
    }
}
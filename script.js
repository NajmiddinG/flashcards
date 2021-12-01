var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

console.log(contentArray);


function add_card() {
    let a = document.getElementsByClassName("add_card")[0];
    a.style.display = "block";
}

function delete_cards() {
    let b = document.getElementsByClassName("item");
    let bl = b.length;
    for (let i = 0; i < bl; i++) {
        b[0].remove();
    }
    contentArray = [];
    localStorage.removeItem("questions");
}
flashcardMaker = (text) => {

    let createItem = document.createElement("div");
    createItem.classList = "item";
    createItem.setAttribute('onclick', 'answerFun(this)');
    createItem.innerHTML = `<hr>
    <p class="question_card">${text.question}</p>
    <p class="answer_card">${text.answer}</p>`;
    document.getElementsByClassName("items")[0].appendChild(createItem);
}
contentArray.array.forEach(element => {
    flashcardMaker
});

function save_button() {
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;


    let flashcard_info = {
        'question': question,
        'answer': answer
    }
    let createItem = document.createElement("div");
    createItem.classList = "item";
    createItem.setAttribute('onclick', 'answerFun(this)');
    createItem.innerHTML = `<hr>
    <p class="question_card">${question}</p>
    <p class="answer_card">${answer}</p>`;
    document.getElementsByClassName("items")[0].appendChild(createItem);
    contentArray.push(flashcard_info);
    localStorage.setItem('questions', JSON.stringify([{ 'question': "asd", 'answer': 'asdasda' }]));
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
    question = "";
    answer = "";

}


function answerFun(val) {
    if (val.children[2].style.display == "") {
        val.children[2].style.display = "flex";
    } else {
        val.children[2].style.display = "";
    }
}

function remove_card() {
    document.getElementsByClassName("add_card")[0].style.display = "none";
}
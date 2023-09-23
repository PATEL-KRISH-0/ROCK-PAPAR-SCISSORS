arr = ["Rock", "Paper", "Scissors"];

let btn = document.querySelector(".Submit")
btn.addEventListener("click", () => {

    let inde = Math.floor(Math.random() * 3);
    let comAns = arr[inde];

    let use = document.querySelector(".userInput").value;
    document.querySelector(".userInput").value = ""
    let userAns = arr[use]

    let output = document.querySelector(".output");

    console.log("outpur");

    if (userAns == comAns) {
        output.textContent = "Computer chose " + comAns + ", It's a draw 🙄";
    }


    else if (userAns == "Paper" && comAns == "Rock") {
        output.textContent = "Computer chose " + comAns + ", you win 😎."
    }
    else if (userAns == "Paper" && comAns == "Scissors") {
        output.textContent = "Computer chose " + comAns + ", Computer win 😥."
    }

    else if (userAns == "Rock" && comAns == "Paper") {
        output.textContent = "Computer chose " + comAns + ", Computer win 😥."
    }
    else if (userAns == "Rock" && comAns == "Scissors") {
        output.textContent = "Computer chose " + comAns + ", you win 😎."
    }

    else if (userAns == "Scissors" && comAns == "Paper") {
        output.textContent = "Computer chose " + comAns + ", you win 😎."
    }
    else if (userAns == "Scissors" && comAns == "Rock") {
        output.textContent = "Computer chose " + comAns + ", Computer win 😥."
    }

    else {
        output.textContent = "plese enter valid choese"
    }
})

let add_btn = document.getElementById("add_btn");
let inputContainer = document.getElementById("input");
let calculateBtn = document.getElementById("calculate");
let resetBtn = document.getElementById("Resetall");

// Add Course Row
add_btn.addEventListener("click", function () {
    let firstRow = inputContainer.cloneNode(true);
    firstRow.querySelectorAll("input, select").forEach(el => el.value = "");
    // Remove button event for the new row
    firstRow.querySelector("#remove_btn").addEventListener("click", function () {
        if (document.querySelectorAll("#main #input").length > 1) {
            firstRow.remove();
        }
    });
    // Insert before the buttons container
    document.getElementById("maindiv").insertBefore(firstRow, document.getElementById("line2"));
});

// Remove Row (for first one)
document.getElementById("remove_btn").addEventListener("click", function () {
    if (document.querySelectorAll("#main #input").length > 1) {
        inputContainer.remove();
    }
});

// Calculate GPA
calculateBtn.addEventListener("click", function () {
    let allRows = document.querySelectorAll("#main #input");
    let totalCredits = 0;
    let totalPoints = 0;

    allRows.forEach(row => {
        let credits = parseFloat(row.querySelector("#CR").value);
        let grade = parseFloat(row.querySelector("#grades").value);
        if (!isNaN(credits) && !isNaN(grade)) {
            totalCredits += credits;
            totalPoints += credits * grade;
        }
    });

    if (totalCredits > 0) {
        alert(`Your GPA is: ${(totalPoints / totalCredits).toFixed(2)}`);
    } else {
        alert("Please enter valid course details.");
    }
});

// Reset All
resetBtn.addEventListener("click", function () {
    let allRows = document.querySelectorAll("#main #input");
    allRows.forEach((row, index) => {
        if (index > 0) row.remove();
        else row.querySelectorAll("input, select").forEach(el => el.value = "");
    });
});

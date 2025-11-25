/*
Project-02 — Daily Expense Checker (MENTEE JS)

Follow each step exactly.

STEP 1 — Select elements:
  plannedInput  = document.getElementById("planned")
  actualInput   = document.getElementById("actual")
  checkBtn      = document.getElementById("checkBtn")
  resultElement = document.getElementById("result")

STEP 2 — Add click event:
  checkBtn.addEventListener("click", checkBudget)

STEP 3 — Create function checkBudget():
  - Read values using Number(...)
  - Validate numbers
  - Calculate difference = actual - planned
  - Create 'message' variable
  - Use if/else with comparison + logical operators
  - Write final message using resultElement.textContent
  - Log typeof for planned, actual, difference
*/

const plannedInput = document.getElementById("planned");
const actualInput = document.getElementById("actual");
const checkBtn = document.getElementById("checkBtn");
const resultElement = document.getElementById("result");

function checkBudget() {
    let plannedAmount = Number(plannedInput.value)
    let actualAmount = Number(actualInput.value)
    let difference = plannedAmount - actualAmount
    let message;
    if (difference >= 0) {
        message = "Well done, you stayed within budget today"
    } else if (difference < 0 && actualAmount < plannedAmount * 2) {
        message = "You went over budget today, try again tomorrow"
    } else {
        message = `Be it recorded, with a wearied sigh from the Royal Treasurer, that you have managed a feat of financial misjudgment remarkable even by the generous standards of this kingdom. Your spending has not merely drifted beyond your intended budget; it has galloped past it with the grace and subtlety of a cow attempting diplomacy.
        
To exceed your limit by twice the amount suggests not momentary carelessness, but a sustained and enthusiastic disregard for basic arithmetic. Scholars from distant universities would study your accounts not for wisdom, but as a cautionary tale of what occurs when numbers are treated as polite suggestions rather than firm boundaries.

Indeed, your budgeting technique bears a striking resemblance to the legendary Duke of Everpurse, whose purse was always empty because he insisted the coins would ‘sort themselves out.’ They did not. Neither, it seems, have yours.

The royal clerks have reviewed your expenses with the same expression they reserve for witnessing a goose attempt to operate a catapult: fascinated, yet deeply concerned. One remarked that your ledger reads less like responsible finance and more like a daring escape attempt from the concept of restraint.

May this serve as a gentle reminder, or perhaps a sharp nudge, that budgets are meant to be followed, not trampled underfoot in a spirited display of misplaced optimism.`
    }
    console.log(
        `Planned: ${typeof(plannedAmount)}
        Actual: ${typeof(actualAmount)}
        Difference: ${typeof(difference)}`
    )

    resultElement.innerText = message;
}

checkBtn.addEventListener("click", checkBudget);
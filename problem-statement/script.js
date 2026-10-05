/* =========================
   SPLITEASY JAVASCRIPT
========================= */


/* CREATE GROUP MODAL */

function openGroupModal() {
    const modal = document.getElementById("groupModal");

    if (modal) {
        modal.classList.add("show");
    }
}


function closeGroupModal() {
    const modal = document.getElementById("groupModal");

    if (modal) {
        modal.classList.remove("show");
    }
}


function createGroup() {

    const name = document.getElementById("groupName").value;

    if (name.trim() === "") {
        alert("Please enter a group name.");
        return;
    }

    alert(
        "🎉 Group '" + name +
        "' created successfully!"
    );

    closeGroupModal();
}


/* =========================
   EXPENSE CALCULATOR
========================= */

function calculateSplit() {

    const amountInput =
        document.getElementById("expenseAmount");

    if (!amountInput) return;

    const amount =
        Number(amountInput.value) || 0;

    const members = 4;

    const share =
        amount / members;

    document.getElementById("sumitShare").innerText =
        "₹" + Math.round(share);

    document.getElementById("ayushShare").innerText =
        "₹" + Math.round(share);

    document.getElementById("diyaShare").innerText =
        "₹" + Math.round(share);

    document.getElementById("abhishekShare").innerText =
        "₹" + Math.round(share);
}


/* =========================
   SPLIT METHOD
========================= */

function selectSplit(button) {

    const buttons =
        document.querySelectorAll(".split-option");

    buttons.forEach(function(btn) {

        btn.classList.remove("active-split");

    });

    button.classList.add("active-split");

}


/* =========================
   ADD EXPENSE
========================= */

function addExpense() {

    const name =
        document.getElementById("expenseName").value;

    const amount =
        document.getElementById("expenseAmount").value;

    if (name.trim() === "") {

        alert("Please enter an expense name.");

        return;
    }

    if (amount <= 0) {

        alert("Please enter a valid amount.");

        return;
    }

    alert(
        "✅ Expense added successfully!\n\n" +
        name +
        " — ₹" +
        amount
    );

    window.location.href =
        "dashboard.html";
}


/* =========================
   SETTLE PAYMENT
========================= */

function settle(person, amount) {

    const confirmPayment =
        confirm(
            "Mark ₹" +
            amount +
            " owed by " +
            person +
            " as paid?"
        );

    if (confirmPayment) {

        alert(
            "✅ Payment marked as settled.\n\n" +
            "₹" +
            amount +
            " with " +
            person
        );

    }

}


/* =========================
   SEARCH EXPENSES
========================= */

function searchExpenses() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    const search =
        input.value.toLowerCase();

    const rows =
        document.querySelectorAll(".searchable");

    rows.forEach(function(row) {

        const text =
            row.innerText.toLowerCase();

        if (text.includes(search)) {

            row.style.display = "grid";

        } else {

            row.style.display = "none";

        }

    });

}


/* =========================
   PROFILE
========================= */

function saveProfile() {

    alert(
        "✅ Profile changes saved successfully!"
    );

}


function logout() {

    const result =
        confirm("Are you sure you want to logout?");

    if (result) {

        alert("You have been logged out.");

        window.location.href =
            "index.html";

    }

}


/* =========================
   CATEGORY BUTTONS
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const categories =
            document.querySelectorAll(".category");

        categories.forEach(function(category) {

            category.addEventListener(
                "click",
                function() {

                    categories.forEach(
                        function(item) {

                            item.classList.remove(
                                "active-category"
                            );

                        }
                    );

                    category.classList.add(
                        "active-category"
                    );

                }
            );

        });

    }
);


/* =========================
   CLOSE MODAL
========================= */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("groupModal");

        if (
            modal &&
            event.target === modal
        ) {

            closeGroupModal();

        }

    }
);
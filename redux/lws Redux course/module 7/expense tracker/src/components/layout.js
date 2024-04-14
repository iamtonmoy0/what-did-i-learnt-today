import React from "react";

export default function Layout() {
  return (
    <div>
      <div class="App">
        <div class="header">
          <h1>Expense Tracker</h1>
        </div>
      </div>
      <div class="main">
        <div class="container">
          <div class="top_card">
            <p>Your Current Balance</p>
            <h3>
              <span>৳</span>
              <span>10500</span>
            </h3>
          </div>

          <div class="form">
            <h3>Add new transaction</h3>

            <div class="form-group">
              <label for="transaction_name">Name</label>
              <input
                type="text"
                name="transaction_name"
                placeholder="My Salary"
              />
            </div>

            <div class="form-group radio">
              <label for="transaction_type">Type</label>
              <div class="radio_group">
                <input
                  type="radio"
                  value="income"
                  name="transaction_type"
                  checked
                />
                <label for="transaction_type">Income</label>
              </div>
              <div class="radio_group">
                <input
                  type="radio"
                  value="expense"
                  name="transaction_type"
                  placeholder="Expense"
                />
                <label for="transaction_type">Expense</label>
              </div>
            </div>

            <div class="form-group">
              <label for="transaction_amount">Amount</label>
              <input
                type="number"
                placeholder="300"
                name="transaction_amount"
              />
            </div>

            <button class="btn">Add Transaction</button>

            <button class="btn cancel_edit">Cancel Edit</button>
          </div>

          <p class="second_heading">Your Transactions:</p>

          <div class="conatiner_of_list_of_transactions">
            <ul>
              <li class="transaction income">
                <p>Earned this month</p>
                <div class="right">
                  <p>৳ 100</p>
                  <button class="link">
                    <img class="icon" src="./images/edit.svg" />
                  </button>
                  <button class="link">
                    <img class="icon" src="./images/delete.svg" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer">&copy;2022 Learn with Sumit</div>
    </div>
  );
}

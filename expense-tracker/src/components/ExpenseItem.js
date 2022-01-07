import "./ExpenseItem.css";

function ExpenseCard() {
  return (
    <div className="expense-item">
      <div>January 5th 2022</div>
      <div className="expense-item__description">
        <h2>Birthday</h2>
        <div className="expense-item__price">$30</div>
      </div>
    </div>
  );
}

export default ExpenseCard;

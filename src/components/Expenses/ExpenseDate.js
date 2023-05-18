import './ExpenseDate.css'

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const date = props.date.toLocaleString("en-Us", { day: "2-digit" });
  console.log(props.date, "HERE__HERE");
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__date'>{date}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
}

export default ExpenseDate;
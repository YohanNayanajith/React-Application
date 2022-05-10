import "./App.css";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import TestExpenseItem from "./components/TestExpenseItem/TestExpenseItem";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expense = [
    {id:'e1',title:'New Desk',amount:450,date: new Date(2022,4,4)},
    {id:'e2',title:'New Chair',amount:500,date: new Date(2022,4,10)},
    {id:'e3',title:'New Document Stuff',amount:600,date: new Date(2022,4,22)},
    {id:'e4',title:'New Window',amount:200,date: new Date(2022,4,30)},
  ]

  return (
    
    <Card className="expenses">
      <NewExpense />
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date} />
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date} />
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date} />
      <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date} />

      {/* <TestExpenseItem items={expense} /> */}
    </Card>
  );
}

export default App;

import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const expenses = props.item;

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.item.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <li>
                <Card className="expenses">
                    <ExpenseFilter selected = {filteredYear} onFilterChange = {filterChangeHandler}></ExpenseFilter>
                    <ExpensesChart expenses = {filteredExpenses}/>
                    <ExpensesList items = {filteredExpenses}></ExpensesList>
                </Card>
            </li>
        </div>
    );
}

export default Expenses;
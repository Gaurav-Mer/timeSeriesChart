import React, { useMemo, useState } from 'react'
import useFetchTodo from './useFetchTodo';

const TodoList = () => {
    const { todoData, handleChange, addNewData } = useFetchTodo()
    const [todo, setTodo] = useState({ title: "", isCompleted: false });
    const handleData = () => {
        addNewData({ ...todo, id: Date.now() });
    };


    const { completedData, pendingData } = useMemo(() => {
        const pendingData = [];
        const completedData = []
        todoData.forEach((item) => {
            !item?.isCompleted ? pendingData.push(item) : completedData.push(item)
        });
        return { pendingData, completedData }
    }, [todoData]);

    return (
        <div style={{ padding: 20 }}>
            I am todo list :-
            <div style={{ padding: 20, display: 'flex', gap: 13 }}>
                <input type="text" name='title' value={todo?.title} onChange={(e) => setTodo(prev => ({ ...prev, title: e.target.value }))} />
                <button onClick={handleData}>submit</button>
            </div>
            <h4>Listing are  :-  </h4>
            <div style={{ display: 'flex', gap: 20 }}>
                <div>
                    <h2>Pending todo are :-</h2>
                    {pendingData?.map((item) => {
                        return <SingleData item={item} handleChange={handleChange} />
                    })}
                </div>
                <div>
                    <h2>compled todo are :-</h2>
                    {completedData?.map((item) => {
                        return <SingleData item={item} handleChange={handleChange} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default TodoList;


const SingleData = ({ item, handleChange }) => {
    return (
        <>
            <h4>{item?.title}</h4>
            <div class="form-check">
                <input onChange={() => handleChange(item?.id)} class="form-check-input" type="checkbox" checked={item?.isCompleted ? true : false} value={item?.isCompleted} name='isCompleted' />
                <label class="form-check-label" for="">Is completd </label>
            </div>

        </>
    )
}
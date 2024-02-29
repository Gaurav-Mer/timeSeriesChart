import React, { useEffect, useState } from 'react'

const useFetchTodo = () => {
  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    const data = [{ title: "first title ", isCompleted: false, id: 23 }, { title: "second title ", isCompleted: true, id: "df023" }]
    setTodoData(data)
  }, []);


  const handleChange = (id) => {
    setTodoData(prev => {
      let obj = [...prev];
      const currIndex = obj.findIndex((item) => item?.id === id);
      if (currIndex > -1) {
        obj[currIndex].isCompleted = !obj[currIndex].isCompleted;
      }
      return obj;
    })
  }

  const addNewData = (data) => {
    setTodoData(prev => [data, ...prev])
  }
  return { todoData, handleChange, addNewData }
}

export default useFetchTodo;

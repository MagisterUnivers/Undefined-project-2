import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  createUserTaskThunk,
  getUserTaskThunk,
} from './calendarEventsOperations';

const FormComponent = () => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [priority, setPriority] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('2023-03-17');

  const dispatch = useDispatch();

  const handleSubmitTasks = (e) => {
    e.preventDefault();
    const year = 0; // Значение по умолчанию или фиктивное значение
    const month = 0; // Значение по умолчанию или фиктивное значение
    dispatch(getUserTaskThunk(year, month));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Создание объекта с данными формы
    const formData = {
      title,
      start,
      end,
      priority,
      category,
      date,
    };

    dispatch(createUserTaskThunk(formData));
    // Здесь можно выполнить отправку данных формы на сервер или выполнить другую необходимую обработку

    // Сброс значений полей формы
    setTitle('');
    setStart('');
    setEnd('');
    setPriority('');
    setCategory('');
    setDate('2023-03-17');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%',
      }}
    >
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Start:
          <input
            type="text"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </label>
        <br />
        <label>
          End:
          <input
            type="text"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </label>
        <br />
        <label>
          Priority:
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleSubmitTasks}>
        <button type="submit">Get All Tasks</button>
      </form>
    </div>
  );
};

export default FormComponent;

import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "@fullcalendar/core/package.json";
import "@fullcalendar/daygrid/package.json";
import "@fullcalendar/timegrid/package.json";

import { setEvents, setTodos, setRepeatingEvents } from "./Slices/EventsSlice";

import EventsDisplay from "./EventsDisplay";
export default function App() {
  const events = useSelector((state) => state.events);
  var i = 0;
  function id() {
    i++;
    return i;
  }
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (todoName === null || todoStartDate.current.value === null) return;
    dispatch(
      setTodos({
        title: todoName,
        start: todoStartDate.current.value,
        type: "todo",
        id: id(),
      })
    );
    setTodoName("");
    // showToast();
  };

  // TodoValue state
  const [todoName, setTodoName] = useState();
  const todoNameRef = useRef();
  const todoStartDate = useRef();

  var groupId = "a1";
  var i = 0;
  const handleAddRepeatingEvent = () => {
    if (
      repeatingEventRef.current.value === null ||
      repeatingEventDate.current.value === null
    )
      return;
    if (
      events.events.find(
        (event) => repeatingEventRef.current.value === event.title
      )
    ) {
      i++;
      groupId += i;
    }
    dispatch(
      setRepeatingEvents({
        title: repeatingEventRef.current.value,
        start: repeatingEventDate.current.value,
        groupId: "999",
        type: "repeating-event",
        id: id(),
      })
    );
    repeatingEventRef.current.value = "";
  };
  // RepeatingEvents state
  const [repeatingEventName, setrepeatingEventName] = useState();
  const repeatingEventRef = useRef();
  const repeatingEventDate = useRef();

  // Adding Event
  const handleAddEvent = () => {
    if (todoName === null || eventStartDate.current.value === null) return;
    dispatch(
      setEvents({
        title: eventName,
        start: eventStartDate.current.value,
        end: eventEndDate.current.value,
        type: "event",
        id: id(),
      })
    );
  };
  // TodoValue state
  const [eventName, setEventName] = useState();
  const eventRef = useRef();
  const eventStartDate = useRef();
  const eventEndDate = useRef();

  // Adding Task
  const handleAddTask = () => {
    if (taskName === null || start === null) return;
    dispatch(
      setTasks({
        title: taskName,
        start: taskStartDate.current.value,
        end: taskEndDate.current.value,
        type: "task",
        id: id(),
        description: taskDescriptionRef.current.value,
      })
    );
  };
  // TodoValue state
  const [taskName, setTaskName] = useState();
  const taskRef = useRef();
  const taskDescriptionRef = useRef();
  const taskStartDate = useRef();
  const taskEndDate = useRef();

  return (
    <div className="container p-md-6 pt-sm-3">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title">Add Todo</h5>
              <p className="card-text">Add a To-do</p>
              <input
                type="text"
                placeholder="Break-Point"
                ref={todoNameRef}
                className="input"
                onChange={(e) => setTodoName(todoNameRef.current.value)}
              />
              <p>Start Date</p>
              <input
                type="datetime-local"
                className="input"
                ref={todoStartDate}
              />
              <button className="btn mt-2 btn-dark" onClick={handleAddTodo}>
                ADD
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title">Special Event</h5>
              <p className="card-text">Mark a special Event</p>
              <input
                placeholder="Special Event..."
                type="text"
                ref={repeatingEventRef}
                className="input"
                onChange={(e) =>
                  setrepeatingEventName(repeatingEventRef.current.value)
                }
              />
              <p>Date</p>
              <input
                type="datetime-local"
                className="input"
                ref={repeatingEventDate}
              />

              <button
                className="btn mt-2 btn-dark"
                onClick={handleAddRepeatingEvent}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title">Event</h5>
              <p className="card-text">Mark an Event</p>
              <input
                placeholder="Event..."
                type="text"
                ref={eventRef}
                className="input"
                onChange={(e) => setEventName(eventRef.current.value)}
              />
              <p>Date</p>
              <input
                type="datetime-local"
                className="input"
                ref={eventStartDate}
              />
              <input
                type="datetime-local"
                className="input"
                ref={eventEndDate}
              />

              <button className="btn mt-2 btn-dark" onClick={handleAddEvent}>
                ADD
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title">Task</h5>
              <p className="card-text">Create a task</p>
              <input
                placeholder="Event..."
                type="text"
                ref={taskRef}
                className="input"
                onChange={(e) => setTaskName(taskRef.current.value)}
              />

              <p>Start Date</p>
              <input type="date" className="input" ref={taskStartDate} />

              <p>End Date</p>
              <input type="date" className="input" ref={taskEndDate} />

              <button className="btn mt-2 btn-dark" onClick={handleAddTask}>
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-center  "
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          themeSystem="Simplex"
          plugins={[dayGridPlugin]}
          events={events}
        />
      </div>
      <div className="row">
        <h1
          className="text-center"
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            textTransform: "uppercase",
          }}
        >
          Event's / To-Do's / Tasks
        </h1>
        {events.events.map((event) => {
          // if(event.type ==="event")
          return <EventsDisplay key={id()} event={event} />;
          // if(event.type ==="to-do") return <TodoDisplay title={event}/>
          // if(event.type ==="task") return <TaskDispaly title={event}/>
        })}
      </div>
    </div>
  );
}

import "./App.css";
import { Form} from "./components/Form";
//import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
//import {Home} from "./pages/Home";
//import {Menu} from "./pages/Menu";
//import {Contact} from "./pages/Contact";
//import {Navbar} from "./Navbar";
//import Axios from "axios";for fetch data from api
//import {useEffect, useState } from "react";
//import { useState } from "react"; to do list
//import { Task } from "./Task"; to do list
// To do list
/*function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input  className="Ifield" onChange={handleChange} />
        <button className="btask" onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}*/
//Fetch data from Api exapmle 1
/*function App(){
  //fetch("https://catfact.ninja/fact")
   //.then((res) => res.json())
   //.then((data) => {
    //console.log(data);
  //});
  const [catFact,setCatFact] = useState("");
  const fetchCatFact= () =>{
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }
  useEffect(() => {
    fetchCatFact();
  }, []);
  
  
  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p> {catFact} </p>
    </div>
  );
}*/
//Fetch Data from Api example 2
/*function App(){
  const [name,setName]=useState("")
  const [predictedAge, setPredictedAge] = useState(null);
  const fetchData=()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setPredictedAge(res.data);
    });
  }
  return (
    <div className="App">
      <input
       placeholder="Ex Pedro.." 
       onChange={(event)=>{
       setName(event.target.value);
       }}
      />
      <button onClick={fetchData}> Predict Age</button>
      <h1>Name:{predictedAge?.name}</h1>
      <h1>Preducted Age:{predictedAge?.age}</h1>
      <h1>Count:{predictedAge?.count}</h1>
    </div>
  );
}*/
//fetch data from API example 3
/*function App(){
  const [generatedExcuse, setGeneratedExcuse]= useState("");
  const fetchExcuse = (excuse) =>{
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse);
      }
    );
  };
  return (
    <div className="App">
     <h1>Generate an Excuse</h1>
     <button onClick={()=>fetchExcuse("party")}>Party</button>
     <button onClick={()=>fetchExcuse("family")}>Family</button>
     <button onClick={()=>fetchExcuse("office")}>Offiice</button>
     <p>{generatedExcuse}</p>
    </div>
  )
}*/
//Routes i react router dom
/*function App(){
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<h1>Pagge Not Found</h1>}/>
      </Routes>
    </Router>
  </div>
  );
}*/
//Module 11 forms in react
function App(){
  return(
    <div className="App">
      <Form/>
    </div>
  )
}
export default App;
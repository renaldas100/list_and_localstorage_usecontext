import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TaskList from "./components/task_list/task_list";
import Footer from "./components/footer";
import {useState, useEffect} from "react";
import UzduotysContext, {UzduotysContextProvider} from "./components/context/uzduotysContext";

function App() {



  return (
    <div className="container mt-5">
        <UzduotysContextProvider>
            <TaskList></TaskList>
            <nav className="navbar fixed-bottom bg-body-tertiary">
                <div className="container-fluid">
                    <Footer></Footer>
                </div>
            </nav>
        </UzduotysContextProvider>
    </div>
  );
}

export default App;

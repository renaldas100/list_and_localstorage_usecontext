import UzduociuSarasas from "./inner/uzduociuSarasas";
import PridetiUzduoti from "./inner/pridetiUzduoti";

import {useState, useEffect, useContext} from "react";
import UzduotysContext from "../context/uzduotysContext";

const TaskList=(props)=>{
// let initUzduotys=[
    // {pavadinimas:"", tipas:""},

// ]



     // const data=localStorage.getItem("uzduotys")
     // if(data!=null) {
     //     initUzduotys = JSON.parse(data);
     //     console.log("uzkrauna")
     // }




    return(
        <div className="row">
            <div className="col-md-6">
                <PridetiUzduoti></PridetiUzduoti>
            </div>
            <div className="col-md-6">
                <UzduociuSarasas></UzduociuSarasas>
            </div>
        </div>
    )
}
export default TaskList;
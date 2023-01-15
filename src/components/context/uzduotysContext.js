import React, {useEffect} from "react";
import {useState} from "react";



const UzduotysContext=React.createContext({
    products:[
        // {pavadinimas:"kazkokia uzduotis", tipas:"nera skubu"}
    ],
    pridetiUzduoti:(product)=>{},
    trintiUzduoti:(index)=>{}
});

export const UzduotysContextProvider=(props)=>{

    const [uzduotys, setUzduotys]=useState([]);

    const issaugotiUzduotis=()=>{
        localStorage.setItem("uzduotys", JSON.stringify(uzduotys))
    };

    const pridetiUzduoti=(uzduotis)=>{
        uzduotys.push(uzduotis);
        issaugotiUzduotis();
        setUzduotys(Array.from(uzduotys));
    };

    const trintiUzduoti=(index)=>{
        uzduotys.splice(index,1);
        issaugotiUzduotis();
        setUzduotys(Array.from(uzduotys));
    };

    useEffect(()=>{
        const data=localStorage.getItem("uzduotys")
        if(data!=null) {
            const initUzduotys = JSON.parse(data);
            setUzduotys(initUzduotys);
        }
    },[]);



    return (
        <UzduotysContext.Provider value={
        {
            products:uzduotys,
            pridetiUzduoti:pridetiUzduoti,
            trintiUzduoti:trintiUzduoti
        }
    }>
            {props.children}
        </UzduotysContext.Provider>
    );

};

export default UzduotysContext;
import Kortele from "../../user_interface/kortele";
import UzduotisItem from "./uzduotisItem";
import UzduotysContext from "../../context/uzduotysContext";
import {useContext, useState} from "react";


const UzduociuSarasas=(props)=>{

const uzduotysCtx=useContext(UzduotysContext);
const [pasirinktasTipas,setPasirinktasTipas]=useState("Visi tipai");


let uzduociuSarasas=[];
uzduotysCtx.products.forEach((uzduotis, index)=>{
    uzduociuSarasas.push(
        (<UzduotisItem key={index} uzduotis={ {...uzduotis, key:index} } onTrintiUzduoti={props.onTrintiUzduoti}></UzduotisItem>)
    );
})

    let uzduociuSarasasFiltruotas=[];

    // for (let i = 0; i < uzduociuSarasas.length; i++) {
    //     if (uzduociuSarasas[i].props.uzduotis.tipas == pasirinktasTipas) {
    //         uzduociuSarasasFiltruotas.push(uzduociuSarasas[i])
    //     }
    //     if (pasirinktasTipas == "Visi tipai") {
    //         uzduociuSarasasFiltruotas.push(uzduociuSarasas[i])
    //     }
    // }

    // console.log

    uzduociuSarasas.forEach((item)=>{

    if (item.props.uzduotis.tipas == pasirinktasTipas) {
        uzduociuSarasasFiltruotas.push(item)
    }
    if (pasirinktasTipas == "Visi tipai") {
        uzduociuSarasasFiltruotas.push(item)
    }
    });


    const onTipoPasirinkimas=(event)=>{
        setPasirinktasTipas(event.target.value)
        // console.log(event.target.value)
    };
    // console.log(pasirinktasTipas);
    // console.log(uzduociuSarasas[0].props.uzduotis.tipas);

return (

    <Kortele title="Užduočių sąrašas">
        <select style={{width:"250px", height:"50px", fontSize:"20px", background:"#343a40", color:"gold", borderRadius:"10px 10px 0px 0px", paddingLeft:"15px"}} onChange={onTipoPasirinkimas}>
            <option value={"Visi tipai"}>Visi tipai</option>
            <option value={"Neskubus"}>Neskubus</option>
            <option value={"Rutininis"}>Rutininis</option>
            <option value={"Skubus"}>Skubus</option>
            <option value={"Ypač skubus"}>Ypač skubus</option>
            <option value={""}>Nėra užduoties tipo</option>
        </select>
        <ul className="list-group">
            {/*{uzduociuSarasas}*/}
            {uzduociuSarasasFiltruotas}
        </ul>
        {uzduotysCtx.products.length==0? <div className="alert alert-info">Užduočių nėra</div> : ""}

    </Kortele>

)

}
export default UzduociuSarasas;
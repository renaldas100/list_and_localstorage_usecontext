import UzduotysContext from "./context/uzduotysContext";
import {useContext} from "react";


const Footer=()=>{

    const uzduotysCtx=useContext(UzduotysContext);


    return <div className="col-md-12">
    <div className="alert alert-danger">Užduočių yra: {uzduotysCtx.products.length}</div>


</div>


}
export default Footer;
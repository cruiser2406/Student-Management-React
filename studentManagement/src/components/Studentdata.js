import { useState } from "react";

const Studentdata = () => {
    const [data, setdata] = useState("");
    const[enroll,setenroll]=useState("");
    const handleclick=()=>{
    
    }

    async function Getdata(){
        let response = await fetch("http://localhost:3000/students");
    let result = await response.json();
    let p = result.map((el) => {
        return(
            <tbody><tr><td>{el.task1}</td><td>{el.task2}</td><td>{el.task3}</td><td>{el.id}</td></tr></tbody>
        )
    })
    setdata(p);

    }
    Getdata();
    return ( <div><table>
        <thead><th><td>name</td><td>class</td><td>ph_num</td><td>id</td></th></thead>
    </table>{data}</div> );
}
 
export default Studentdata;
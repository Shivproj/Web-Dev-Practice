
import {useEffect,useState} from 'react';
const  Student_grid=()=> {
    const [list,setList] = useState([]);
    useEffect(()=>{ 
        fetch("http://localhost:5000/students").then((res)=>res.json()).then(res=>setList(res)); 
    },[])
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item)=>{
                        return(
                    <tr>
                        <td>{item.Name}</td>
                        <td>{item.Email}</td>
                        <td>{item.Age}</td>
                        <td>{item.Phone}</td>
                    </tr>)})
                    
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default Student_grid

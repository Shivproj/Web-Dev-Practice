import {useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useRouteMatch} from 'react-router-dom'

const Student_create=()=> {
    const [record,setRecord] = useState({});
    const history = useHistory();
    const {url} = useRouteMatch();
    const Submit=()=> {
        setRecord({...record,record});
        fetch('http://localhost:5000/students', {
  method: 'POST',
  body: JSON.stringify(record),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
history.push(`/${url}/student_grid`)




    }
    
  return (
    <div>
        <label>Name</label>
        <input type="text" onChange={(e)=>setRecord({...record,Name: e.target.value})}/>
        <label>Email</label>
        <input type="text" onChange={(e)=>setRecord({...record,Email: e.target.value})}/>
        <label>Age</label>
        <input type="text" onChange={(e)=>setRecord({...record,Age: e.target.value})}/>
        <label>Phone</label>
        <input type="text" onChange={(e)=>setRecord({...record,Phone: e.target.value})}/>

        <button type="button" onClick={Submit}>Submit</button>



       
      
    </div>
  )
}

export default Student_create

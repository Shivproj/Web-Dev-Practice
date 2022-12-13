import Student_create from "./student_create"
import Student_grid from "./student_grid"
import {Link,Switch ,Route,Redirect,useRouteMatch} from 'react-router-dom'

const Student_parent=() =>{
    const {url} = useRouteMatch();

  return (
    <>
    yooo
  
  
    
    <Switch>
    <Route path={`/student_parent/student_create`} children={<Student_create/>}/>
    <Route path={`/student_parent/student_grid`} children={<Student_grid/>}/>

    </Switch>


    
    </>
 
  )
}

export default Student_parent
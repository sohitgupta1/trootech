import { useDispatch,useSelector } from "react-redux";
import moment from 'moment';
import { Link, useHistory } from "react-router-dom";
import { todoListData,todoEditData } from '../redux/action'

const Home =()=>{

const dispatch = useDispatch();
const history = useHistory();
const toDoList = useSelector(
  (state)=>state.todoList
)

const dateFormatter = (date) =>{
  return moment(date).format('dddd-MM-yyyy');

}

const editTodoList = (data) =>{

  dispatch(todoEditData(data));
  history.push({
    pathname:'/todo',
  })

}

const deleteTodo = (data) =>{
let arr = toDoList.filter((list)=> list.id !==data.id)
dispatch(todoListData(arr))
}
    return (
      <>
      <div className="container">
     <table className="table table-bordered ">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Task Name</th>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {toDoList.length > 0 ? toDoList.map((list,index)=>{

      return(
        <tr key={`todo${index}`}>
        
        <th scope="row">{list.id}</th>
        <td>{list.task_name}</td>
        <td>{list.startDate?dateFormatter(list.startDate):"NA"}</td>
        <td>{list.selectedStatus?list.selectedStatus.value:""}</td>
        <td><Link onClick={()=>editTodoList(list)} to="#">Edit</Link> <Link onClick={()=>deleteTodo(list)} to="#">DELETE</Link></td>
        
        </tr>
      )
   
    }) 

      :
      <tr>No Record Found</tr>
          }
    
  </tbody>
</table>
</div>
    </>
        
    )
    
}
    
    
    
    
    
    
    
    export default Home;
    
    
    
    
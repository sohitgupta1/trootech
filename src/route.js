
import { BrowserRouter, Route  } from "react-router-dom";
import Header from './component/commonComponent/Header'
import Home from './component/Home'
import Todo from './component/CreateTodo'

const AppRoute =()=>{

return (
    <>
   
    <BrowserRouter >
    <Header />
    <Route exact path ="/" component={Home}></Route>
    <Route exact path ="/todo" component={Todo}></Route>
    </BrowserRouter>
    </>
    
)

}












export default  AppRoute;




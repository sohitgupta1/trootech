
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Select from 'react-select';
import { connect } from "react-redux";
import { todoListData,todoEditData } from '../redux/action'

class Login extends Component {
    constructor() {
        super();
        this.state = {
          alertMsg:false,
          startDate: new Date(),
          msg:'Todo Added successfully',
          id:'',
          task_name:'',
           options : [
            { value: 'Active', label: 'Active' },
            { value: 'Inactive', label: 'Inactive' },
            
          ],
          selectedStatus:'',

            error:{
                selectedStatus:'',
                task_name:''
            }
        
        };
      }

      componentDidMount(){
        if(this.props.editData){
          let {id,task_name,startDate,selectedStatus} = this.props.editData
          this.setState({
            id,task_name,startDate,selectedStatus,msg:"Todo Updated successfully"
          })

        }
      }

      componentWillUnmount(){
        this.props.todoEditData('')
      }

      validateForm = () =>{
        try {

            let {selectedStatus, task_name } = this.state
            let errorObj= {
              selectedStatus:'',
                task_name:''
            }
            let validStatue = true
            if(!selectedStatus){
                errorObj.selectedStatus = "Status Required"
                validStatue = false
            }
    
            if(!task_name){
                validStatue = false
                errorObj.task_name = "Task Name required"
            }
            this.setState({
                error:errorObj
            })
    
            return validStatue    
        } catch (error) {
            console.log(error)
            
        }
        
      }
      
      handleOnchange = (e) =>{
          try {
            this.setState({
                [e.target.name]:e.target.value,
                error:{
                    ...this.state.error,
                    [e.target.name]:e.target.value && ''
                }
            })      
          } catch (error) {
              console.log(error)
          }
        
      }
      
    getData = () =>{
        try {
          if(this.validateForm()){

            if(this.props.editData){
              let { id } =this.props.editData
              let {task_name,startDate,selectedStatus} = this.state
              let newArr = this.props.todoData.filter((list)=>list.id !==id)
              newArr.push({
                startDate,task_name,selectedStatus,id:id
              })
              this.props.todoListData(newArr);
            } else {
              let {startDate,task_name,selectedStatus} = this.state
              
              let arr= this.props.todoData.length > 0?this.props.todoData:[]
               arr.push({startDate,task_name,selectedStatus,id:Math.random().toString(36).slice(-6)})
              this.props.todoListData(arr);
            }
              

             this.setState({
               alertMsg:true
             })
            }     
        } catch (error) {
            console.log(error)
        }
    }
    
  render() {
    const {selectedStatus, task_name,options,alertMsg,msg } = this.state
    return (
      <>
      {alertMsg &&
        <div className="alert alert-success" role="alert">
        {msg}
      </div>
      }
      
        <div className="container mt-2 mb-4">
        <div className="col-sm-8 ml-auto mr-auto">
          <ul className="nav nav-pills nav-fill mb-1" id="pills-tab" role="tablist">
            <li className="nav-item"> <a className="nav-link active" id="pills-signin-tab" data-toggle="pill" href="#pills-signin" role="tab" aria-controls="pills-signin" aria-selected="true">Todo</a> </li>
  
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-signin" role="tabpanel" aria-labelledby="pills-signin-tab">
              <div className="col-sm-12 border border-primary shadow rounded pt-2">
               
                  <div className="form-group">
                    <label className="font-weight-bold">Date <span className="text-danger"></span></label>
                    <div>
                    <DatePicker className="form-control" selected={this.state.startDate} onChange={(date) => this.setState({
                    startDate:date
                  })} />
                  </div>
                   
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold">Task Name <span className="text-danger">*</span></label>
                    <input type="text" name="task_name" id="task_name" onChange={(e)=>this.handleOnchange(e)} value={task_name} className="form-control" placeholder="Enter Task Name" required />
                    <span className="text-red">{this.state.error.task_name}</span>
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold">Status <span className="text-danger">*</span></label>
                    <Select
                      value={selectedStatus}
                      onChange={(val)=>this.setState({
                        selectedStatus:val,
                        error:{
                          ...this.state.error,
                          selectedStatus: ''
                      }
                      })}
                      options={options}
                    />
                    <span className="text-red">{this.state.error.selectedStatus}</span>
                  </div>

       
              
                  <div className="form-group">
                    <input type="submit" name="submit" defaultValue="Sign In" onClick={()=>this.getData()} className="btn btn-block btn-primary" />
                  </div>
                
              </div>
            </div>
            
          </div>
        </div>
     
      </div>
          </>
      )
  }
}

const mapStateProps = (state)=>{
return{
  todoData:state.todoList,
  editData:state.todoEditData
}
}
const mapDispatchToProps = {
  todoListData,
  todoEditData
}

export default connect(mapStateProps,mapDispatchToProps )(withRouter( Login));


    
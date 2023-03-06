import { Component } from 'react';
import './employers-add-form.css';



class EmployersAddForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            salary: ""
        }
    }

    onChangeValue =(e)=>{
        this.setState(
        {[e.target.name] : e.target.value}
        )
    }

    onSubmit =(e)=>{
        e.preventDefault();
        if(this.state.name.length>3 && this.state.salary.length >1){
            this.props.onPush(this.state.name, this.state.salary)
            this.setState({
                error: false
            })
        } else {
            this.setState({
                error: true
            })
        }
        this.setState({
            name: "",
            salary: ""
        })
    }

    render(){
    const {name, salary, error}=this.state;
    let validate ="form-control new-post-label";
     if(error){
        validate += ' red'
     }
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className={validate}
                        placeholder="Как его зовут?"
                        name ='name'
                        value={name}
                        onChange={this.onChangeValue}
                        />
                    <input type="number"
                        className={validate}
                        placeholder="З/П в $?"                        
                        name ='salary'
                        value={salary}
                        onChange={this.onChangeValue}/>
    
                    <button type="submit"
                            className="btn btn-outline-light" >Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;
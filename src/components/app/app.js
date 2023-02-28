import { Component } from 'react';

import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            data : [
                {name:"Antoni Soprano" , salary:12, increase: true, best:false, error: false,  id:1},
                {name:"Leon Carleon", salary:1800, increase: false, best:false, error: false, id:2},
                {name:"Robert De Niro", salary:4800, increase: false, best:false, error: false, id:3}
            ]
        }
        this.maxId = 4
        
  
    }

    deleteItem = (id)=>{
        this.setState(({data})=>{
            return {
                data: data.filter(item=> item.id !== id)
            }
        })
    }

    pushItem = (name, salary) =>{
        const newPerson ={
            name,
            salary,
            increase: false,
            best:false,
            id: this.maxId++
        }
        this.setState(({data})=>{
            return {
                data: [...data, newPerson]
            }
        })
    }


    onToggleIncrease=(id)=>{
        this.setState(({data})=>{
            const index = data.findIndex(elem =>elem.id ===id)
            const old = data[index]
            const newItem ={...old, increase: !old.increase} //здесь мы после ...old можем добавлять новые свойства, и если они будут совпадать что развернется в ...old, то новые будут заменять старые
            const newArr =[...data.slice(0,index), newItem, ...data.slice(index+1)]
            return{
                data:newArr
            }
        })
    }

    onToggleRise = (id)=>{
        this.setState(({data})=>({
            data: data.map(item=>{
                if(item.id===id){
                    return {...item, best: !item.best}
                }
                return item
            })
        }))
    }
    
    render(){
      const workers = this.state.data
        return (
            <div className="app">
                <AppInfo
                workers={workers}/>
                    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}/>
                <EmployersAddForm
                onPush ={this.pushItem}/>
            </div>
    
            
        )
    }
}

export default App;


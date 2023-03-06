import { Component } from 'react';

import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: "Antoni Soprano", salary: 12, increase: true, best: false, id: 1 },
                { name: "Leon Carleon", salary: 1800, increase: false, best: false, id: 2 },
                { name: "Robert De Niro", salary: 4800, increase: false, best: false, id: 3 }
            ],
            term: "",
            filter: 'Все сотрудники'
        }
        this.maxId = 4


    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    pushItem = (name, salary) => {
        const newPerson = {
            name,
            salary,
            increase: false,
            best: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            return {
                data: [...data, newPerson]
            }
        })
    }


    onToggleIncrease = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id)
            const old = data[index]
            const newItem = { ...old, increase: !old.increase } //здесь мы после ...old можем добавлять новые свойства, и если они будут совпадать что развернется в ...old, то новые будут заменять старые
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)]
            return {
                data: newArr
            }
        })
    }

    onToggleRise = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, best: !item.best }
                }
                return item
            })
        }))
    }

    searchEmp = () => {
        const { data, term, filter } = this.state;
        if(filter==='Все сотрудники'){
            return data.filter(item =>{
                return item.name.indexOf(term) > -1
            })
        } else if( filter ==='На повышение'){
            return data.filter(emp => emp.best === true && emp.name.indexOf(term) > -1)
        } else{
            return data.filter(emp => emp.salary > 1000 && emp.name.indexOf(term) > -1)
        }
        
    }

    onChangeFilter = (value) =>{
        this.setState({filter: value})
       
    } 


    onUpdateSearch =(term) => {
        this.setState({term})
    }


    render() {
        const visibleData = this.searchEmp()

        return (
            <div className="app">
                <AppInfo
                    workers={this.state.data} />

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                    onChangeFilter={this.onChangeFilter}
                    selectedFilter={this.state.filter}/>
                </div>
                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise} />
                <EmployersAddForm
                    onPush={this.pushItem} />
            </div>


        )
    }
}

export default App;


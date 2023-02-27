import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

function App(){
    const data = [
        {name:"Antoni Soprano" , salary:12,  id:1},
        {name:"Leon Carleon", salary:1800,  id:2},
        {name:"Robert De Niro", salary:4800,  id:3}
    ]
    
    return (
        <div className="app">
            <AppInfo/>
                
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>

        
    )
}

export default App;


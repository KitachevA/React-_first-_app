import EmployersListItem from '../employers-list-item/employers-list-item'
import './employer-list.css';

const EmployersList = ({data, onDelete, onToggleIncrease, onToggleRise}) =>{
    const person = data.map(item =>{
        const {id, ...itemProps} =item; //Деструктуризация отдельно id, а itemProps это осталные свойтсва обьекта data
        return( <EmployersListItem 
                key={id} 
                {...itemProps}
                onDelete={()=> onDelete(id)}
                onToggleIncrease={()=>onToggleIncrease(id)}
                onToggleRise={()=>onToggleRise(id)}/>
        )
    })
    
    return (
        <ul className="app-list list-group">
            {person}
        </ul>
    )
}

export default EmployersList;
import EmployersListItem from '../employers-list-item/employers-list-item'
import './employer-list.css';

const EmployersList = ({data}) =>{
    const person = data.map(item =>{
        const {id, ...itemProps} =item; //Деструктуризация отдельно id, а itemProps это осталные свойтсва обьекта data
        return( <EmployersListItem key={id} {...itemProps}/>
        )
    })
    
    return (
        <ul className="app-list list-group">
            {person}
        </ul>
    )
}

export default EmployersList;
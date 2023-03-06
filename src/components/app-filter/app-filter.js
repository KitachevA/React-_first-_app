import "./app-filter.css";

const AppFilter = (props) => {
    const { onChangeFilter, selectedFilter } = props
    const buttons = ['Все сотрудники', 'На повышение', 'З/П больше 1000']

    
    return (
        <div className="btn-group">
            {buttons.map(btn => {
                const className = btn===selectedFilter ? "btn btn-light": "btn btn-outline-light" 
                return (
                <button className={className}
                        type="button"
                        key={btn}
                        onClick={()=>onChangeFilter(btn)}>
                        {btn}
                    </button>
                )
            })}
        </div>
    )
}

export default AppFilter;
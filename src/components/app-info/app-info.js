import './app-info.css';

const AppInfo = (props) => {
    const wholeWorkers = props.workers
    const inWorkers = wholeWorkers.filter(item => item.increase===true)
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Юдеми</h1>
            <h2>Общее число сотрудников: {wholeWorkers.length} </h2>
            <h2>Премию получат: {inWorkers.length} </h2>
        </div>
    )
}

export default AppInfo;


 
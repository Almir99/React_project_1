import "./Chart.css"
import ChartBar from "./ChartBar";

const Chart = props => {

    let max = 0

    for(let i = 0; i < props.dataPoint.length; i++){
        if(props.dataPoint[i].value > max){
            max = props.dataPoint[i].value
        }
    }

    return(
        <div className="chart">
            {props.dataPoint.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={max}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )

}

export default Chart
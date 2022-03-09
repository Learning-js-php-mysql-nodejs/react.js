function Plan(props){
    return<>

    <li className="shadow P-2 my-2 col-sm-4">{props.value}</li>
    <button className="btn btn-danger my-0 col-sm-1 offset-1" onClick={()=>{props.sendData(props.id)}}>X</button>

    </>
}

export default Plan;
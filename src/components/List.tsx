import React from 'react';
import {Link} from 'react-router-dom';

export default class List extends React.Component<IListprops,IListState>  {
    constructor(props : IListprops){
        super(props);   
        this.state = {
               name : ["a", "b" ,"c" ,"d"] 
        }
    }
    render(){
        return <ul className="list-group">
            {this.state.name.map(name =>{
                return <li className="list-group-item"> 
                    {/* <Link to={`${name}`} {name}> </Link> */}
                    {name}
                 </li>
            })}

        </ul>
    }
}

interface IListprops{

}
interface IListState{
    name : Array<String>;
}
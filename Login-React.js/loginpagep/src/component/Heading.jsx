import React, { Component } from 'react';
import Plan from './Plan';

class Heading extends Component {
    state ={
        items:[],
        text:""
    }
    handleChange = e =>{
        this.setState({text:e.target.value})
    }

    handleAdd = () =>{
        if(this.state.text !==""){
            const items = [...this.state.items,this.state.text];
            this.setState({items:items,text:""})
        }
    }
    handleDelete = id =>{
        console.log("delete",id);
        const Olditems = [...this.state.items]
        console.log("Olditems",Olditems);
    
        const items = Olditems.filter((Element,i)=>{
            return i !==id
        })
        console.log("Newitems",items);
        this.setState({items:items});
    } 
    render() {
        return (
            
            <div className='container-fluid my-5' style={{margin:'0px 0px 0px 0px'}}>
               <div className='row'>
                   <div className='col-sm-6 mx-auto text-white shadow-lg p-3 ' style={{background: 'radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% )',marginTop:'20px',borderRadius:'20px'}}>
                       <h2 className='text-center text-white'>Today's Plan</h2>
                       <div className='row'>
                           <div className='col-9'>
                            <input type="text" className='form-control text-white'
                             placeholder='White Here' value={this.state.text} 
                             onChange={this.handleChange}/>
                           </div>                
                               <div className='col-2'>
                                 <button className='btn btn-warning px-5 
                                 font-weight-bold' onClick={this.handleAdd}>Add</button>
                               </div> 
                               <div className='conatiner-fluid'>
                                 <ul className="list-unstyled row m-5 text-white">
                                     
                                     {this.state.items.map((value,i)=>{
                                         return <Plan key={i} id ={i} value={value}
                                         sendData={this.handleDelete}/>
                                     })
                                     }
                                </ul>     
                            </div>                      
                       </div>   
                   </div>
               </div> 
            </div>
        
        );
    }
     
}

export default Heading;

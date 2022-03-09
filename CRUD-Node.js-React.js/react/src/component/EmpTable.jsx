import React, { useEffect } from 'react'
import { useState } from 'react';
import { Table ,Button} from 'react-bootstrap';

export default function EmpTable() {
    const [info,setInfo] = useState([""])
    useEffect(()=>{
      user();
    },[]);

    function user(){
      const api = "http://localhost:2000/api/get-employee/details";
      const fetchData = async ()=>{
          try{
              const response1 = await fetch(api);
              const data = await response1.json();
              setInfo(data.response);
              console.log(data);
              
          }
          catch(error) 
          {
              console.log(error);
          }
      }
      fetchData();
    }

    function deleteUser(Eid)
    {
      fetch(`http://localhost:2000/api/edit-employee-delete/${Eid}`,{
        method:"Delete"
      }).then((result)=>{
        result.json().then((res)=>{
          console.warm(res);
          user();
        });
      });
    }
  return (
    <>
    <div>employee record</div>
      {
       <Table striped bordered hover>
       <thead>
         <tr>
           <th>id</th>
           <th>name</th>
           <th>mobile</th>
           <th>city</th>
           <th>address</th>
           <th>joiningDate</th>
           <th>Action</th>
           <th>DELETE</th>
           
         </tr>
         </thead>

       {info.map((item) => (
         <tbody>
           <tr >
             <td>{item.Eid}</td>
             <td>{item.Emp_name}</td>
             <td>{item.Mobile}</td>
             <td>{item.city}</td>
             <td>{item.address}</td>
             <td>{item.joiningDate}</td>
             <td>
               <Button variant="outline-success">Edit</Button><br></br>
              </td>
              <td>
              <Button variant="outline-danger" onClick ={()=>deleteUser(item.Eid)}>Remove</Button>
                </td> 
             </tr>
         </tbody>
       )
       )
       }

     </Table>
      }
  </>
  )
}

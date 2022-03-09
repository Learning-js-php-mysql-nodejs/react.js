import React, { useEffect } from 'react'
import { useState } from 'react';
import { Table,Button } from 'react-bootstrap';

export default function DegiTable() {
    const [save,setsave] = useState([""])
    useEffect(()=>{
      user();
        
    },[]);

    function user(){
      const root = "http://localhost:1000/api/get-desig/details";
      const fetchData = async ()=>{
          try{
              const response2 = await fetch(root);
              const data = await response2.json();
              setsave(data.response);
              //console.log(data);
              
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
      fetch(`http://localhost:1000/api/edit-desig-delete/${Eid}`,{
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
    <div>DegiTable</div>

      {
       <Table striped bordered hover>
       <thead>
         <tr>
           <th>id</th>
           <th>Designation</th>
           <th>Department</th>
           <th>Action</th>
           <th>DELETE</th>
         </tr>
         </thead>

       {save.map((item,key) => (
         <tbody>
           <tr key={key}>
             <td>{item.Eid}</td>
             <td>{item.Dasignation}</td>
             <td>{item.Department}</td>
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
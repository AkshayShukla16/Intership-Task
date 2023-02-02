import React,{useState, useEffect, Fragment} from 'react'
import { Table,Button,Pagination  } from 'react-bootstrap'
import './Task.css';

function Task() {
    const [data, setData] = useState([])
    const [detailshown, setDetailshown] = useState([])

    useEffect(()=>{
        getData()
    },[])

    async function getData(){
       const result= await fetch('https://jsonplaceholder.typicode.com/users');
       const getResults= await result.json();
       setData(getResults);
       console.log(getResults)
    }

    const toggleShown =(details)=>{
        const shownState= detailshown.slice();
        const index= shownState.indexOf(details);

        if(index>=0){
            shownState.splice(index,1)
            setDetailshown(shownState);
        }else{
            shownState.push(details)
            setDetailshown(shownState)
        }
    }

    function renderData(){
        return(
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Company</th>
                        <th>City</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                      {
                        data.map((user)=>(
                         <Fragment key={user.id}>
                         <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.company.name}</td>
                            <td>{user.address.city}</td>
                            <td><Button onClick={()=> toggleShown(user.name)} >View details</Button></td>
                         </tr>
                         { detailshown.includes(user.name) && 
                         <>
                         <tr>
                          <td colSpan='5'>
                         <div className='additional-info'>
                            <span>Email: {user.email}</span>
                            <span>Website: {user.website}</span>
                            <span>Phone: {user.phone}</span>
                            <br />
                            <span>Street: {user.address.street}</span>
                            <span>Zipcode: {user.address.zipcode}</span>
                         </div>
                         </td>
                         </tr>
                         </>
                          }
                         </Fragment>
                        ))
                      }

                </tbody>
            </Table>
        )
    }

  return (
    <div className='myTask'>
      <h2>InternShip Task</h2>
      <br />
      {
        renderData()
      }
    </div>
  )
}

export default Task

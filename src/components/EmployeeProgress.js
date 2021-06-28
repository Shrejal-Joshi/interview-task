import React from 'react';
import { db } from './firebase_config';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

const EmployeeProgress = ({
    id ,
    username,
    yesterdayTask,
    progress,
    todayTask ,
    blockingIssue 


    })=>
{

    function deleteData()
    {
        db.collection("dailystandup").doc(id).delete();
    }

    return (
        <>
            <div className="employee_container">
            <AiFillCloseCircle style={{
               
                'textAlign' : 'right',
                'justifyContent' : 'flex-end',
                'alignContent' : 'flex-end',
                'marginLeft' : '95%',
                    fontSize:'20px',
                    'backgroundColor' : 'white',
                    'marginTop' : '-5%'
                    }} onClick={deleteData}/>

                <h4><FaUserCircle
                    style={{
               
                        
                            fontSize:'30px',
                            'backgroundColor' : 'white',
                           
                            'margin' : '5px'
                            }}
                />
                
                {username}</h4>
                <h5> Yesterday's task   </h5>


                <div className="progress-container">
                <p>{yesterdayTask} :   </p>
                   
                        <p>{progress}</p>
                    
                

                </div>

                <h5> Today's task   </h5>
                <p>{todayTask}  </p>


                <h5> Blocking Issue   </h5>
                <p>{blockingIssue}   </p>
              
                
            </div>

           

           

        </>
    )
}
export default EmployeeProgress;
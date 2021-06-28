import './App.css';

// import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { db } from './components/firebase_config';
import firebase from 'firebase';
import EmployeeProgress from './components/EmployeeProgress';


function App() {
  const [state, setState] = useState({
    username : '',
    yesterdayTask : '',
    yesterdayProgress : '',
    todayTask : '',
    blockingIssue : '',
  });
  const [getList, setList] = useState([]);

  const inputChangeHandler = (e) =>
  {
    e.preventDefault();
     
      const {name, value} = e.target;

      setState((prevValue) =>
      {
        console.log(prevValue);
        return {
          ...prevValue,
          [name] : value,
        }; 
      })

      
  }

  useEffect(()=>
  {
      getData();

  }, []);

  function getData()
  {
    db.collection("dailystandup").onSnapshot(function (querySanpshot){
       setList(
        querySanpshot.docs.map((doc)=>(
          {
            id : doc.id,
            username: doc.data().username,
            yesterdayTask : doc.data().yesterdayTask,
            yesterdayProgress : doc.data().yesterdayProgress,
            todayTask : doc.data().todayTask,
            blockingIssue : doc.data().blockingIssue,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
            
            
          }
        ))
       );
    })
  }

  console.log(getList);

  const addData = (e) =>
  {
    e.preventDefault();
    var user = state.username;
    db.collection("dailystandup").add(
      {
        inprogress : true,
        blockingIssue : state.blockingIssue,
        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        todayTask : state.todayTask,
        username: user,
        yesterdayTask : state.yesterdayTask,
        yesterdayProgress : state.yesterdayProgress,
       
        
      }
    );
      setState({
        username : '',
        yesterdayTask : '',
        yesterdayProgress : '',
        todayTask : '',
        blockingIssue : '',
      });
    
  }

  return (
    <>
    <h1> Daily Standing Up </h1>
    <div className="main-container">
        
    <div className="form-container" >
    
            <form>

            
              <label >Username 
               
                      <input className="input-field" id="username" 
                        onChange={(e) => inputChangeHandler(e)}
                        name = "username"
                        value ={state.username}
                        label="Username"
                        type="text"
                        
                    
                      />
                      </label>

          <label > Yesterday's Task 
               <input className="input-field" id="yesterdayTask" 
                 onChange={(e) => inputChangeHandler(e)}
                 name = "yesterdayTask"
                 value ={state.yesterdayTask}
                 type="text"

               />
               </label>

           <label > Yesterday's Task Status
               <input className="input-field" id="progress" 
                 onChange={(e) => inputChangeHandler(e)}
                 name = "yesterdayProgress"
                 value ={state.yesterdayProgress}
                 type ="text"
               />
               </label>
            <label > Today's Task 
               <input className="input-field" id="todayTask" 
                 onChange={(e) => inputChangeHandler(e)}
                 name = "todayTask"
                 value ={state.todayTask}
                 type ="text"

               />
               </label>

               

        <label > Blocking Issue 
               <input className="input-field" id="blockIssue" 
                 onChange={(e) => inputChangeHandler(e)}
                 name = "blockingIssue"
                 value ={state.blockingIssue}
                 type="text"

               />
               </label>
          


          

                
                 
             
              <button className="btn-submit" type ="submit" variant="contained" color="primary"  onClick = {addData}>
                  Submit
                  
              </button>
             
            </form>
    </div>

        <div className="user-list-container">
          {getList.map((item,index) =>
          (
            <EmployeeProgress key={index}
            id = {item.id }
            username={item.username}
            yesterdayTask = {item.yesterdayTask}
            progress = {item.yesterdayProgress}
            todayTask = {item.todayTask}
            blockingIssue = {item.blockingIssue}
                   
              />
          ))}
        </div>
    </div>
    </>
  );
}

export default App;

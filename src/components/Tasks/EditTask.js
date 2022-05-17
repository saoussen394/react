/* eslint-disable */
import { Modal , Button }from "react-bootstrap";
import React,  { useState, useEffect }from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import  { useTracking } from "react-tracking";
import './tasks.css'



function EditTask(props) {
  const { trackEvent } = useTracking();

    const [user, setUser] = useState({
   
        title:"",
        instruction:"",
        duration:"",
        repeated:"",
    });  
    const { title , instruction, duration , repeated } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    
    useEffect(() => {
        console.log("e id du modal est " + props.data)
        const loadUser = async () => {
            console.log("e id du modal est dans loaduser " + props.data)
           await axios.get(`http://localhost:5000/api/v1/task/${props.data}`)
                
                .then((result) => {
                  
                    setUser({
                        id: props.data,
                        update: true,
                        title: (result.data.response[0].title),
                        instruction: (result.data.response[0].instruction),
                        duration: (result.data.response[0].duration),
                        repeated: (result.data.response[0].repeated),
                    });
                })
                .catch((error) => console.log("error", error));
        };
        loadUser();
    }, []);

    const updateTask = async (e) => {
      alert("Edit with success")

        e.preventDefault();
        try {
           await axios.put(`http://localhost:5000/api/v1/task/${props.data}`, user)
        .then(result=>{
            console.log(result)
        })  
        } catch (err) {
            console.log(err)
        }
window.location.reload()  };

const createHistory = () => {
    
  trackEvent({
         operation: "Edit task",
         user : localStorage.getItem('role'),
         time:new Date().toLocaleString(),
       })    
     }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit task
        </Modal.Title>
     </Modal.Header>
              <Modal.Body>
                   <form onSubmit={updateTask}>
              
                        <input
                        id="inputeform"
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Task title"
                            name="title"
                            value={title}
                            onChange={(e) => onInputChange(e)}
                        /> <br/>
                        <input
                        id="inputeform"
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Task instruction"
                            name="instruction"
                            value={instruction}
                            onChange={(e) => onInputChange(e)}
                        /> <br/>   
                        <input
                        id="inputeform"
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter duration (min)"
                            name="duration"
                            value={duration}
                            onChange={(e) => onInputChange(e)}
                        /><br/> 
                         <label for="repeated">Reapeated each:</label>
                           <select name="repeated" className="custom-select"
                           value={repeated}
                            onChange={(e) => onInputChange(e)}>
                              <option value="">Select here!</option>
                           <option value="Daily">Daily</option>
                           <option value="Instant">Instant</option>
                           <option value="Monthly">Monthly</option>
                           <option value="Weekly">Weekly</option>
                           </select>
                            <button
                            onClick={createHistory}
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4">
                                    update Record
                            </button></form>

              </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EditTask;
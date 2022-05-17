/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "../styles/css/searchbox.css"
import {ImSearch} from "react-icons/im";
import swal from 'sweetalert';
function History() {
    function refreshPage() {
        window.location.reload(false);
      }
    const [search, setSearch] = useState("");
    const [record, setRecord] = useState([]);

    // On Page load display all records
    const loadHistory = async () => {
        axios.get(`http://localhost:5000/api/v1/history`).then((response) => {
            setRecord(response.data);
        });
    };
    useEffect(() => {
        loadHistory();
    }, []);
    

    // Search Records here
    const searchRecords = () => {
        alert(search);
        axios
            .get(`http://localhost:5000/api/v1/history/searchRecord/${search}`)
            .then((response) => {
                setRecord(response.data);
            });
    };


         const deleteRecord = () => {
            /*alert("Deleted Successfully");*/
            swal({title:"Poof! Deletion completed successfully!", 
                icon: "success",
              
            });
           
        axios
            .delete(`http://localhost:5000/api/v1/history`),{method: 'DELETE'}
            .then((result) => {
                
                loadHistory();
            })
            
            .catch(() => {
                alert("Error in the Code");
            });
           
    };
    
    return (
        				<div className="bgimg w3-display-container w3-animate-opacity w3-text-white">

        <section>            
                <h1 className="mb-4 text-center mt-4">
                    History
                </h1>

                    <div className="col-sm-8">
                                       <Button variant="primary"  onClick={ ()=>{ const confirmBox=window.confirm("Do you really want to delete all hitories?");
            if (confirmBox === true) {
                
                deleteRecord()
            } 
            else{
                swal({title:"Don't worry, it won't be deleted!"});
            }
            
             }}>
                       Delete history
                       </Button>

                        <div className="input-group mb-4 mt-3">
                        < div id='search'>
<div className="search-box">
    <button className="btn-search"  type="button"
onClick={searchRecords}><ImSearch id="btnsearch"/></button>
    <input type="text" className="input-search" placeholder="Type to Search..."
                                    onChange={(e) => setSearch(e.target.value)}
                                    required={true}/></div>
</div> 
                        </div>
                        <table  className="table table-dark table-striped">
                            <thead>
                                <tr className="table-success">
                                    <th>id</th>
                                    <th> operation</th>
                                    <th>user</th>
                                    <th>time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {record.map((name,index) => (
                                    <tr key={index}>
                                        <td>{name.id}</td>
                                        <td>{name.operation}</td>
                                        <td>{name.user}</td>
                                        <td>{name.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            
        </section></div>
    );
}

export default History;


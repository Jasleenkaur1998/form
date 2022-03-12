import { useState } from "react";

function Form() {

    function enterNAme(event){
     
        setName(event.target.value);
    }

    function enterRollNo(event){

        setrollNo(event.target.value);
    }

   const submitForm=(event)=>
   {
       event.preventDefault();
       console.log(name,rollNo);
       
   }
    const [name,setName]=useState("");
    const [rollNo,setrollNo]=useState(0);
    const [studentList,setstudentList]=useState([]);

    return(
     <div>
        <h1>Student Info System</h1>
       <form>
           <div>
       <label for="name">Name</label>
       <input type="text" onChange={enterNAme} value={name}></input>
       </div>
       <div>
       <label for="rollNo">Roll No.</label>
       <input type="number" onChange={enterRollNo} value={rollNo}></input>
       </div>
       <div>
       <button type="submit" onClick={submitForm}>Submit</button>
       </div>
       </form>
       <div className="outputArea"></div>
       </div>
    )
}

export default Form;
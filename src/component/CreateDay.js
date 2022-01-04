import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const naviagte = useNavigate();

  function addDay(){

    fetch(`http://localhost:3001/days/`, {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        day : days.length + 1
      }),
    })
    .then(res => {
      if(res.ok){
        alert("Added");
        naviagte(`/`);
      }
    })
  };

  return(
    <div>
      <h3>Days : {days.length}</h3>
      <button onClick={addDay}>Add Day</button>
    </div>
  )
};

export default CreateDay;
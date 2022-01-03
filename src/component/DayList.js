import dummy from '../db/data.json';

function DayList(){
  return(
    <ul className='list_day'>
      {/* {dummy.days.map(day => (
        <li key={day.id}>Day {day.day}</li>
      ))} */}
      {dummy.days.map((day) => {
        return <li key={day.id}>Day {day.day}</li>
      })}
    </ul>
  )
};

export default DayList;
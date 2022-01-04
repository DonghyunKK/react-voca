// import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word'

function Day() {
  const { day } = useParams();
  // const wordList = dummy.words.filter(word => word.day === Number(day))
  // const [words, setWords] = useState([]);
  
  // useEffect(() => {
    //   fetch(`http://localhost:3001/words?day=${day}`)
    //   .then(res =>   {
      //     return res.json()
      //   })
      //   .then(data => {
        //     setWords(data)
        //   })
        // }, [day])
  
  const words = useFetch(`http://localhost:3001/words?day=${day}`)
  const days = useFetch("http://localhost:3001/days")

  return (
    <>
    <div className='dayContainer'>
      <h2>Day {day}</h2>
      <div className='links'>
        {Number(day) !== 1 && <Link to={`/day/${Number(day)-1}`} className="link">Prev</Link>}
        {days.length === Number(day) || <Link to={`/day/${Number(day)+1}`} className="link">Next</Link>}
      </div>
    </div>
    {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  )
};

export default Day;
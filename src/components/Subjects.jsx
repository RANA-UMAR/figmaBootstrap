import React, { useState } from 'react';
import subdata from '../subjectData';

const Subjects = () => {
  const [data, setData] = useState(subdata);

  return (
    <div className='container mt-5'>
    <div className='text-center '>

    <h1>EXPLORE BY <span style={{color:"#F8A722"}}> SUBJECT</span></h1>
    <p>Every tutor has its own subject specialization</p>
    </div>
      <div className='row'>
        {data.map((ele, index) => (
          <div key={index} className='col'>
            <div className='text-center'>
              <img src={ele.image} alt='' width="120px" height="120px" />
              <div>
                <h6 className='text-center'>{ele.subject}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;

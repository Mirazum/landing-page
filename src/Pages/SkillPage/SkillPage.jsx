import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleSkillPage from './SingleSkillPage';

const SkillPage = () => {
    const [jobs, setJob] = useState([]);
    // const { id } = useParams();
   
  
    useEffect(() => {
      fetch("/jobs.json")
        .then((response) => response.json())
        .then((data) => setJob(data));
        
    }, []);



    return (
       <div>
         {jobs.map((job) => (
          <SingleSkillPage key={job.id} job={job}></SingleSkillPage>
        ))}
       </div>
   
    );
};

export default SkillPage;


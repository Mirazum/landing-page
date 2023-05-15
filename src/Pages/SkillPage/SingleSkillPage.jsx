

// import React from 'react';

import { Link } from "react-router-dom";
import Button from "./Button";

// const SingleSkillPage = ({ job }) => {
//   const { name, id, skills } = job;

//   return (
//     <div className="overflow-x-auto my-4 ">
//       <table className="table table-zebra w-full">
//         {/* column headings */}
//         <thead className=''>
//           <tr>
//             <th></th>
//             <th>{name}</th>
//           </tr>
//         </thead>

//         {/* rows */}
//         <tbody>
//           <tr >
//            <div className='flex items-center'> 
//            <th>HTML </th>
//            <img src="html.jpg" alt="" className='w-6 h-6'/>
//            </div  >
//            <td>{skills.html}</td>
//           </tr>
//           <tr>
//             <div className='flex items-center '>
//                 <th>CSS</th>
           
//             <img src="css.jpg" alt="" className='w-6 h-6 m-3'/>
         
//             </div>
//             <td>{skills.css}</td>
//           </tr>
//           <tr>
//             <th>JavaScript</th>
//             <td>{skills.javascript}</td>
//           </tr>
//           <tr>
//             <th>React</th>
//             <td>{skills.react}</td>
//           </tr>
//           <tr>
//             <th>Python</th>
//             <td>{skills.python}</td>
//           </tr>
//           <tr>
//             <th>Node.js</th>
//             <td>{skills.nodejs}</td>
//           </tr>
//           <tr>
//             <th>Ruby on Rails</th>
//             <td>{skills.ror}</td>
//           </tr>
//           <tr>
//             <th>C++</th>
//             <td>{skills['c++']}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SingleSkillPage;

// how to set the name as row wise in this code?
// import React from 'react';

// const SingleSkillPage = ({ job }) => {
//   const { name, id, skills } = job;

//   // create an array of skill names
//   const skillNames = Object.keys(skills);

//   return (
//    <div className='w-full max-w-7xl mx-auto '>
//      <div className="overflow-x-auto my-4 ">
//       <table className="table table-zebra w-full">
//         {/* column headings */}
//         <thead>
//           <tr>
//             <th>{name}</th>
//           </tr>
//         </thead>

//         {/* rows */}
//         <tbody>
//           {skillNames.map((skillName) => (
//             <tr key={skillName}>
//               <td>{skillName}</td>
//               <td>{skills[skillName]}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//    </div>
//   );
// };

// export default SingleSkillPage;
// kindly show the name as column wise and skillName in row wise
// const SingleSkillPage = ({ job }) => {
//     const { name, id, skills } = job;
  
//     // create an array of skill names
//     const skillNames = Object.keys(skills);
  
//     return (
//      <div className='w-full max-w-7xl mx-auto '>
//        <div className="overflow-x-auto my-4 ">
//         <table className="table table-zebra w-full">
//           {/* column headings */}
//           <thead>
//             <tr>
//               <th></th>
//               <th>{name}</th>
//             </tr>
//           </thead>
  
//           {/* rows */}
//           <tbody>
//             {skillNames.map((skillName) => (
//               <tr key={skillName}>
//                 <td>{skillName}</td>
//                 <td>{skills[skillName]}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
        
//       </div>
//       <button className="btn btn-info  text-black my-2 button-left rounded-xl">Create an account</button>
//      </div>
//     );
//   };
  
//   export default SingleSkillPage;

const SingleSkillPage = ({ job }) => {
    const { name, id, skills } = job;
  
    // create an array of skill names
    const skillNames = Object.keys(skills);
  
    return (
      
        <div>
          <h1></h1>
          <div className='w-full max-w-7xl mx-auto  '>
          
          <div className="overflow-x-auto my-2 p-2">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th className="font-bold"></th>
                  {skillNames.map((skillName) => (
                    <th  key={skillName}>{skillName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold text-xl align-middle mx-2">{name}</td>
                  {skillNames.map((skillName) => (
                    <td key={skillName} className="align-middle">{skills[skillName]}</td>
                  ))}
                </tr>
              </tbody>
              </table>
          </div>
          
         </div>
         <Link to='/profile'><button className="btn btn-info text-black my-2 button-left rounded-xl">Create a Profilr</button></Link>
        </div>
      
    
     
       
    );
  };
  
  export default SingleSkillPage;
  
 

  
  
  
 

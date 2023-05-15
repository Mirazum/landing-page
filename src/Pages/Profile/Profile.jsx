// import React from 'react';
// import '../../Navbar/Navbar.css'
// import './Profile.css'
// import { Link } from 'react-router-dom';

// const Profile = () => {
//     const titleListWithIcons = [
//         { title: 'HTML', icon: 'html.jpg' },
//         { title: 'CSS', icon: 'css.jpg' },
//         { title: 'c++', icon: 'csharp.jpg' },
//         { title: 'React', icon: 'react.jpg' },
//         { title: 'Python', icon: 'python.jpg' },
//         { title: 'JAVASCRIPT', icon: ' js.jpg' },
//         { title: 'NODE JS', icon: ' node.jpg' },
//         { title: 'ROR', icon: ' rub.jpg' },
//     ];
//     const options = [
//         { label: 'Novice', value: 'option1' },
//         { label: 'Competence', value: 'option2' },
//         { label: 'Expertise', value: 'option3' },
//         { label: 'mastery', value: 'option4' },
//     ];

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // console.log(Selected option: ${});
//     }

//     return (
//         <div className=' min-h-screen'>
//             <div className='flex justify-center items-center h-full mt-72'>
//                 <form onSubmit={handleSubmit} className='bg-blue-100 shadow-md rounded px-16 pt-10 pb-10 mb-4'>
//                     <h1 className='text-2xl font-bold text-center mb-4'>Create your skills profile</h1>
//                     <div className='grid grid-cols-2 gap-4'>
//                         {titleListWithIcons.map((titleWithIcon) => (
//                             <div key={titleWithIcon.title} className='flex justify-cnter items-center'>
//                                 <label className='flex items-center justify-center p-2'>
//                                     {titleWithIcon.title}
//                                     <img className='ml-2' src={titleWithIcon.icon} alt={`${titleWithIcon.title} icon`} />
//                                 </label>
//                                 <select className='px-4 py-2 border rounded' defaultValue=''>
//                                     <option value='' disabled>Proficiency</option>
//                                     {options.map((option) => (
//                                         <option key={option.value} value={option.value}>{option.label}</option>
//                                     ))}
//                                 </select>
//                             </div>
//                         ))}
//                     </div>
//                     <div className='text-center mt-8'>
//                         <Link to='/login'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button></Link>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Profile;
import React from 'react';
import '../../Navbar/Navbar.css'
import './Profile.css'
import { Link } from 'react-router-dom';

const Profile = () => {
    const titleListWithIcons = [
        { title: 'HTML', icon: 'html.jpg' },
        { title: 'CSS', icon: 'css.jpg' },
        { title: 'c++', icon: 'csharp.jpg' },
        { title: 'React', icon: 'react.jpg' },
        { title: 'Python', icon: 'python.jpg' },
        { title: 'JAVASCRIPT', icon: ' js.jpg' },
        { title: 'NODE JS', icon: ' node.jpg' },
        { title: 'ROR', icon: ' rub.jpg' },
    ];
    const options = [
        { label: 'Novice', value: 'option1' },
        { label: 'Competence', value: 'option2' },
        { label: 'Expertise', value: 'option3' },
        { label: 'mastery', value: 'option4' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(Selected option: ${});
    }

    return (
        <div className='min-h-screen'>
            <div className='flex justify-center items-center h-full m-60'>
                <form onSubmit={handleSubmit} className='bg-blue-100 shadow-md rounded px-16 pt-10 pb-10 '>
                    <h1 className='text-2xl font-bold text-center mb-6'>Create your skills profile</h1>
                    <div className='grid grid-cols-2 gap-4'>
                        {titleListWithIcons.map((titleWithIcon) => (
                            <div key={titleWithIcon.title} className='flex items-center justify-center gap-2'>
                                 <label className='text-sm font-bold w-14'>{titleWithIcon.title}</label>
                             
                                <div className='flex justify-center gap-4'>
                                 
                                    <img className='w-6 h-6 mr-2' src={titleWithIcon.icon} alt={`${titleWithIcon.title} icon`} />
                                    <select className='px-4 py-2 border rounded ' defaultValue=''>
                                        <option value='' disabled>Proficiency</option>
                                        {options.map((option) => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='text-center mt-8'>
                        <Link to='/login'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;

// how to set all the options in the same alignment in row and column wise








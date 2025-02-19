import React from 'react';
import ex1 from '../../assets/ex1.png';
import ex2 from '../../assets/ex2.png';
import ex3 from '../../assets/ex3.png';
import ex4 from '../../assets/ex4.png';

const Team = () => {
    const teamMembers = [
        {
          id: 1,
          name: "Jane Smith",
          position: "Web Developer",
          experience: "6 Years",
          skills: "Web Development",
          image: ex1,
        },
        {
          id: 2,
          name: "Kiera",
          position: "Project Manager",
          experience:" 8 Years ",
          skills: "UI/UX Design",
          image: ex2,
        },
        {
          id: 3,
          name: "Salman Haider",
          position: "Web Developer(CEO)",
          experience: "6 Years",
          skills: "Full-Stack Development",
          image: ex3,
        },
        {
          id: 4,
          name: "Alex Johnson",
          position: "Front-End Developer",
          experience: "8 Years",
          skills: "Mobile App Development",
          image: ex4,
        },
      ];
    return (
        <div>
            <div className="bg-blue-600 w-[80%] mx-auto rounded-2xl p-4 mt-6 mb-4">
                <p className="text-center text-white text-2xl font-semibold mb-6 shojumaru-regular">Meet the Top Orion Experts</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4'>
                    {
                        teamMembers.map(member=><div className="card glass ">
                            <figure>
                                <img
                                    src={member.image}
                                    alt="car!" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{member.name}</h2>
                                <p>{member.position}</p>
                                
                               
                            </div>
                        </div>)
                    }
                </div>

                
            </div>
        </div>
    );
};

export default Team;

import React, { useState } from 'react';
import proBanner from '../../assets/proBanner.jpg';
import project1 from '../../assets/p1.jpg';
import project2 from '../../assets/p2.jpg';
import project3 from '../../assets/p3.png';
import { Dialog } from '@headlessui/react';
import Team from '../../components/team/Team';

const DiscoverProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center">

        <div className="w-full">
          <img src={proBanner} alt="Projects Banner" className="w-full object-cover" />
        </div>
        <div className='mb-6 mt-6 text-3xl font-bold text-black'>
          <p>Our Projects</p>
        </div>
        <div className="w-[90%] mx-auto py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[project1, project2, project3].map((project, index) => (
            <div key={index} className="relative">
              <img
                src={project}
                alt={`Project ${index + 1}`}
                className="w-full h-[433px] object-cover rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(project)}
              />
            </div>
          ))}
        </div>

        {/* Full Image Modal */}
        <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50 p-4">
          <Dialog.Panel className="bg-white rounded-xl p-4 max-w-[90%] max-h-[90%] overflow-auto shadow-lg">
            <img src={selectedImage} alt="Full Project" className="w-full h-auto object-contain" />
          </Dialog.Panel>
        </Dialog>
      </div>
      <Team/>
    </div>
  );
};

export default DiscoverProjects;

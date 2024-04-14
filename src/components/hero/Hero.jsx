import React, { useState } from 'react';
import heroImg from "../../assets/hero1.png";

const Hero = () => {
  // State to control the visibility of the error modal
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Function to handle the close of the modal and redirection
  const handleCloseModal = () => {
    setShowErrorModal(false);
  };

  // Function to handle the redirection
  const handleRedirect = () => {
    window.location.href = 'https://demondev0666.github.io/DoNotEnter'; // Your redirect URL
  };

  return (
    <div className='h-auto md:h-[500px] bg-gradient-to-t from-Purple1 to-Cyan2 pt-20 pb-10 md:pb-0'>
      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-Gray1 p-4 rounded-md text-center text-Red">
            <h2 className="text-lg font-bold mb-4">Error</h2>
            <p className="mb-4">You are not supposed to enter here!</p>
            <div className="space-x-4">
              <button onClick={handleCloseModal} className="btn-primary">Go Back</button>
              <button onClick={handleRedirect} className="btn-primary">Continue</button>
            </div>
          </div>
        </div>
      )}

      <section className='container flex flex-col items-center justify-between'>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-Gray2">
          <div className="flex flex-col items-center text-center gap-4 md:items-start md:text-left">
            <h1 className="text-4xl">We make Addons, Maps, SkinPacks, and more for Minecraft Bedrock</h1>
            <p>“There is no doubt that creativity is the most important human resource of all. Without creativity, there would be no progress, and we would be forever repeating the same patterns”- Edward de Bono (1992)</p>
            <div className="space-x-4">
              <a href='#about'><button className='btn-primary'>About The Team</button></a>
              {/* Update button to open modal instead of redirecting immediately */}
              <button onClick={() => setShowErrorModal(true)} className='btn-outline bg-Gray1'>DO NOT ENTER ❌</button>
            </div>
          </div>
          <div className='mx-auto max-w-xs md:max-w-sm lg:max-w-md p-4'>
            <img src={heroImg} alt="Banner Image" className='w-full h-auto' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

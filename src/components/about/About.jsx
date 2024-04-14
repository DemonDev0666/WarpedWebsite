import React from "react";
import Card from "../cards/Cards";

const About = () => {
  return (
    <div
      id="about"
      className="h-auto md:h-[500px] bg-gradient-to-tr from-Purple1 to-Cyan2 pt-20 pb-20 md:pb-20 border-t-Gray2 border-t-2"
    >
      <div className=" max-w-3xl mx-auto px-4">
        <h1 className="text-4xl text-center mb-8  ">About Us</h1>
        <p>Warped Studios was founded in 2021 by Demondev. Warped Studios was created with one goal in mind and that was making a strong creative team that would make fun things for the Minecraft Bedrock Community. In early 2024 Warped Studios started building a solid team of Builders, Developers,Modelers,And Animators.Current list of staff below.</p>
       <br>
       </br>
        <div className='flex flex-col items-center md:flex-row content-between justify-between'>
        <Card>
          <div className="flex items-center justify-center"> 
            <h2 className="text-xl font-semibold mb-2 text-Purple2">Developers</h2>
          </div>
          <div className=''>
          <ul>
            <li>DemonDev</li>
            <li>AlienEdds</li>
            <li>Dawn</li>
          </ul>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-center"> 
            <h2 className="text-xl font-semibold mb-2 text-Purple2">Builders</h2>
          </div>
          <div className=''>
          <ul className="text-sm">
            <li>Gantz</li>
            <li>Kb</li>
            <li>Cfranger</li>
            <li>Zora</li>
            <li>Edd</li>
            <li>Galaxy</li>
            <li>3Pancakes</li>
          </ul>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-center"> 
            <h2 className="text-xl font-semibold mb-2 text-Purple2">Modelers/Animators</h2>
          </div>
          <div className=''>
          <ul>
            <li>EndingSoon</li>
            <li>Jarheaded</li>
            <li>3Pancakes</li>
          </ul>
          </div>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default About;

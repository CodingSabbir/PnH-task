import React from 'react';
import TeamProfileCard from '../components/TeamProfileCard';
import teamImg1 from '../assets/img/team-1.jpg'
import teamImg2 from '../assets/img/team-2.jpg'
import teamImg3 from '../assets/img/team-3.jpg'
import teamImg4 from '../assets/img/team-4.jpg'
import teamImg5 from '../assets/img/team-5.jpg'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const TeamMember = () => {
    return (
        <div>
            <div className='text-center py-16'>
        <h1 className='text-2xl text-[#FF6500]'> Team</h1>
        <h3 className='text-3xl font-semibold'>Our Team Members</h3>
       <div className='flex justify-center py-3'> <p className='border border-b-2 w-20 border-[#15F5BA] '></p></div>
       <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet consectetur <br /> Quos labore dolores odit impedit. Blanditiis dolorum sed inventore .</p>
        </div>
            <div className='flex justify-between container mx-auto p-6'>
            <TeamProfileCard  img={teamImg1} name='Johh Doe' position='Web Developer' github={<FaGithub/>} Linkedin={<FaLinkedin/>}  twitter={<FaTwitter/>}/>
        <TeamProfileCard  img={teamImg2} name='Steven Smith' position='Creative Design' github={<FaGithub/>} Linkedin={<FaLinkedin/>}  twitter={<FaTwitter/>}/>
        <TeamProfileCard  img={teamImg3} name='David Warner' position='Creative Design' github={<FaGithub/>} Linkedin={<FaLinkedin/>}  twitter={<FaTwitter/>}/>
        <TeamProfileCard  img={teamImg4} name='Virat Kohli' position='Digital Marketing' github={<FaGithub/>} Linkedin={<FaLinkedin/>}  twitter={<FaTwitter/>}/>
        <TeamProfileCard  img={teamImg5} name='Jos Buttler' position='Frontend Developer' github={<FaGithub/>} Linkedin={<FaLinkedin/>}  twitter={<FaTwitter/>}/>
            </div>
        </div>
    );
};

export default TeamMember;
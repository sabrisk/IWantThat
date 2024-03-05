import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Details = () => {

    const { id, name, gifts } = useParams();
    console.log(id);
    console.log(useParams());
    
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/');
    };
      return (
        <motion.div
          className='h-screen bg-[#222222]'
          initial={{x: '100%'}}
          animate={{x: "0"}}
          exit={{x: "-100%"}}
          transition={{duration:.1, ease: 'linear' }}
        >
          <button className='text-white' onClick={handleClick}>Go to Events</button>
          <p className="font-bold text-white">{gifts}</p>
        </motion.div>
      );
  };

  export default Details;
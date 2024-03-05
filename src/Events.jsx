
import Event from './Event';
import { motion } from "framer-motion";

const content = [
  {
    id: 1,
    name: "John's Birthday",
    gifts: ["Cable Management Tray"]
  },
  {
    id: 2,
    name: "Jane's Birthday",
    gifts: ["Coffee Mug"]
  }
]


function Events() {
  return (
    <motion.div
      className={'h-screen'}
      initial={{x: '-100%'}}
      animate={{x: "0"}}
      exit={{x: "0"}}
      transition={{duration:.1, ease: 'linear' }}
    >
      <div id='logo' className='text-center'>
          <p id='logo-text' className='text-3xl font-bold text-white p-5 font-sans'>I Want That!</p>
      </div>
      <div className='pt-8 text-white font-sans'>
        {content.map((event) => (
          <Event key={event.id} id={event.id} name={event.name} gifts={event.gifts[0]}>
            <p>{event.id}</p>
          </Event>

        ))}
      </div>
    </motion.div>
  );
}

  export default Events;

  
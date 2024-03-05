import { useNavigate } from 'react-router-dom';

function Event({id, name, gifts}) {


  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${id}/${name}/${gifts}`);
  };
    return (
      <div  onClick={handleClick} className='text-white font-sans bg-[#3C3C3C] rounded-lg mx-4 cursor-pointer hover:underline'>
        <p className='m-3 p-2 text-xl font-bold text-white'>{name}</p>
      </div>
    );
  }

  export default Event;
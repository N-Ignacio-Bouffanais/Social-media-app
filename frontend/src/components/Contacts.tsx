import { BiSearch } from 'react-icons/bi';

function Contacts() {
  return (
    <div className="flex rounded h-48 justify-between px-2">
      <h1 className='font-semibold text-lg text-gray-700'>Contacts</h1>
      <BiSearch className='h-6 w-6 p-1 m-1 text-gray-700 hover:bg-gray-400 rounded-full'/>
    </div>
  )
}

export default Contacts
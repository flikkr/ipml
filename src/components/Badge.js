export default function Badge(props) {
  return (
    <div className='flex items-center px-2 rounded-md bg-gray-500 text-white text-xs font-Playfair'>
      {props?.label}
    </div>
  );
}

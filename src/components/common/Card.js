export function Card(params) {
  return (
    <div className='p-5 bg-gray-800 text-left'>
      <img className='h-10 bg-gray-800' src={params.imgPath} />
      <h5>{params.title}</h5>
      <p className='mt-2'>{params.description}</p>
    </div>
  );
}

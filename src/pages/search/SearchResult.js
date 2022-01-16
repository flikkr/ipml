import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";

export default function SearchResult(params) {
  return (
    <div className='flex flex-row gap-3'>
      <div className='rounded h-20 w-20'>
        {params.thumbnail ? (
          <img
            className='object-cover'
            src={params.thumbnail}
            alt='thumbnail'
          />
        ) : (
          <div className='bg-gray-500 rounded h-full flex items-center justify-center'>
            {/* <ImageNotSupportedIcon /> */}
          </div>
        )}
      </div>
      <div>
        <p>test</p>
        <p>test</p>
      </div>
    </div>
  );
}

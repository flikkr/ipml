import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import Badge from "../../components/Badge";

export default function SearchResult(props) {
  const tags = props?.tags?.map((tag) => <Badge label={tag} />);

  return (
    <div key={props?.id} className='flex flex-row gap-3'>
      <div className='rounded h-20 w-20'>
        {props.thumbnail ? (
          <img className='object-cover' src={props.thumbnail} alt='thumbnail' />
        ) : (
          <div className='bg-gray-500 rounded h-full flex items-center justify-center'>
            <ImageNotSupportedIcon className='text-gray-400' />
          </div>
        )}
      </div>
      <div className='flex flex-col gap-1'>
        <p className='h-auto'>{props?.resourceName ?? "Untitled"}</p>
        <p>test</p>
        <div className='flex flex-row gap-2'>{tags}</div>
      </div>
    </div>
  );
}

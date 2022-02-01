import SearchResult from "./SearchResult";

export default function SearchView() {
  return (
    <div className='container flex gap-4'>
      <div className='w-1/4 p-3 bg-gray-700 rounded flex-shrink sticky'>
        <input
          type='text'
          className='bg-gray-500 border-none'
          placeholder='Search'
        />
      </div>
      <div className='w-3/4 p-3 bg-gray-700 rounded flex flex-col justify-center gap-2'>
        <SearchResult tags={["one", "two"]} />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </div>
    </div>
  );
}

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
    return (
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     transition-all outline-none bg-white"
        />
      </div>
    );
  };
  
  export default Search;
  
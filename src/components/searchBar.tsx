const SearchBar = () => (
  <div className="px-10 mt-3">
    <div className="flex items-center bg-[#f3e7d5] rounded-full px-3 py-2">
      <input
        type="text"
        placeholder="Buscar..."
        className="bg-transparent outline-none w-full text-sm placeholder:text-gray-600"
      />
      <img src="./src/assets/busqueda.svg" alt="icono búsqueda" />
    </div>
  </div>
);

export default SearchBar;
const categories = ["Todos", "Postres", "Desayunos", "Comidas", "Reposterías", "Vegetarianos"];

const CategoryBar = () => (
  <div className="overflow-x-auto px-4 py-2 bg-[#74512D] scrollbar-hide touch-pan-x">
    <div className="flex space-x-4 text-sm">
      {categories.map((cat, i) => (
        <button key={i} className={`text-white px-3 py-1 rounded-full ${i === 0 ? "bg-[#A35E18]" : "hover:bg-[#A35E18]"}`}>
          {cat}
        </button>
      ))}
    </div>
  </div>
);

export default CategoryBar;
export const RecipeCard = () => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <img src="./src/assets/Pancakes.png" alt="pancakes" className="w-full h-48 object-cover" />
    <div className="p-3">
      <p className="text-sm text-gray-500 font-semibold">Desayunos</p>
      <p className="text-lg font-medium text-gray-800">Pancakes sin leche</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-sm text-gray-600">Kristen.V</p>
        <img src="./src/assets/corazonVacio.svg" alt="corazón" className="w-5 h-5" />
      </div>
    </div>
  </div>
);

export const RecipeDetails = () => (
  <details className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 open:pb-4">
    <summary className="cursor-pointer list-none">
      <img src="./src/assets/pasta.png" alt="" className="w-full h-48 object-cover" />
      <div className="p-3">
        <p className="text-sm text-gray-500 font-semibold">Comidas</p>
        <p className="text-lg font-medium text-gray-800">Spaghetti en salsa rosa</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-gray-600">Kristen.V</p>
          <img src="./src/assets/corazonVacio.svg" alt="corazón" className="w-5 h-5" />
        </div>
      </div>
    </summary>
    <div className="px-4 text-sm text-gray-700">
      <h3 className="font-semibold mt-2">Ingredientes:</h3>
          <ul className="list-disc pl-4 mt-1 space-y-1">
            <li>Spaghettis al gusto</li>
            <li>Carne molida al gusto (opcional)</li>
            <li>1 salsa de tomate (opcional, sabor sofrito o ranchera)</li>
            <li>1 salsa blanca o crema dulce</li>
            <li>Albahaca fresca (opcional)</li>
            <li>Sal, sazón completa, paprika</li>
            <li>Queso (opcional)</li>
            <li>Mantequilla</li>
          </ul>

          <h3 className="font-semibold mt-4">Preparación:</h3>
          <ol className="list-decimal pl-4 mt-1 space-y-1">
            <li>Cocinar la carne molida con condimentos y opcionalmente albahaca.</li>
            <li>Hervir los spaghettis con sal y sazón completa hasta que estén suaves.</li>
            <li>Colar y mezclar con mantequilla para evitar que se pegue.</li>
            <li>Mezclar las salsas en una olla con mantequilla hasta lograr la salsa rosa.</li>
            <li>Agregar la carne a la salsa y luego el queso.</li>
            <li>Servir los spaghettis con la salsa por encima.</li>
          </ol>
    </div>
  </details>
);
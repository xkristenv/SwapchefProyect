import React from "react";

interface RecipeCardProps {
  image: string;
  category: "Desayuno" | "Comidas" | "Reposteria" | "Vegetariano";
  name: string;
  autor: string;
  button?: React.ReactNode;
}

export default function RecipeCard(props: RecipeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md mb-5">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <p className="text-sm text-gray-500 font-semibold">{props.category}</p>
        <p className="text-lg font-medium text-gray-800">{props.name}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-gray-600">{props.autor}</p>
          {props.button ? props.button : ''}
        </div>
      </div>
    </div>
  );
}

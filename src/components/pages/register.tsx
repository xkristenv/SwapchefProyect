import React, { useState } from "react";
import Button from "../ui/Button";

interface OrderFormData {
  name: string;
  email: string;
  password: string;
  hidden: string;
}

export default function OrderFormData(){
    const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    email: "",
    password: "",
    hidden: "ruta/de/la/imagen.jpg",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí puedes hacer fetch/post al backend
  };

    return(
        <div className="w-full md:w-1/2 bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm">

<h2 className="text-2xl font-semibold text-gray-700 mb-2">Crear una cuenta</h2>

      {/* Formulario con campos de entrada */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Campo para nombre completo */}
        <div>
          <label className="block text-sm text-[#4E1F00] mb-1">Nombre completo</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none"
            required
          />
        </div>

        {/* Campo para correo electrónico */}
        <div>
          <label className="block text-sm text-[#4E1F00] mb-1">Correo electronico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none"
            required
          />
        </div>

        {/* Campo para la contraseña */}
        <div>
          <label className="block text-sm text-[#4E1F00] mb-1">Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none"
            required
          />
        </div>

        {/* Campo para la contraseña */}
        <div>
          <label className="block text-sm text-[#4E1F00] mb-1">Confirmar contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none"
            required
          />
        </div>

        {/* Botón para enviar el formulario */}
        <Button
          text="Registrar"
          style="w-full bg-[#FEBA17] text-[#4E1F00] py-2 rounded-full font-semibold mt-2 cursor-pointer"
        />
      </form>

      <p className="text-center text-sm text-gray-700 mt-2">
        ¿Ya tienes una cuenta?
        <a href="#" className="text-[#FEBA17] font-medium"> Inicia sesión</a>
      </p>
    </div>
    )
}
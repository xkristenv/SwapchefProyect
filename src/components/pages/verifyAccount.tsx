import React, { useState } from "react";
import Button from "../ui/Button";

interface VerifyAccountFormData {
  password: string;
  hidden: string; // Por si ocupás un ID de usuario o imagen
}

export default function VerifyAccountForm({ onVerify }: { onVerify: () => void }) {
  const [formData, setFormData] = useState<VerifyAccountFormData>({
    password: "",
    hidden: "user123",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Verificado:", formData);
    onVerify(); // Cambia el estado del perfil en el componente padre
  };

  return (
    <div className="w-full md:w-1/2 bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Verifica tu cuenta</h2>

      <p className="text-[#4E1F00] text-center text-[16px] font-semibold mb-4">
        ¿Eres consciente de que tu receta será para todo público?
      </p>

      <div className="w-[38px] h-[38px] bg-[#F0E2D5] rounded-full mx-auto mb-6" />

      <p className="text-[#4E1F00] text-center text-[16px] font-semibold mb-4">
        Tu receta será revisada por los moderadores cuando la publiques
      </p>

      <div className="w-[38px] h-[38px] bg-[#F0E2D5] rounded-full mx-auto mb-6" />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label className="block text-sm text-[#4E1F00] mb-1">Confirma tu contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none pr-10"
            required
          />
          <img
            src="/src/assets/Eye.png"
            alt="ojo"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
          />
        </div>

        <input type="hidden" name="hidden" value={formData.hidden} />

        <Button
          text="Verificar"
          style="w-full bg-[#FEBA17] text-[#4E1F00] py-2 rounded-full font-semibold mt-2 cursor-pointer"
        />
      </form>

      <p className="text-center text-sm text-gray-700 mt-6">¿No deseas verificar tu cuenta?</p>
      <p className="text-center text-[#FEBA17] font-medium cursor-pointer">Volver</p>
    </div>
  );
}

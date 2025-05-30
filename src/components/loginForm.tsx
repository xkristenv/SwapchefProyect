const LoginForm = () => (
  <main className="flex-1 overflow-y-auto px-8 py-6">
    <h1 className="text-[30px] font-semibold text-[#7e7e7e] mb-6">Iniciar sesión</h1>
    <label className="block text-[#4E1F00] text-[16px] font-semibold mb-1">Correo electrónico</label>
    <input type="email" className="w-full h-[38px] rounded-full bg-[#f0e2d4] px-4 mb-4 outline-none" />
    <label className="block text-sm text-[#4E1F00] mb-1">Contraseña</label>
    <div className="relative">
      <input type="password" className="w-full px-4 py-2 bg-[#F5DCC7] rounded-full outline-none pr-10" />
      <img src="/src/assets/Eye.png" alt="icono ojo" className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
    </div>
    <p className="text-center text-[15px] font-semibold text-[#5C5C5C] mb-6">¿Olvidaste la contraseña?</p>
    <button className="w-full h-[39px] bg-[#febe17] text-[#4e1f00] font-semibold text-[17px] rounded-full">Iniciar sesión</button>
    <p className="text-center text-[15px] font-semibold text-[#5C5C5C] mt-6">
      ¿Aún no tienes una cuenta? <a href="#" className="text-[#4e1f00] underline">Registrarse</a>
    </p>
  </main>
);

export default LoginForm;
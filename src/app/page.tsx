

export default function Home() {
  return (
    <div>
    <img className src="/images/background.png" alt="" />
      <div>
      <form className=" w-[350px] h-[350px] rounded-lg flex-column bg-white">
      <img className="w-[200px] p-4" src="/images/Logo.png" alt="" />
        <label className="text-xs text-black " htmlFor="code">Nome de usuário</label>
        <input type="password" id="code"
          placeholder="none" className="w-full p-4" />
<label className="text-xs text-black " htmlFor="code">Senha</label>
        <input type="password" id="code"
          placeholder="none" className="w-full p-4" />
        <button type="submit" className="bg-pink-700 w-[330px] rounded text-white p-6">Entrar</button>
        <button type="submit" className="bg-gray-400 w-[330px]  rounded text-pink-700 p-1">Esqueci minha senha</button>
      </form>

      </div> 
    </div>
  )
}

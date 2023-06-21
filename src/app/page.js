import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div> 
      <h1 className="text-6xl font-bold text-right text-red-500 ">Saca Telas</h1>
      <p className="text-2xl text-center">by Minervo</p>

      {/* Formulario de Contacto       */}
      <form className="flex flex-col items-center justify-center">
        <input className="border-2 border-gray-300 p-2 m-2 rounded-lg" type="text" placeholder="Nombre" />
        <input className="border-2 border-gray-300 p-2 m-2 rounded-lg" type="text" placeholder="Email" />
        <textarea className="border-2 border-gray-300 p-2 m-2 rounded-lg" placeholder="Mensaje" />
        <button className="border-2 border-gray-300 p-2 m-2 rounded-lg" type="submit">Enviar</button>
      </form>

      
    </div>
    </main>
  )
}

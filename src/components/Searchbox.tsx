"use client"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"


const Searchbox = () => {

  const [input, setInput] = useState('')
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    if(!input) return

    router.push(`/search?term=${input}`)

  }

  return (
    <form className='max-w-6xl mx-auto flex justify-between items-center px-5'
    onSubmit={handleSubmit}>
      <input type={"text"}
        placeholder="Buscar palavras chaves..."
        value={input}
        onChange={e => setInput(e.target.value)}
        className="flex-1 outline-none w-full h-14 rounded-sm placeholder-gray-500 bg-transparent dark:text-yellow-500 " />

      <button type='submit'
      disabled={!input}>
        Buscar
      </button>
    </form>
  )
}

export default Searchbox
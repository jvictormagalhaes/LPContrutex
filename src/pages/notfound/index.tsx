import { Link } from 'react-router-dom'
import { Home } from "lucide-react"
import { motion } from "framer-motion"

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center"
      >
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl mt-2 text-gray-600">Página não encontrada</p>

        <p className="text-gray-500 mt-4">
          A página que você está procurando não existe ou foi removida.
        </p>

        <div className="flex justify-center mt-6">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
            <Link className="flex items-center gap-2" to="/">
                <Home className="w-4 h-4" />
                Voltar
            </Link>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

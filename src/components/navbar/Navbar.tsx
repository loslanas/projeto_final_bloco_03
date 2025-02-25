
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-red-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                
               <Link to='/home'> 
                <img 
                            src="https://ik.imagekit.io/22g34n0mo/produtos_farmacia/logo.png?updatedAt=1740485357284" 
                            alt="Imagem da Página Home" 
                            width="200px"
                        />
               </Link>

<div className="relative flex items-center justify-center w-2/5 text-black">
						<form 
							className="flex items-center justify-center w-full"
						>
							<input
								className="w-10/12 px-4 py-4 bg-white rounded-lg h-9 focus:outline-none"
								type="search"
								placeholder="Pesquisar produto"
								id="busca"
								name="busca"
								required
							/>
							<button
								type="submit"
								className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-900 rounded-lg border border-teal-700"
							>
	
							</button>
						</form>
					</div>        

                    <div className='flex gap-8 place-items-center '  >
                    <Link to="/produtos"className="hover:underline">Produtos</Link>
                        <Link to="/categorias" className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
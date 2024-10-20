import Catagories from './Catagories'
import Search from './Search'

const Header = () => {
  return (
    <header className="bg-blue-950 min-h-[90%]">
      <div className="max-w-[1000px] mx-auto p-6">
        <h1 className="text-center text-white py-4 text-2xl font-bold">
          Product <span className="text-orange-600 "> Filter</span>
        </h1>
        <div className="flex justify-between items-center">
          <Search />
          <Catagories />
        </div>
      </div>
    </header>
  )
}

export default Header

import img1 from '../assets/7.png'
const Product = () => {
  return (
    <div className="min-h-[90vh]  bg-gray-300 pt-4">
      <div className="max-w-[250px] mx-auto   shadow-2xl border rounded-3xl shadow-slate-500">
        <img src={img1} className="object-cover" />
        <div className="bg-blue-800 text-center">
          <h2 className="text-2xl text-white">Shirt product</h2>
          <div className="flex justify-between items-center  w-full py-3 px-2">
            <span className="font-medium text-white">$19.8</span>
            <button className="bg-orange-600 text-white py-1 px-2 rounded-md">
              Add To Product
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

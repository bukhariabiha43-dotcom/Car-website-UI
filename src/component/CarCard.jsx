const CarCard = ({ image, make, model, price, year, miles }) => {
  return (

    <div className=" bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
      <img src={image} alt={`${make} ${model}`} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className=" font-semibold text-lg">
          {make} {model}
        </h3>
        <p className="text-blue-600 font-bold mt-1">{price}</p>

        <p className="text-sm text-gray-600 mt-1">
          {year} • {miles}
        </p>

      </div>
    </div>

  );
}

export default CarCard
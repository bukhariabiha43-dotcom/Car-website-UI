import BMW from "../assets/Images/BMW.webp";
import Volvo from "../assets/Images/Volvo.webp"
import Icon from "../assets/Images/Icon.webp"
import Icon2 from "../assets/Images/Icon2.webp"
import Renult from "../assets/Images/Renult.webp"
import brand from "../assets/Images/brand.webp"

const brands = [
    { id: 1, name: "BMW", image: BMW },
    { id: 2, name: "Volvo", image: Volvo },
    { id: 3, name: "Renault", image: Renult },
    { id: 4, name: "Icon", image: Icon },
    { id: 5, name: "Icon2", image: Icon2 },
    { id: 6, name: "brand", image: brand },
]

const Brands = () => {
    return (
        <section className="mt-2">

            <h2 className="text-3xl font-nunitofont font-bold text-center text-gray-800  bg-white mb-2 py-8">Explore Our Premium Brands </h2>

            <div className="flex justify-center items-center px-6 gap-6">
                {brands.map((brand) => (
                    <img
                        key={brand.id}
                        src={brand.image}
                        alt={brand.name}
                        className="h-30 md:h-32 border-2 border-gray-50 shadow-xl bg-white rounded-2xl cursor-pointer"
                    />
                ))}
            </div>


        </section>
    );
};

export default Brands
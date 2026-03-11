import CarData from "./CarData"

const cars2 = [
    {
        id: 1,
        image: "/Cars/Toyota.jpg",
        make: "Toyota",
        model: "Corolla",
        price: "25 Lac",
        year: "2022",
        miles: "15,000 km",
    },

    {
        id: 2,
        image: "/Cars/Audi.jpg",
        make: "Audi",
        model: "Cv40",
        price: "18 Lac",
        year: 2021,
        miles: "20,000 km",
    },
    {
        id: 3,
        image: "/Cars/HondaCv.jpg",
        make: "Honda",
        model: "Cv",
        price: "65 Lac",
        year: "2024",
        miles: "2,000 km",
    },
    {
        id: 4,
        image: "/Cars/VolvoV40.webp",
        make: "Volvo",
        model: "40",
        price: "55 Lac",
        year: "2024",
        miles: "2,000 km",
    },


]

const BargainBuys = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-4">
            <h2 className="text-3xl mb-2 py-2 text-center text-gray-800 cursor-pointer font-nunitofont font-bold">Bargain Buys</h2>

            <div className="text-center mb-6">
                <a href="" className=" underline">View more</a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {cars2.map((car) => (
                    <CarData key={car.id} {...car} />
                ))}
            </div>
        </section>
    )
}

export default BargainBuys

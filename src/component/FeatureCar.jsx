import CarCard from "./CarCard"
const cars = [
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
        image: "/Cars/Car@.avif",
        make: "Honda",
        model: "Civic",
        price: "32 Lac",
        year: "2023",
        miles: "8,000 km",
    },
    {
        id: 3,
        image: "/Cars/Car3.jfif",
        make: "Suzuki",
        model: "Alto",
        price: "18 Lac",
        year: 2021,
        miles: "20,000 km",
    },
    {
        id: 4,
        image: "/Cars/Kie.jpg",
        make: "KIA",
        model: "Sportage",
        price: "55 Lac",
        year: "2024",
        miles: "2,000 km",
    },
    {
        id: 5,
        image: "/Cars/Kie.jpg",
        make: "KIA",
        model: "Sportage",
        price: "55 Lac",
        year: "2024",
        miles: "2,000 km",
    },

    {
        id: 6,
        image: "/Cars/Car 6.webp",
        make: "KIA",
        model: "Sportage",
        price: "55 Lac",
        year: "2024",
        miles: "2,000 km",
    },

    {
        id: 7,
        image: "/Cars/Audi.jpg",
        make: "Audi",
        model: "AUDI A3",
        price: "55 Lac",
        year: "2021",
        miles: "2,000 km",
    },
    {
        id: 8,
        image: "/Cars/bnw.jpg",
        make: "BNW",
        model: "X2",
        price: "45 Lac",
        year: "2018",
        miles: "2,000 km",
    },
    {
        id: 9,
        image: "/Cars/Citroen.jpg",
        make: "Citroen",
        model: "C4",
        price: "45 Lac",
        year: "2018",
        miles: "33,000 km",
    },
    {
        id: 10,
        image: "/Cars/Volkswagn.jpg",
        make: "Volkswagen",
        model: "Passat",
        price: "45 Lac",
        year: "2020",
        miles: "45,000 km",
    },

    {
        id: 11,
        image: "/Cars/Car1.jfif",
        make: "Citroen",
        model: "Honda",
        price: "55 Lac",
        year: "2023",
        miles: "55,000 km",
    },
    {
        id: 12,
        image: "/Cars/Car5.webp",
        make: "Toyota",
        model: "Corolla",
        price: "25 Lac",
        year: "2022",
        miles: "15,000 km",
    },
    {
        id: 13,
        image: "/Cars/Ele.jpeg",
        make: "BNW",
        model: "X2",
        price: "95 Lac",
        year: "2024",
        miles: "55,000 km",
    },

    {
        id: 14,
        image: "/Cars/kk.avif",
        make: "BNW",
        model: "X2",
        price: "95 Lac",
        year: "2024",
        miles: "55,000 km",
    },

    {
        id: 15,
        image: "/Cars/Volkswagn.jpg",
        make: "Volkswagen",
        model: "Passat",
        price: "45 Lac",
        year: "2020",
        miles: "45,000 km",
    },
    {
        id: 16,
        image: "/Cars/Car4.webp",
        make: "Citroen",
        model: "C4",
        price: "80 Lac",
        year: "2018",
        miles: "53,000 km",
    },

]

const FeatureCar = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-10">
            <h2 className="text-2xl  mb-6 py-4 text-center text-gray-900  font-bold font-nunitofont">Recently Added Cars</h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {cars.map((car) => (<CarCard key={cars.id} {...car} />))}

            </div>
        </section>
    )
}

export default FeatureCar

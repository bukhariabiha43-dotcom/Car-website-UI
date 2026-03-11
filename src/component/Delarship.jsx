
import BigCard from './BigCard'
import SmallCard from './SmallCard'
import CKCar from "../assets/Images/CKCar.webp"
import MorgnasCars from "../assets/Images/MorgnasCars.webp"

const Delarship = () => {
    return (
        <section className='max-w-6xl mx-auto p-6'>

            <h1 className='text-3xl font-bold mb-8 font-nunitofont text-center mt-8'>Trusted Dealerships</h1>
            <div className='grid md:grid-cols-6 gap-6 w-full'>

                <div className='md:col-span-4 flex flex-col md:flex-row gap-6 w-full'>
                    <BigCard image={MorgnasCars}

                        title='Morgans Cars & Commercials'
                        desc="Morgans Car's & Commercials. Creating higher standards in vehicle sales" />
                    <BigCard image={CKCar}
                        title='CK Car Sales'
                        desc="CK Car Sales have a range of vehicles for sale for all budgets. With years of experience in the used car sales market, CK Car Sales only offer for retail the cleanest and best examples of cars for sale.All our vehicles are hand picked and go through an extensive checks." />

                </div>
                <div className='md:col-span-2 space-y-6'>
                    <SmallCard image="/src/assets/Images/DCSCar.jpg" title="DSC CArs"
                        desc="Our aim is to provide an enjoyable car buying experience at the best p..." />


                    <SmallCard image="/src/assets/Images/SuitorAuros.webp" title="Suitor Autos"
                        desc="Our aim is to provide an enjoyable car buying experience at the best p..." />

                    <SmallCard image="/src/assets/Images/Martin.webp" title="Matran Traynor Motor"
                        desc="-Car Sales Can Source Any Car, Finance Available -Bodywork Shop - Mechanic Garage - Mudflaps -Side Skirts available" />
                </div>

            </div>
        </section>
    )
}

export default Delarship
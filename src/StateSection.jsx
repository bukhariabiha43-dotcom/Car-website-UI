import StateCard from "./StateCard"

const StateSection = () => {
    return (
        <section className="w-full py-10 px-6 bg-gray-50 mt-12 cursor-pointer">
            <div className="grid grid-cols-2 md:grid-cols-4">
                <StateCard number="6,296" label="Cars for sel" />
                <StateCard number="1" label="Forum Section" />
                <StateCard number="6,666" label="Visitors Per Day" />
                <StateCard number="139" label="Varified Dealers" />

            </div>
        </section>
    )
}

export default StateSection
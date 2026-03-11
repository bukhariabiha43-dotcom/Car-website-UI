import Dropdown from "./Dropdown";

function Dropdowns() {
  return (
    <div className="bg-white rounded-[36px] p-6 pt-6 mt-14 shadow-xl w-[90%] max-w-6xl font-nunitofont">

      <div className="grid grid-cols-5 gap-4 text-sm text-black items-center">

        <Dropdown label={"Make"} firstOption={"Make"} />

        <Dropdown label={"Model"} firstOption={"Model"} />

        <Dropdown label={"Varaint"} firstOption={"Varaint"} />

        <Dropdown label={"Body Type"} firstOption={"Body"} />

        <Dropdown label={"Max Miles"} firstOption={"Any"} />

        <Dropdown label={"Price Form"} firstOption={"Min"} />

        <Dropdown label={"Price To"} firstOption={"Price To"} />

        <Dropdown label={"Year Form"} firstOption={"Form"} />

        <Dropdown label={"Year To"} firstOption={"To"} />

        <Dropdown label={"Engine Size"} firstOption={"Any"} />

      </div>


      <div className="flex justify-between items-center mt-6">

        <button className="border rounded-[10px] px-8 py-3 text-sm cursor-pointer hover:bg-gray-200">More Filters</button>

        <div className="flex items-center gap-4">
          <button className="text-sm text-red-600 border cursor-pointer border-gray-200 h-11 px-6 py-3 rounded-[10px]">Clear all</button>

          <button className="bg-black text-white rounded-xl px-6 py-3 text-sm cursor-pointer hover:bg-gray-800 transition">
            Search (6341)</button>

        </div>

      </div>

    </div>

  );
}

export default Dropdowns;

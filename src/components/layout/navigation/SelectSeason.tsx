import { useState } from "react";

type SelectSeasonProps = {
    onSelectSeason: (selectedSeason: string) => void;
}
function SelectSeason({ onSelectSeason } : SelectSeasonProps ) {
    const [selectedSeason, setSelectedSeason] = useState("2022");

    function handleChange(event: any) {
        setSelectedSeason(event.target.value);
        onSelectSeason(event.target.value)
    }

    return (
        <div className="mt-6 w-40 sm:w-48">
        <label htmlFor="season" className="text-sm font-medium text-gray-400 block">
          Select season
        </label>
        <select
          id="season"
          name="season"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={selectedSeason}
          onChange={handleChange}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </div>
    )
}
export default SelectSeason;
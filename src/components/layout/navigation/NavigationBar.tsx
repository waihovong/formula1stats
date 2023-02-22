import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navigation() {
    return (
            <nav className="mx-auto p-7 flex xs:block xs:text-center sm:block sm:text-center md:block md:text-center bg-red-600">
                <Link to="/" className="uppercase font-semibold w-1/3 text-lg text-white cursor-pointer hover:text-black sm:mx-auto xs:text-base">Formula 1 Stats</Link> 
                <div className="text-left flex items-center w-full">
                    <ul className="uppercase flex items-center w-full justify-evenly cursor-pointer">
                        <li className="hover:text-black text-white font-semibold xs:text-xs xs:mx-1 sm:mx-2 md:mx-2 ">Latest</li>
                        <li className="hover:text-black text-white font-semibold xs:text-xs xs:mx-1 sm:mx-2 md:mx-2">Drivers</li>
                        <li className="hover:text-black text-white font-semibold xs:text-xs xs:mx-1 sm:mx-2 md:mx-2">Teams</li>
                        <li className="hover:text-black text-white font-semibold xs:text-xs xs:mx-1 sm:mx-2 md:mx-2">
                            <Link to="/standings">Standings</Link>
                        </li>
                        <li className="hover:text-black text-white font-semibold xs:text-xs xs:mx-1">Analysis</li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navigation;
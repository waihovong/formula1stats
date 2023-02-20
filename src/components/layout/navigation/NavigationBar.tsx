function Navigation() {
    return (
        <nav className="w-1/2 mx-auto m-7">
            <div className="text-left flex items-center w-full">
                {/* TODO: change to a href and link back to landing page */}
                <span className="uppercase font-semibold text-lg w-1/3 hover:text-red-500">Formula 1 Stats</span> 
                <ul className="uppercase flex items-center w-full justify-evenly">
                    <li className="hover:text-red-500 font-semibold">Latest</li>
                    <li className="hover:text-red-500 font-semibold">Drivers</li>
                    <li className="hover:text-red-500 font-semibold">Teams</li>
                    <li className="hover:text-red-500 font-semibold">Standings</li>
                    <li className="hover:text-red-500 font-semibold">Analysis</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
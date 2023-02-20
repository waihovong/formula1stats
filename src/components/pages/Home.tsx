import Navigation from "../layout/navigation/NavigationBar";
import SeasonStanding from "./SeasonStanding"

const Home = () => {
    return (
        <div>
            <Navigation/>
            <div>
                {/* <h1>Formula 1 Stats</h1> */}
                <SeasonStanding/>
            </div>
        </div>
    )
}

export default Home;
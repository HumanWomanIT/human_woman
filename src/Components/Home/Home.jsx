import { Craftsman } from "../Craftsman/Craftsman"
import { Handmades } from "../Handmades/Handmades"
import { HomePageOne} from "../HomePageOne/HomePageOne"
import { Popular } from "../Popular/Popular"
import { Reviews } from "../Reviews/Reviews"
import { Statistic } from "../Statistic/Statistic"

export const Home = () => {
    return(
        <section>
            <HomePageOne/>
            <Statistic/>
            <Popular/>
            <Craftsman/>
            <Handmades/>
            <Reviews/>
        </section>
    )
}
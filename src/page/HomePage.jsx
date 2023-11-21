import NavBar2 from "../navbar/NavBar2";
import BestSellingEbookPage from "./BestSellingEbookPage";
import EbookFreePage from "./EbookFreePage";


export default function HomePage() {
    return (
        <>
            {/* <NavBar1 /> */}
            <div className="grid grid-cols-3 h-100">
                <img src="/src/assets/1.jpg" className="flex border-box"></img>
                <img src="/src/assets/2.jpg" className="flex border-box"></img>
                <img src="/src/assets/you-leave.jpg" className="flex border-box"></img>
            </div>

            <NavBar2 />
            <BestSellingEbookPage />
            <EbookFreePage />

        </>
    )
}
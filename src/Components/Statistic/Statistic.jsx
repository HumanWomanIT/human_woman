import "./statistic.css";
import iconOne from "../../assets/Icon1.png";
import iconTwo from "../../assets/Icon2.png";
import iconThree from "../../assets/Icon3.png";
import upImg from "../../assets/upBg.png";

export const Statistic = () => {
    return (
        <section className="statistic">
            <img src={upImg} alt="" />
            <div className="container">
                <div>
                    <img src={iconOne} alt="" />
                    <div className="text">
                        <h3>1000</h3>
                        <span>Craftsman</span>
                    </div>
                </div>
                <div>
                    <img src={iconTwo} alt="" />
                    <div className="text">
                        <h3>10.000</h3>
                        <span>Products</span>
                    </div>
                </div>
                <div>
                    <img src={iconThree} alt="" />
                    <div className="text">
                        <h3>1000</h3>
                        <span>Categories</span>
                    </div>
                </div>
                <div>
                    <img src={iconOne} alt="" />
                    <div className="text">
                        <h3>10.000</h3>
                        <span>Users</span>
                    </div>
                </div>
            </div>
            <img src={upImg} alt="" />
        </section>
    );
};

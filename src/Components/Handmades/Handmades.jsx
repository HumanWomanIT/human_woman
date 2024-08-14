import "./handmades.css";
import craft1 from "../../assets/image23.png";
import craft2 from "../../assets/image24.png";
import craft3 from "../../assets/image25.png";

export const Handmades = () => {
    return (
        <section className="handmades">
            <div className="handmades_popular container">
                <h2>Most Popular Handmades</h2>
                <div>
                    <div>
                        <img src={craft1} alt="" />
                        <span></span>
                        <h3>
                            Handcrafted Macramé Feather with Comb for Styling
                        </h3>
                        <p>
                            A close-up of a beautifully handcrafted macramé
                            feather being meticulously styled with a comb. This
                            intricate piece, woven from soft, natural fibers,
                            adds a touch of boho elegance to any decor. Perfect
                            for enhancing baskets, wall hangings, or as a
                            standalone decorative element.
                        </p>
                        <div className="handmades_button">
                            <button>150$</button>
                            <button>See More</button>
                        </div>
                    </div>
                    <div>
                        <img src={craft2} alt="" />
                        <span></span>
                        <h3>
                            Traditional Embroidered Garment with Intricate
                            Detailing
                        </h3>
                        <p>
                            A close-up of hands adjusting the intricate
                            embroidery on a traditional garment. The detailed
                            patterns, featuring vibrant red and black threads on
                            a beige fabric, reflect a rich cultural heritage.
                            Perfect for showcasing the beauty and craftsmanship
                            of traditional attire.
                        </p>
                        <div className="handmades_button">
                            <button>150$</button>
                            <button>See More</button>
                        </div>
                    </div>
                    <div>
                        <img src={craft3} alt="" />
                        <span></span>
                        <h3>
                            Festive Children's Outfit with Reindeer Sweater and
                            Accessories
                        </h3>
                        <p>
                            A delightful children's holiday outfit featuring a
                            vibrant red sweater adorned with a playful reindeer
                            design. Paired with cozy, bear-themed slippers and a
                            fun reindeer antler headband, this ensemble is
                            perfect for celebrating the festive season in style.
                            Surrounded by seasonal decor elements, this set is a
                            charming choice for holiday gatherings and photos.
                        </p>
                        <div className="handmades_button">
                            <button>150$</button>
                            <button>See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

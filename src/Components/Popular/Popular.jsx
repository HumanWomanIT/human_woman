import "./popular.css";
import one from "../../assets/icons/1.png";
import two from "../../assets/icons/2.png";
import three from "../../assets/icons/3.png";
import four from "../../assets/icons/4.png";
import five from "../../assets/icons/5.png";
import six from "../../assets/icons/6.png";
import seven from "../../assets/icons/7.png";
import eight from "../../assets/icons/8.png";
import nine from "../../assets/icons/9.png";
import ten from "../../assets/icons/10.png";
import eleven from "../../assets/icons/11.png";
import twelve from "../../assets/icons/12.png";

const categories = [
    { src: one, name: "Category Name", products: "357 Products" },
    { src: two, name: "Category Name", products: "357 Products" },
    { src: three, name: "Category Name", products: "357 Products" },
    { src: four, name: "Category Name", products: "357 Products" },
    { src: five, name: "Category Name", products: "357 Products" },
    { src: six, name: "Category Name", products: "357 Products" },
    { src: seven, name: "Category Name", products: "357 Products" },
    { src: eight, name: "Category Name", products: "357 Products" },
    { src: nine, name: "Category Name", products: "357 Products" },
    { src: ten, name: "Category Name", products: "357 Products" },
    { src: eleven, name: "Category Name", products: "357 Products" },
    { src: twelve, name: "Category Name", products: "357 Products" }
];

export const Popular = () => {
    return (
        <section className="popular container">
            <h2>Popular categories</h2>
            <div className="popular_category">
                {categories.map((category, index) => (
                    <div key={index}>
                        <img src={category.src} alt={category.name} />
                        <div className="category_text">
                            <h3>{category.name}</h3>
                            <span>{category.products}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button>View All</button>
        </section>
    );
};

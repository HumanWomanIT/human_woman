import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from './AnimationLottie/Animation.json'
import { Main } from "./Components/Main/Main";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <Lottie animationData={animationData} />
                </div>
            ) : (
                <Main />
            )}
            <Main />
        </>
    );
}

export default App;

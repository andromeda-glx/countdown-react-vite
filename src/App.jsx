import { useState } from "react"
import Countdown from "./components/Countdown"
import Button from "./components/Button";

function App() {
    const [countValue, setCountValue] = useState(10);
    const [isActive, setIsActive] = useState(false);

    function handleCountValue() {
        const value = Number(document.querySelector(".count-input").value);
        
        value >= 0 ? setCountValue(value) : alert("Invalid input");
    }

    function handleActive(active){
        setIsActive(active);
    }

    function timeUp(){
        setCountValue(0);
    }

    return (
        <main className="bg-epic-50 h-dvh w-dvw flex items-center justify-center flex-col gap-y-5">
            <div className="bg-gray-500 w-[60%] rounded-2xl p-6">
                <h2 className="text-gray-100 text-xl">Set a time</h2>
                <div className="flex items-stretch justify-center gap-x-5 w-full">
                    <input
                        className="count-input text-3xl w-20 rounded-md text-center bg-gray-100"
                        type="number"
                        defaultValue={10}
                        min={0}
                    />
                    <Button
                        text={"OK"}
                        color={"bg-green-500"}
                        handleClick={handleCountValue}
                        isDisabled={isActive}
                    />
                </div>
            </div>
            <Countdown
                initialValue={countValue}
                handleActive={handleActive}
                timeUp={timeUp}
            />
        </main>
    )
}

export default App

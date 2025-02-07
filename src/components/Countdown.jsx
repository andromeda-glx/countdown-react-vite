import { useState, useEffect } from "react";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function Countdown({ initialValue, handleActive }) {
    const [counter, setCounter] = useState(0);
    const [countStart, setCountStart] = useState(false);

    function handleStart() {
        setCountStart(true);
        handleActive(true);
    }
    function handlePause() {
        setCountStart(false);
        handleActive(true);
    }
    function handleReset() {
        handleActive(false);
        setCounter(initialValue);
    }

    useEffect(() => {
        setCounter(initialValue);
    }, [initialValue]);

    useEffect(() => {
        let intervalID = null;
        if (countStart && counter > 0) {
            intervalID = setInterval(() => {
                setCounter(counter - 1);
            }, 1000);
        }
        else if (counter === 0){
            setCountStart(false);
        }

        return () => clearInterval(intervalID);

    }, [counter, countStart]);

    return (
        <div className="w-[60%] bg-epic-100 flex flex-col gap-y-8 items-center py-5 px-10 rounded-2xl">
            <h1 className="text-4xl font-semibold text-gray-300">
                Countdown
            </h1>
            <div className="">
                <p className="text-gray-200 text-xl">{counter} seconds</p>
            </div>
            <div className="flex gap-x-2">
                <Button
                    text={"Start"}
                    color={"bg-blue-500"}
                    handleClick={handleStart}
                    isDisabled={countStart || counter === 0}
                />
                <Button
                    text={"Pause"}
                    color={"bg-amber-500"}
                    handleClick={handlePause}
                    isDisabled={!countStart || counter === 0}
                />
                <Button
                    text={"Reset"}
                    color={"bg-red-500"}
                    handleClick={handleReset}
                />
            </div>
        </div>
    )
}

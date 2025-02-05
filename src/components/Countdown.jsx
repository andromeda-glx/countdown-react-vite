import { useEffect, useState } from "react";
import Button from "./Button";
import Counter from "./Counter";
import Input from "./Input";

export default function Countdown() {
    const [counter, setCounter] = useState(10);
    const [countStart, setCountStart] = useState(false);

    function handleStart() {
        setCountStart(true);
    }
    function handlePause() {
        setCountStart(false);
    }
    function handleReset() {
        setCounter(10);
        setCountStart(false);
    }

    useEffect(() => {
        let intervalID = null;
        if (countStart && counter > 0) {
            intervalID = setInterval(() => {
                setCounter(counter - 1);
            }, 1000);
        }

        return () => clearInterval(intervalID);
    }, [counter, countStart]);

    return (
        <div className="w-[60%] bg-epic-100 flex flex-col gap-y-8 items-center py-5 px-10 rounded-2xl">
            <h1 className="text-4xl font-semibold text-gray-300">
                Countdown
            </h1>
            <Counter counter={counter} />
            <div className="flex gap-x-2">
                <Button
                    text={"Start"}
                    color={"bg-blue-500"}
                    handleClick={handleStart}
                    isDisabled={countStart}
                />
                <Button
                    text={"Pause"}
                    color={"bg-amber-500"}
                    handleClick={handlePause}
                    isDisabled={!countStart || !counter}
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

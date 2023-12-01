import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
);

function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    return (
        <div className="flex box-border flex-wrap items-center h-screen justify-center">
            <button
                onClick={decrease}
                className="text-7xl bg-indigo-900 w-32 aspect-square shadow-lg rounded-lg"
            >
                -
            </button>
            <span className="text-6xl m-5 select-none cursor-default">
                You've counted{" "}
                <span
                    onClick={increase}
                    className="underline cursor-pointer relative -top-2"
                >
                    {count}
                </span>{" "}
                {count > 1 || count < -1 ? "gramms" : "gramm"}
            </span>
            <button
                onClick={increase}
                className="text-7xl bg-indigo-900 w-32 aspect-square shadow-lg rounded-lg"
            >
                +
            </button>
        </div>
    );
}

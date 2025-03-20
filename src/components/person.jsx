import React from "react";

export default function Person(props) {
    return (
        <div className="bg-pink-300">
            <h1>
                My name is {" "}
                <span className="text-purple-400 text-2xl font-bold">
                    {props.name}
                </span>
                <p className="text-2xl text-amber-200 font-bold">{props.address}</p>
            </h1>
        </div>
    );
}
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage () {
    const [apiData, setApiData] = useState("");


    useEffect(() => {
        axios.get("http://localhost:4000/hello")
            .then(({ data }) => setApiData(data))
            .catch(err => console.error(err))
    }, []);

    return (
        <div className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                Hello from React!
            </div>
            <div className="md:flex md:items-center mb-6">
                {apiData}
            </div>
        </div>
    )
}
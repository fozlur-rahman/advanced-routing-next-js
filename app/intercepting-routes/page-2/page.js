import Link from "next/link";
import React from "react";

const InterceptingPage2 = () => {
    return (
        <div className="container mx-auto border border-gray-800 p-10 rounded">
            <h2 className="text-2xl mb-2"> page 2</h2>
            <Link
                href="/intercepting-routes"
                className="text-blue-400 underline"
            >
                Go to page-1
            </Link>{" "}
            <br />
            <Link
                href="/intercepting-routes/page-3"
                className="text-blue-400 underline"
            >
                Go to page-3
            </Link>
        </div>
    );
};

export default InterceptingPage2;

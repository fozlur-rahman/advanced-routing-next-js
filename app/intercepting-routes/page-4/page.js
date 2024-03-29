import Link from "next/link";
import React from "react";

const Page4 = () => {
    return (
        <div className="container mx-auto border border-gray-800 p-10 rounded">
            <h2 className="text-2xl mb-2"> page 4</h2>
            <Link
                href="/intercepting-routes"
                className="text-blue-400 underline"
            >
                Go to page-1
            </Link>
        </div>
    );
};

export default Page4;

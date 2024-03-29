import Link from "next/link";
import React from "react";

const Page3 = () => {
    return (
        <div className="container mx-auto border border-gray-800 p-10 rounded">
            <h2 className="text-2xl mb-2"> page 3</h2>
            <Link
                href="/intercepting-routes/page-4"
                className="text-blue-400 underline"
            >
                Go to page-4
            </Link>
        </div>
    );
};

export default Page3;

import Link from "next/link";
import React from "react";

const InterceptPage = () => {
    return (
        <div className="container mx-auto border border-gray-800 p-10 rounded">
            <h2 className="text-2xl mb-2">Intercepting page 2</h2>
            <Link
                href="/intercepting-routes/page-2"
                className="text-blue-400 underline"
            >
                Go to page-2
            </Link>
        </div>
    );
};

export default InterceptPage;

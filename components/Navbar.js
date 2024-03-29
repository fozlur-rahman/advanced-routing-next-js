import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-gray-900">
            <div className="container mx-auto h-20 flex justify-start items-center mb-10">
                <Link href="/" className="text-xl">
                    Navbar
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

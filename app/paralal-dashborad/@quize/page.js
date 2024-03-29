import Link from "next/link";
import React from "react";

const Quize = async () => {
    return (
        <div className=" h-[420px] border row-span-2 border-gray-800 rounded flex justify-center items-center text-3xl gap-3">
            <span> Quize</span>
            <Link className="text-blue-500" href="/paralal-dashborad/seen">seen</Link>
        </div>
    );
};

export default Quize;

import Link from "next/link";

const Seen = () => {
    return (
        <div className=" h-[420px] border row-span-2 border-gray-800 rounded flex justify-center items-center text-3xl gap-3">
            <span className="text-xl"> seen quizes</span>
            <Link className="text-blue-500" href={"/paralal-dashborad"}>
                seen
            </Link>
        </div>
    );
};

export default Seen;

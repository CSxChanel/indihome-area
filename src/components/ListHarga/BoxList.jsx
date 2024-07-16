//components/ListHarga
import { GoChevronDown } from "react-icons/go";

const BoxList = ({ type, title, price, mbps }) => {
    return (
        <div className="my-8 sm:my-5 shadow-lg shadow-slate-500 w-full mx-auto bg-slate-100 rounded-xl">
            <h2 className="mx-auto w-[180px] py-1 text-center text-slate-200 font-bold bg-gradient-to-r from-slate-900 to-slate-600 rounded-bl-xl rounded-tr-xl">
                Paling Populer
            </h2>
            <div className="flex flex-row mx-7 my-5">
                <div className="w-[75px] h-[75px] bg-gradient-to-tr from-rose-950 to-rose-500 rounded-tl-xl rounded-br-xl text-slate-100 p-2 text-center mr-5">
                    <p className="text-3xl font-bold">{mbps}</p>
                    <p className="-mt-2">Mbps</p>
                </div>
                <div>
                    <h3 className="font-semibold text-xl">{title}</h3>
                    <p>{type}</p>
                </div>
            </div>
            <div className="mx-7 text-center">
                <h3 className="font-semibold mt-8">
                    Rp{" "}
                    <span className="text-2xl font-bold">
                        {price.toLocaleString()}
                    </span>
                    /bulan
                </h3>
                <div className="bg-rose-700 w-full rounded-xl shadow shadow-slate-500 text-slate-100 font-bold hover:scale-110 mt-5">
                    <button>Berlangganan sekarang</button>
                </div>
            </div>
            <div className="flex justify-between mx-2 border-t-2 my-4 py-2 text-sm text-rose-700">
                <button>
                    Benevit
                    <GoChevronDown />
                </button>
                <button>
                    Syarat & Ketentuan
                    <GoChevronDown />
                </button>
            </div>
        </div>
    );
};
export default BoxList;

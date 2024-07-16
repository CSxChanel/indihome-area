//components/ListHarga
import React from "react";
import BoxList from "./BoxList.jsx";
import {
    InternetOnly,
    InternetTv,
    InternetTvPhone
} from "../../services/Datas.js";

const BoxPrice = () => {
    const allPackages = [...InternetOnly, ...InternetTv, ...InternetTvPhone];
    return (
        <div className="container my-5">
            <div className="mt-16 w-full mx-auto text-center">
                <h1 className="font-bold text-2xl sm:text-3xl">
                    Pilihan Paket IndiHome
                </h1>
                <div className="border-t-2 border-slate-500 my-8">
                    <h1 className="font-bold text-2xl text-rose-600">indiHome-Area</h1>
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 gap-3">
                {allPackages.map(pkg => (
                    <BoxList
                        key={pkg.id}
                        mbps={pkg.mbps}
                        type={pkg.type}
                        title={pkg.title}
                        price={pkg.price}
                    />
                ))}
            </div>
        </div>
    );
};
export default BoxPrice;

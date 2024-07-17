import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import BoxList from "./BoxList.jsx";
import { InternetTvPhone } from "../../services/Datas.js";

const InetTvPhone = () => {
    const inetTvPhone = [...InternetTvPhone];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="container my-5">
            <div className="mt-16 w-full mx-auto text-center">
                <h1 className="font-bold text-2xl sm:text-3xl">
                    Pilihan Paket IndiHome
                </h1>
                <div className="border-t-2 border-slate-300 my-8">
                    <h1 className="font-bold text-2xl text-rose-600">
                        Paket 3P (internet + Tv + Phone)
                    </h1>
                </div>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <PulseLoader color="#e11d48" size={15} />
                </div>
            ) : (
                <div className="sm:grid sm:grid-cols-2 gap-3">
                    {inetTvPhone.map(pkg => (
                        <BoxList
                            key={pkg.id}
                            mbps={pkg.mbps}
                            type={pkg.type}
                            title={pkg.title}
                            price={pkg.price}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
export default InetTvPhone;

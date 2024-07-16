//views/Home
import React from "react";
import Banner from "../components/Banner.jsx";
//paket harga
import InternetJitu from "../components/ListHarga/InternetOnly.jsx";
import JituTv from "../components/ListHarga/InternetTv.jsx";
import InetTvPhone from "../components/ListHarga/InternetTvPhone.jsx";
function Home() {
    return (
        <>
            <Banner />
            <InternetJitu />
            <JituTv />
            <InetTvPhone />
        </>
    );
}
export default Home;

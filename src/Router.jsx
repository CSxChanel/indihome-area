import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ListLayout from "./layouts/ListLayout.jsx";

const Home = lazy(() => import("./views/Home.jsx"));
const List = lazy(() => import("./views/List.jsx"));
// const Detail = lazy(() => import("./views/Detail"));
import NotFound from "./views/NotFound.jsx";
import BoxPrice from './components/ListHarga/BoxPrice.jsx'

export default function Router() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route element={<ListLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/produk" element={<BoxPrice />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/:type/:menu" element={<List />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

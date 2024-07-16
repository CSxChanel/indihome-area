// layouts/ListLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const ListLayout = () => {
    return (
        <>
            <div className="mt-10">
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default ListLayout;

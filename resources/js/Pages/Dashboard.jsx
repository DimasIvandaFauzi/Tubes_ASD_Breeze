import Navbar from "@/Components/Navbar";
    import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";


export default function Dashboard({ auth, menus, menuDetail }) {
    console.log('data tambahMenu', menuDetail);
    const addMenu = (id) => {
        Inertia.get('/tambahMenu', { id });
      };
    return (
        <>
            <div className="flex w-full ">
                {/* Menu */}
                <div className=" h-screen w-8/12 overflow-y-scroll overflow-x-hidden scrollbar">
                    <Head title="Dashboard" />
                    <Navbar user={auth.user} />
                    <h1 className=" font-extrabold text-Black text-4xl mt-5 ml-11">Menu</h1>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-wrap ">
                            {menus && menus.length > 0? (
                                menus.map((menu,i) =>(

                            <div key={i} className="card w-56 h-72 shadow-md text-Black outline-1  rounded-lg p-4 m-3">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                        alt="Shoes"
                                    />
                                </figure>
                                <div className="card-body h-full">
                                    <h2 className="card-title font-normal text-xl my-2 capitalize h-1/5">{menu.nama}</h2>
                                    <p className=" font-bold text-lg mt-3 ">
                                        {menu.harga}
                                    </p>
                                    <div className="mt-3">
                                            <button className="px-3 rounded-lg text-white bg-gray-800 py-2 text-sm" onClick={() => addMenu(menu.id)}>
                                                Add to cart
                                            </button>
                                    </div>
                                </div>
                            </div>
                                ))
                            ) : (<span>Belum Ada Menu!</span>)}
                            
                        </div>
                
                </div>

                {/* Side Bar */}
                <div className=" h-screen top-0 bg-white w-4/12 shadow-l fixed right-0 p-3">
                    <h1 className=" font-extrabold text-3xl mb-3 mt-3 ">Order</h1>
                    <div className="h-3/4 overflow-x-hidden">
                        {menuDetail ? (
                           <div className=" outline-1 rounded-lg shadow-md flex justify-between p-2">
                           <div className="">
                               <h1 className=" font-semibold">{menuDetail.nama}</h1>
                               <p>{menuDetail.harga}</p>
                           </div>
                           <div className=" items-center flex justify-center mr-4 text-lg">
                                <span></span>
                               <button className="mr-1">-</button>
                               <span className="mx-1">0</span>
                               <button>+</button>
                           </div>
                       </div> 
                        ) : (

                            <div className=" outline-1 rounded-lg shadow-md flex justify-between p-2">
                            Blom ada order
                            </div>
                        )}
                    </div>
                    <div className="flex justify-center items-center w-full">
                    <button className=" bg-gray-800 items-center text-center font-bold w-full rounded-full text-white py-1 mt-4 text-lg">Buat</button>
                    </div>
                </div>
            </div>
        </>
    );
}

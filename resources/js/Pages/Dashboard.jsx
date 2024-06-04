import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";



export default function Dashboard({ auth, menus, menuDetails, flash }) {
    const [open, setOpen] = useState(false)
    console.log('Data Menu', menus, auth)
    

    const addMenu = () => {
        Inertia.post('/tambahMenu', { menu_id: menus.id, jumlah: 1 }, {
            onSuccess: (page) => {
                setOrderDetails(page.props.menuDetail);
                console.log("flash", flash);
            }
        });
    };

    return (
        <>
            <div className="flex w-full font-sans">
                {open && (
                <div className=" h-screen w-full fixed z-50 bg-black/30 flex items-center justify-center cursor-pointer" onClick={() => setOpen(false)}>
                    <div className=" h-96 w-2/6 bg-white rounded-lg shadow-md flex flex-col items-center justify-center cursor-default pb-4" onClick={(e) =>e.stopPropagation()}>
                        <div className="bg-[url(./img/BLU.svg)] h-3/5 rounded-t-lg w-full bg-contain bg-no-repeat bg-center "></div>
                        <div className="">
                            <div className=" mb-4 mt-3">
                                <h1 className=" font-extra-bold text-4xl">Waktunya untuk bayar!</h1>
                            </div>
                            <div className=" flex justify-center items-center">
                                <PrimaryButton className="bg-black mt-2">Buat Pesanan</PrimaryButton> 
                            </div>
                        </div>
                    </div>

                </div>
                )}
                <div className="h-screen w-8/12 overflow-y-scroll overflow-x-hidden scrollbar">
                    <Head title="Dashboard" />
                    <Navbar user={auth.user} />
                    <h1 className="font-extra-bold text-Black text-4xl text-center  mt-10 mb-2">Menu Makanan & Minuman Berkah Jaya</h1>
                    <p className="font-bold text-center mb-10 text-xl">Murah, Sehat & Menyehatkan</p>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-wrap">
                        {menus && menus.length > 0 ? (
                            menus.map((menu, i) => (
                                <div key={i} className="card w-56 h-72 shadow-md text-Black outline-1 rounded-lg p-4 m-3">
                                    <figure>
                                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                                    </figure>
                                    <div className="card-body h-full">
                                        <h2 className="card-title font-normal text-xl my-2 capitalize h-1/5">{menu.nama}</h2>
                                        <p className="font-bold text-lg mt-3">{menu.harga}</p>
                                        <div className="mt-3">
                                            <button className="px-3 rounded-lg text-white bg-gray-800 py-2 text-sm" onClick={() => addMenu(menu.id)}>
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <span>Belum Ada Menu!</span>
                        )}
                    </div>
                </div>

                <div className="h-screen top-0 bg-white w-4/12 shadow-l fixed right-0 p-3">
                    <h1 className="font-extra-bold text-3xl mb-3 mt-3">Order</h1>
                    <div className=" font-medium text-lg">
                        <span>Nama Kasir : </span>
                        <input type="text" className="capitalize underline" defaultValue={auth.user.name} />
                    </div>
                    <div className="font-medium mb-1 text-lg">
                        <span>Nama Pelanggan : </span>
                        <input type="text" className="border border-black px-1"/>
                    </div>
                    <div className="h-4/6 overflow-x-hidden">
                        {menuDetails && menuDetails.length > 0 ? (
                            menuDetail.map((detail, i) => (
                                <div key={i} className="outline-1 rounded-lg shadow-md flex justify-between p-2">
                                    <div>
                                        <h1 className="font-semibold">{detail.nama_menu}</h1>
                                        <p>{detail.total}</p>
                                    </div>
                                    <div className="items-center flex justify-center mr-4 text-lg">
                                        <span></span>
                                        <button className="mr-1">-</button>
                                        <span className="mx-1">{detail.jumlah}</span>
                                        <button>+</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="outline-1 rounded-lg shadow-md flex justify-between p-2">
                                Belum ada order
                            </div>
                        )}
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <button className="bg-gray-800 items-center text-center font-bold w-full rounded-full text-white py-1 mt-4 text-lg" onClick={() =>setOpen(true)}>Buat</button>
                    </div>
                </div>
            </div>
        </>
    );
}

import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

const Popup = () => {
    
    
    
    const [jumlah, setJumlah] = useState(0);
    function incrementJumlah() {
        setJumlah(jumlah + 1);
    }
    function decrementJumlah() {
        setJumlah(jumlah - 1);
    }

    return (
        <div className=" w-screen z-50 h-screen absolute flex items-center justify-center bg-black/20">
            <div className=" bg-white w-2/6 shadow-md text-Black outline-1 rounded-lg p-4 m-3">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                    />
                </figure>
                <div className=" h-full">
                    <h2 className="font-bold text-2xl my-2 capitalize h-1/5">
                        Nama Makanan
                    </h2>
                    <p className="font-normal text-xl mt-5">Harga</p>
                    <div className="flex text-xl mt-2 mb-3">
                        <button onClick={decrementJumlah} className="bg-black text-white rounded px-2"><span className=" font-extra-bold">-</span></button>
                        <input type="text" value={jumlah} readOnly={true} className="w-10 text-center" />
                        <button onClick={incrementJumlah} className="bg-black text-white rounded px-2"><span>+</span></button>
                    </div>
                    <div className="mt-3 flex justify-center items-center">
                        <button className="px-3 rounded-lg text-white bg-gray-800 py-2 text-sm">
                            Tambahkan ke Orderan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;

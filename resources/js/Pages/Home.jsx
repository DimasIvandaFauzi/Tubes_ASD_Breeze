import { Link } from "@inertiajs/react";
import { easeInOut, motion } from "framer-motion";

const Home = (props, auth) => {
    console.log("data dari Home", props);

    return (
        <>
            <div className=" bg-white ">
                <div className=" bg-white h-screen md:flex flex-row md:justify-around justify-center items-center">
                    <div className="md:w-2/5 mt-8 w-3/4">
                        <h1 className="md:text-5xl font-extra-bold text-5xl">
                            Selamat Datang di Web Kasir Pens!
                        </h1>
                        <p className="md:mt-3 md:text-2xl text-base md:w-5/6">
                            Mempermudah UMKM dalam memanajemen point of sale
                        </p>
                        <div className="mt-3">
                            {props.auth.user ? (
                                <button className=" bg-gray-900 text-white px-4 rounded-full font-semibold pb-1 border-black pt-1 hover:outline hover:outline-black">
                                    <Link href={route("dashboard")}>Dashboard</Link>
                                </button>
                            ) : (
                                <>
                                    <button className=" transition  ease-in-out hover:border-black border-2 hover:bg-gray-900 hover:text-white px-4 rounded-full font-semibold pb-0 border-black hover:border-2">
                                        <Link href={route("login")}>Login</Link>
                                    </button>
                                    <button className=" transition ease-in-out ml-1 px-3 rounded-full font-semibold border-white border-2 pb-1 hover:bg-white hover:text-gray-900">
                                        <Link href={route("register")}>
                                            Register
                                        </Link>
                                    </button>
                                </>
                            )}
                        </div>
                        <div
                            className=""
                            data-aos-mirror="false"
                            data-aos="fade-right"
                        >
                            <p className="font-semibold mt-3">
                                Get Help?{" "}
                                <a
                                    href="http://wa.me/6281358787791"
                                    className=" font-semibold underline"
                                >
                                    Contact Us
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className=" md:w-1/5 h-1/2 w-1/6 bg-center bg-cover bg-[url(./img/bgKita.jpg)]"></div>
                </div>
                <div className=" gap-0 italic">
                    <div className="relative mb-0 flex overflow-x-hidden text-black capitalize font-serif">
                        <div className="py-12 animate-marquee whitespace-nowrap">
                            <span className="text-5xl mx-2">
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                Make it easy with us
                            </span>
                        </div>

                        <div className="absolute top-0 py-12  animate-marquee2 whitespace-nowrap">
                            <span className="text-5xl mx-2">
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                Make it easy with us
                            </span>
                        </div>
                    </div>
                    <div className="relative flex overflow-x-hidden text-black capitalize font-serif">
                        <div className="py-12 animate-marqueeReverse whitespace-nowrap">
                            <span className="text-5xl mx-2">
                                {" "}
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                {" "}
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                {" "}
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                {" "}
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                {" "}
                                Make it easy with us
                            </span>
                        </div>

                        <div className="absolute top-0 py-12 animate-marquee2Reverse whitespace-nowrap">
                            <span className="text-5xl mx-2">
                                {" "}
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                {" "}
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                {" "}
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                {" "}
                                Make it easy with us
                            </span>
                            <span className="text-5xl mx-2">
                                {" "}
                                Make it easy with us
                            </span>
                        </div>
                    </div>
                </div>
                <div className=" container flex flex-col items-center justify-center h-screen">
                    <div className=" mt-6 outline h-14 outline-black w-4/12 flex justify-around items-center">
                        <h1 className=" font-medium text-5xl font-serif ">
                            Benefit
                        </h1>
                        <span className=" text-5xl font-serif">+</span>
                    </div>
                    <div className=" mt-6 outline h-14 outline-black w-4/12 flex justify-around items-center">
                        <h1 className=" font-medium text-5xl font-serif">
                            Kemudahan
                        </h1>
                        <span className=" text-5xl font-serif">+</span>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </>
    );
};
export default Home;

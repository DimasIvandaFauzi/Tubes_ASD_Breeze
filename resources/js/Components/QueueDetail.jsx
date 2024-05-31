const QueueDetail = ({user}) => {
    console.log(user)
    const Nomors = [5,4,3,2,1];
    return (
        <div className="flex-col flex md:flex md:flex-row gap-3">
            {Nomors && Nomors.length > 0 ? (
                Nomors.map((Nomor, i) => (
                    <div key={i} className=" w-56 h-auto bg-white border-2 border-black p-3 ">
                        <h1 className=" font-extra-bold">ORDERAN NO.{Nomor}</h1>
                        <span>--------------------</span>
                        <p className="">Created at : dd-mm-yyy</p>
                        <p className=" capitalize">Kasir : {user.name}</p>
                        <span>--------------------</span>
                        <p>List Menu Orderan</p>
                        <table className=" table-auto w-full text-left mt-2">
                            <thead>
                                <tr className="">
                                    <th>Menu</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Penyetan tempe</td>
                                    <td>  2</td>
                                </tr>
                                <tr>
                                    <td>Penyetan Terong</td>
                                    <td>  1</td>
                                </tr>
                                <tr>
                                    <td>Es Teh</td>
                                    <td>  2</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className=" font-serif text-center mt-3">Terima Kasih Telah Berbelanja</p>
                    </div>
                ))
            ) : (
                <span>Belum ada Orderan</span>
            )}
        </div>
    );
};

export default QueueDetail;

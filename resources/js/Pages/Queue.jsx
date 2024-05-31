import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import QueueDetail from "@/Components/QueueDetail";

const queue = ({auth}) => {
    return(
        <AuthenticatedLayout user={auth.user}>

        <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow-md sm:rounded-lg">
                        <h1 className=" font-extra-bold text-3xl mb-3">Antrian Order</h1>
                     <div className="flex justify-center gap-4">
                        <QueueDetail user={auth.user} />
                    </div>
                        <div className="flex justify-end mt-5">
                            <button className="bg-gray-900 px-2 text-white rounded-lg py-1 mr-3">Pesanan Selesai</button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
export default queue;
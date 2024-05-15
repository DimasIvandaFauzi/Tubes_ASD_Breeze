import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
const queue = ({auth}) => {
    return(
        <AuthenticatedLayout user={auth.user}>

        <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <h1 className=" font-bold text-3xl mb-3">Queue</h1>
                     <div className="flex justify-center gap-4">
                        <div className=" w-32 h-32 bg-blue-300">q5</div>
                        <div className=" w-32 h-32 bg-red-300">q4</div>
                        <div className=" w-32 h-32 bg-purple-300">q3</div>
                        <div className=" w-32 h-32 bg-green-300">q2</div>
                        <div className=" w-32 h-32 bg-red-300">q1</div>
                        
                        </div>   
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
export default queue;
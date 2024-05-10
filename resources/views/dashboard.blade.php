<x-app-layout>
    

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 class="text-white mb-6 text-3xl font-extrabold ml-1">Hi, <span x-data="{{ json_encode(['name' => auth()->user()->name]) }}" x-text="name" x-on:profile-updated.window="name = $event.detail.name" class="capitalize"></span></h1>
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 text-gray-900 dark:text-gray-100">
                
                <h1 class="text-white mb-6 ml-4 text-3xl font-extrabold">Menu</h1>
                <div class=" ">
                        <table class="table-auto  w-11/12   ">
                            <thead class="text-left text-2xl">
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>Nama Makanan</th>
                                <th>Harga</th>
                                <th>Qty</th>
                            </tr>
                            </thead>
                            <tbody class=" text-lg ">
                            <!-- row 1 -->
                            <tr class="">
                                <th>1</th>
                                <td>01</td>
                                <td>Penyetan Tempe</td>
                                <td>5000</td>
                                <td><input type="text" class="px-1 py-0 w-10 h-8 bg-transparent focus:border-white focus:ring-white"></td>
                                
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>02</td>
                                <td>Penyetan Tempe dasda</td>
                                <td>50000</td>
                                <td><input type="text" class="px-1 py-0 w-10 h-8 bg-transparent focus:border-white focus:ring-white"></td>
                            </tr>
                            
                            </tbody>
                        </table>
                        <div class="flex justify-end">    
                            <button class="mt-10 mr-5 rounded-full px-3 font-semibold text-lg bg-blue-600">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>

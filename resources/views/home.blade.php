<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Kasir PENS</title>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-900">
    <div class=" bg-gray-900 h-screen md:flex flex-row md:justify-around justify-center items-center" data-aos="fade-up" data-aos-duration="1500">
        <div class=" text-white md:w-2/5 mt-8 w-3/4">
            <h1 class="md:text-5xl text-2xl  font-extrabold ">
            Selamat Datang di Web Kasir Pens!
            </h1>
            <p class="md:mt-3 md:text-xl text-base md:w-5/6">Mempermudah UMKM dalam memanajemen point of sale</p>
            <div class="md:mt-5 text-lg">

                <button class=" transition  ease-in-out border-2 bg-white text-gray-900 px-4 rounded-full font-semibold pb-1 hover:bg-gray-900 hover:border-white hover:text-white hover:border-2"> <a href="{{ route('login') }}">Login</a></button>
                <button class=" transition ease-in-out ml-1 px-3 rounded-full font-semibold border-white border-2 pb-1 hover:bg-white hover:text-gray-900" ><a href="{{ route('register') }}">Register</a></button>
                
            </div>
            <div class="" data-aos-mirror="false" data-aos="fade-right" class="">
                <p class="font-semibold mt-3">Get Help? <a href="http://wa.me/6281358787791" class=" font-semibold underline">Contact Us</a></p>
                
            </div>
        </div>
        <div class=" md:w-1/5 h-1/2 w-1/6 bg-center bg-cover" style="background-image: url('/img/bgKita.jpg');"></div>
    </div>
    <div class=" gap-0 italic">
        <div class="relative mb-0 flex overflow-x-hidden text-white capitalize font-serif">
            <div class="py-12 animate-marquee whitespace-nowrap">
                <span class="text-5xl mx-2">Make it easy with us</span>
                <span class="text-5xl mx-2">Make it easy with us</span>
                <span class="text-5xl mx-2">Make it easy with us</span>
                <span class="text-5xl mx-2">Make it easy with us</span> 
                <span class="text-5xl mx-2">Make it easy with us</span>
            </div>
    
            <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                <span class="text-5xl mx-2">Make it easy with us</span>
                <span class="text-5xl mx-2">Make it easy with us</span>
                <span class="text-5xl mx-2">Make it easy with us</span>
                <span class="text-5xl mx-2">Make it easy with us</span>
                <span class="text-5xl mx-2">Make it easy with us</span>
            </div>
        </div>
        <div class="relative flex overflow-x-hidden text-white capitalize font-serif">
            <div class="py-12 animate-marqueeReverse whitespace-nowrap">
                <span class="text-5xl mx-2"> Make it easy with us</span>
                <span class="text-5xl mx-2"> Make it easy with us</span>
                <span class="text-5xl mx-2"> Make it easy with us</span>
                <span class="text-5xl mx-2"> Make it easy with us</span> 
                <span class="text-5xl mx-2"> Make it easy with us</span>
            </div>
    
            <div class="absolute top-0 py-12 animate-marquee2Reverse whitespace-nowrap">
                <span class="text-5xl mx-2"> Make it easy with us</span>
                <span class="text-5xl mx-2"> Make it easy with us</span>
                <span class="text-5xl mx-2"> Make it easy with us</span>
                <span class="text-5xl mx-2"> Make it easy with us</span>
                <span class="text-5xl mx-2"> Make it easy with us</span>
            </div>
        </div>
    </div>
    <div class=" container">

    </div>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>
</body>
</html>
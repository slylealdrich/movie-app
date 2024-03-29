<script>
    import "../app.css";
</script>

<nav class="grid grid-cols-5 grid-rows-1  bg-black h-16 text-white">
    <a href="/" class="grid justify-center content-center hover:bg-gray-700">
        <h1 class="text-2xl font-bold">
            Home
        </h1>
    </a>
    <a href="/profile" class="grid justify-center content-center font-bold hover:bg-gray-700">
        <h1 class="text-2xl font-bold">
            Profile
        </h1>
    </a>

    <div class="col-start-5 grid justify-around content-center">
        <button class="col-start-5 w-32 h-8 font-bold bg-amber-400 text-black rounded hover:bg-amber-300">
            Sign In
        </button>
    </div>
</nav>

<slot />
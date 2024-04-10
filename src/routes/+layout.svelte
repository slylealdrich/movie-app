<script>
    import "../app.css";
</script>

<nav
    class="h-16 flex items-center justify-around bg-slate-400 text-white font-bold"
>
    <a href="/">
        <h1>Home</h1>
    </a>
    <a href="/profile">
        <h1>Profile</h1>
    </a>
    <a href="/movies">
        <h1>Movies</h1>
    </a>
    <a href="/search">
        <h1>Search</h1>
    </a>
</nav>

<slot />

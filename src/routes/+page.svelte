<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import About from '$lib/components/About.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Blog from '$lib/components/Blog.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
    <title>Ahmed Bashir - Full Stack Developer</title>
    <meta name="description" content="Ahmed Bashir - Full Stack Developer specializing in Python and JavaScript. Partner at Pineal Developers." />
</svelte:head>

<Navbar />
<main>
    <Hero />
    <About />
    <Projects />
    <Blog />
    <Contact />
</main>
<Footer />
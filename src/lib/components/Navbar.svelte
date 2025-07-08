<script>
    import { language } from '$lib/stores/language.svelte.js';
    import { t } from '$lib/translations.js';
    import { onMount } from 'svelte';

    let isMenuOpen = $state(false);
    let scrolled = $state(false);
    let activeSection = $state('home');

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 50;
            
            const sections = ['home', 'about', 'projects', 'blog', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        activeSection = section;
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        isMenuOpen = false;
    };
</script>

<nav class="fixed top-0 w-full z-50 transition-all duration-300 {scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16 md:h-20">
            <!-- Logo -->
            <div class="flex items-center">
                <h2 class="text-2xl font-bold">
                    Ahmed<span style="color: rgb(var(--color-primary));">.</span>
                </h2>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
                <ul class="flex items-center space-x-6">
                    {#each ['home', 'about', 'projects', 'blog', 'contact'] as section}
                        <li>
                            <button
                                onclick={() => scrollToSection(section)}
                                class="nav-link {activeSection === section ? '' : 'text-gray-700 dark:text-gray-300'} transition-colors duration-300 font-medium"
                                style="{activeSection === section ? 'color: rgb(var(--color-primary));' : ''}"
                                onmouseover={(e) => e.target.style.color = 'rgb(var(--color-primary))'}
                                onmouseout={(e) => e.target.style.color = activeSection === section ? 'rgb(var(--color-primary))' : ''}
                            >
                                {t(`nav.${section}`, language.current)}
                            </button>
                        </li>
                    {/each}
                </ul>

                <!-- Language Toggle -->
                <button
                    onclick={() => language.toggle()}
                    class="px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
                    style="background-color: rgb(var(--color-primary) / 0.1); color: rgb(var(--color-primary));"
                    onmouseover={(e) => e.target.style.backgroundColor = 'rgb(var(--color-primary) / 0.2)'}
                    onmouseout={(e) => e.target.style.backgroundColor = 'rgb(var(--color-primary) / 0.1)'}
                >
                    {language.current === 'en' ? 'AR' : 'EN'}
                </button>
            </div>

            <!-- Mobile Menu Button -->
            <button
                onclick={toggleMenu}
                class="md:hidden relative w-10 h-10 flex items-center justify-center"
            >
                <span class="sr-only">Toggle menu</span>
                <div class="w-6 flex flex-col gap-1.5">
                    <span class="block h-0.5 w-full bg-gray-700 dark:bg-gray-300 transition-all duration-300 {isMenuOpen ? 'rotate-45 translate-y-2' : ''}"></span>
                    <span class="block h-0.5 w-full bg-gray-700 dark:bg-gray-300 transition-all duration-300 {isMenuOpen ? 'opacity-0' : ''}"></span>
                    <span class="block h-0.5 w-full bg-gray-700 dark:bg-gray-300 transition-all duration-300 {isMenuOpen ? '-rotate-45 -translate-y-2' : ''}"></span>
                </div>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden transition-all duration-300 overflow-hidden {isMenuOpen ? 'max-h-96' : 'max-h-0'}">
            <ul class="py-4 space-y-2">
                {#each ['home', 'about', 'projects', 'blog', 'contact'] as section}
                    <li>
                        <button
                            onclick={() => scrollToSection(section)}
                            class="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 transition-colors duration-300"
                            onmouseover={e => { 
                                e.target.style.color = 'rgb(var(--color-primary))'; 
                                e.target.style.backgroundColor = 'rgb(var(--color-primary) / 0.05)'; 
                            }}
                            onmouseout={e => { 
                                e.target.style.color = ''; 
                                e.target.style.backgroundColor = 'transparent'; 
                            }}
                        >
                            {t(`nav.${section}`, language.current)}
                        </button>
                    </li>
                {/each}
                <li>
                    <button
                        onclick={() => language.toggle()}
                        class="block w-full text-left px-4 py-2 font-medium"
                        style="color: rgb(var(--color-primary));"
                    >
                        {language.current === 'en' ? 'العربية' : 'English'}
                    </button>
                </li>
            </ul>
        </div>
    </div>
</nav>
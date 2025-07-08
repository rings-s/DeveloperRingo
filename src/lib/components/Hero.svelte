<script>
    import { language } from '$lib/stores/language.svelte.js';
    import { t } from '$lib/translations.js';
    import { onMount } from 'svelte';

    let mounted = $state(false);
    
    onMount(() => {
        mounted = true;
    });
</script>

<section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 hero-gradient"></div>
    <div class="absolute top-20 -left-20 w-72 h-72 rounded-full blur-3xl animate-pulse-slow" style="background-color: rgb(var(--color-primary) / 0.2);"></div>
    <div class="absolute bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style="background-color: rgb(var(--color-secondary) / 0.2); animation-delay: 2s;"></div>
    
    <div class="container mx-auto px-4 py-20 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Text Content -->
            <div class="text-center lg:text-{language.dir === 'rtl' ? 'right' : 'left'} space-y-6">
                <div class="space-y-2 {mounted ? 'animate-fade-in' : 'opacity-0'}">
                    <h3 class="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
                        {t('hero.greeting', language.current)}
                    </h3>
                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">
                        Ahmed Bashir
                    </h1>
                    <h2 class="text-2xl md:text-3xl lg:text-4xl">
                        <span class="gradient-text font-bold">
                            {t('hero.role', language.current)}
                        </span>
                    </h2>
                </div>
                
                <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 {mounted ? 'animate-fade-in animation-delay-200' : 'opacity-0'}">
                    {t('hero.description', language.current)}
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-{language.dir === 'rtl' ? 'end' : 'start'} {mounted ? 'animate-fade-in animation-delay-400' : 'opacity-0'}">
                    <a href="#projects" class="px-8 py-3 text-white rounded-xl transform hover:scale-105 transition-all duration-300 font-medium" style="background-color: rgb(var(--color-primary));" onmouseover={(e) => e.target.style.backgroundColor = 'rgb(var(--color-primary) / 0.9)'} onmouseout={(e) => e.target.style.backgroundColor = 'rgb(var(--color-primary))'}>
                        {t('hero.viewProjects', language.current)}
                    </a>
                    <a href="#contact" class="px-8 py-3 border-2 rounded-xl transform hover:scale-105 transition-all duration-300 font-medium" style="border-color: rgb(var(--color-primary)); color: rgb(var(--color-primary));" onmouseover={(e) => e.target.style.backgroundColor = 'rgb(var(--color-primary) / 0.1)'} onmouseout={(e) => e.target.style.backgroundColor = 'transparent'}>
                        {t('hero.getInTouch', language.current)}
                    </a>
                </div>
                
                <div class="flex gap-4 justify-center lg:justify-{language.dir === 'rtl' ? 'end' : 'start'} {mounted ? 'animate-fade-in animation-delay-600' : 'opacity-0'}">
                    <a href="https://github.com" target="_blank" class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300" onmouseover={(e) => { e.target.style.backgroundColor = 'rgb(var(--color-primary))'; e.target.style.color = 'white'; }} onmouseout={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = ''; }}>
                        <i class="fab fa-github text-xl"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300" onmouseover={(e) => { e.target.style.backgroundColor = 'rgb(var(--color-primary))'; e.target.style.color = 'white'; }} onmouseout={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = ''; }}>
                        <i class="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300" onmouseover={(e) => { e.target.style.backgroundColor = 'rgb(var(--color-primary))'; e.target.style.color = 'white'; }} onmouseout={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = ''; }}>
                        <i class="fab fa-twitter text-xl"></i>
                    </a>
                </div>
            </div>
            
            <!-- Image/Illustration -->
            <div class="relative {mounted ? 'animate-fade-in animation-delay-200' : 'opacity-0'}">
                <div class="relative z-10 animate-float">
                    <div class="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full p-1" style="background: linear-gradient(to bottom right, rgb(var(--color-primary)), rgb(var(--color-secondary)));">
                        <div class="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                            <span class="text-6xl md:text-7xl lg:text-8xl font-bold gradient-text">AB</span>
                        </div>
                    </div>
                </div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full blur-3xl" style="background: linear-gradient(to bottom right, rgb(var(--color-primary) / 0.2), rgb(var(--color-secondary) / 0.2));"></div>
            </div>
        </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-center animate-bounce">
        <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
        <p class="text-sm text-gray-500 mt-2">{t('hero.scrollDown', language.current)}</p>
    </div>
</section>

<style>
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-fade-in {
        animation: fade-in 0.8s ease-out forwards;
    }
    
    .animation-delay-200 {
        animation-delay: 0.2s;
    }
    
    .animation-delay-400 {
        animation-delay: 0.4s;
    }
    
    .animation-delay-600 {
        animation-delay: 0.6s;
    }
</style>
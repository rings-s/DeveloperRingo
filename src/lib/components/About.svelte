<script>
    import { language } from '$lib/stores/language.svelte.js';
    import { t } from '$lib/translations.js';

    const skills = [
        'Python', 'JavaScript', 'React', 'Svelte', 'Node.js',
        'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Docker'
    ];
</script>

<section id="about" class="py-20 bg-gray-50 dark:bg-gray-900/50">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{t('about.title', language.current)}</h2>
            <p class="text-gray-600 dark:text-gray-400">{t('about.subtitle', language.current)}</p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Image -->
            <div class="relative order-2 lg:order-1">
                <div class="relative z-10">
                    <div class="w-64 h-80 md:w-80 md:h-96 mx-auto rounded-2xl p-1" style="background: linear-gradient(to bottom right, rgb(var(--color-primary)), rgb(var(--color-secondary)));">
                        <div class="w-full h-full rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center">
                            <span class="text-5xl md:text-6xl font-bold gradient-text">AB</span>
                        </div>
                    </div>
                    <div class="absolute -bottom-6 {language.dir === 'rtl' ? '-left-6' : '-right-6'} bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                        <h3 class="text-3xl font-bold" style="color: rgb(var(--color-primary));">5+</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{t('about.yearsExperience', language.current)}</p>
                    </div>
                </div>
            </div>
            
            <!-- Content -->
            <div class="space-y-6 order-1 lg:order-2">
                <h3 class="text-2xl font-bold">{t('about.intro', language.current)}</h3>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t('about.description', language.current)}
                </p>
                
                <!-- Contact Info -->
                <div class="grid gap-4">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background-color: rgb(var(--color-primary) / 0.1);">
                            <i class="fas fa-envelope" style="color: rgb(var(--color-primary));"></i>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">{t('about.email', language.current)}</p>
                            <p class="font-medium">rings9619@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background-color: rgb(var(--color-primary) / 0.1);">
                            <i class="fas fa-phone" style="color: rgb(var(--color-primary));"></i>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">{t('about.phone', language.current)}</p>
                            <p class="font-medium ltr-only">+966 507 441 209</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background-color: rgb(var(--color-primary) / 0.1);">
                            <i class="fas fa-building" style="color: rgb(var(--color-primary));"></i>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">{t('about.company', language.current)}</p>
                            <p class="font-medium">Pineal Developers</p>
                        </div>
                    </div>
                </div>
                
                <!-- Skills -->
                <div>
                    <h4 class="text-lg font-bold mb-4">{t('about.techStack', language.current)}</h4>
                    <div class="flex flex-wrap gap-2">
                        {#each skills as skill}
                            <span class="px-4 py-2 rounded-lg text-sm font-medium" style="background-color: rgb(var(--color-primary) / 0.1); color: rgb(var(--color-primary));">
                                {skill}
                            </span>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
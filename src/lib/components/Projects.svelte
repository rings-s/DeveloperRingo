<script>
    import { language } from '$lib/stores/language.svelte.js';
    import { t } from '$lib/translations.js';
</script>

<section id="projects" class="py-20">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{t('projects.title', language.current)}</h2>
            <p class="text-gray-600 dark:text-gray-400">{t('projects.subtitle', language.current)}</p>
        </div>
        
        <div class="max-w-2xl mx-auto">
            <div class="relative rounded-3xl p-12 md:p-16 text-center" style="background: linear-gradient(to bottom right, rgb(var(--color-primary) / 0.05), rgb(var(--color-secondary) / 0.05));">
                <div class="absolute top-0 left-0 w-full h-full rounded-3xl blur-3xl -z-10" style="background: linear-gradient(to bottom right, rgb(var(--color-primary) / 0.1), rgb(var(--color-secondary) / 0.1));"></div>
                
                <i class="fas fa-rocket text-6xl mb-6" style="color: rgb(var(--color-primary));"></i>
                <h3 class="text-2xl md:text-3xl font-bold mb-4">{t('projects.comingSoon', language.current)}</h3>
                <p class="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
                    {t('projects.comingSoonDesc', language.current)}
                </p>
                
                <div class="loading-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</section>
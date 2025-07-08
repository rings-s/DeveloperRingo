<script>
    import { language } from '$lib/stores/language.svelte.js';
    import { t } from '$lib/translations.js';
    
    const blogPosts = [
        {
            id: 'planning',
            category: 'guide',
            image: 'https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=Planning',
            color: 'bg-indigo-600'
        },
        {
            id: 'communication',
            category: 'tips',
            image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Communication',
            color: 'bg-green-500'
        },
        {
            id: 'timeline',
            category: 'process',
            image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Timeline',
            color: 'bg-amber-500'
        }
    ];
</script>

<section id="blog" class="py-20 bg-gray-50 dark:bg-gray-900/50">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{t('blog.title', language.current)}</h2>
            <p class="text-gray-600 dark:text-gray-400">{t('blog.subtitle', language.current)}</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each blogPosts as post}
                <article class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="relative h-48 overflow-hidden">
                        <img src={post.image} alt={t(`blog.posts.${post.id}.title`, language.current)} class="w-full h-full object-cover">
                        <div class="absolute top-4 {language.dir === 'rtl' ? 'left-4' : 'right-4'} {post.color} text-white px-3 py-1 rounded-full text-sm">
                            {t(`blog.${post.category}`, language.current)}
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-3">{t(`blog.posts.${post.id}.title`, language.current)}</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            {t(`blog.posts.${post.id}.content`, language.current)}
                        </p>
                        <a href="#" class="inline-flex items-center gap-2 hover:gap-3 transition-all duration-300" style="color: rgb(var(--color-primary));">
                            {t('blog.readMore', language.current)}
                            <i class="fas fa-arrow-{language.dir === 'rtl' ? 'left' : 'right'}"></i>
                        </a>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>
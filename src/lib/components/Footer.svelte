<script>
    import { language } from '$lib/stores/language.svelte.js';
    import { t } from '$lib/translations.js';
</script>

<footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
        <div class="flex flex-col items-center space-y-6">
            <div class="text-center">
                <h2 class="text-2xl font-bold mb-2">
                    Ahmed<span style="color: rgb(var(--color-primary));">.</span>
                </h2>
                <p class="text-gray-400">{t('footer.role', language.current)}</p>
            </div>
            
            <div class="flex gap-4">
                <a href="https://github.com" target="_blank" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-300" onmouseover={(e) => e.target.style.backgroundColor = 'rgb(var(--color-primary))'} onmouseout={(e) => e.target.style.backgroundColor = 'rgb(31 41 55)'}>
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-300" onmouseover={(e) => e.target.style.backgroundColor = 'rgb(var(--color-primary))'} onmouseout={(e) => e.target.style.backgroundColor = 'rgb(31 41 55)'}>
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com" target="_blank" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-300" onmouseover={(e) => e.target.style.backgroundColor = 'rgb(var(--color-primary))'} onmouseout={(e) => e.target.style.backgroundColor = 'rgb(31 41 55)'}>
                    <i class="fab fa-twitter"></i>
                </a>
            </div>
            
            <div class="text-center text-gray-400">
                <p>{t('footer.rights', language.current)}</p>
            </div>
        </div>
    </div>
</footer>
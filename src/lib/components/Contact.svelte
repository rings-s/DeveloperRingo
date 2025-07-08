<script>
    import { language } from '$lib/stores/language.svelte.js';
    import { t } from '$lib/translations.js';
    import emailjs from '@emailjs/browser';
    import { onMount } from 'svelte';
    
    let form = $state(null);
    let sending = $state(false);
    let message = $state({ text: '', type: '' });
    
    onMount(() => {
        // Initialize EmailJS with your user ID
        emailjs.init('YOUR_EMAILJS_USER_ID'); // Replace with your EmailJS user ID
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        sending = true;
        message = { text: '', type: '' };
        
        try {
            await emailjs.sendForm(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                form,
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
            );
            
            message = { text: t('contact.form.success', language.current), type: 'success' };
            form.reset();
        } catch (error) {
            message = { text: t('contact.form.error', language.current), type: 'error' };
        } finally {
            sending = false;
        }
    };
</script>

<section id="contact" class="py-20">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{t('contact.title', language.current)}</h2>
            <p class="text-gray-600 dark:text-gray-400">{t('contact.subtitle', language.current)}</p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <!-- Contact Info -->
            <div class="space-y-6">
                <h3 class="text-2xl font-bold">{t('contact.heading', language.current)}</h3>
                <p class="text-gray-600 dark:text-gray-400">
                    {t('contact.description', language.current)}
                </p>
                
                <div class="space-y-4">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background-color: rgb(var(--color-primary) / 0.1);">
                            <i class="fas fa-envelope" style="color: rgb(var(--color-primary));"></i>
                        </div>
                        <div>
                            <p class="font-medium">{t('contact.email', language.current)}</p>
                            <p class="text-gray-600 dark:text-gray-400">rings9619@gmail.com</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background-color: rgb(var(--color-primary) / 0.1);">
                            <i class="fas fa-phone" style="color: rgb(var(--color-primary));"></i>
                        </div>
                        <div>
                            <p class="font-medium">{t('contact.phone', language.current)}</p>
                            <p class="text-gray-600 dark:text-gray-400 ltr-only">+966 507 441 209</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background-color: rgb(var(--color-primary) / 0.1);">
                            <i class="fas fa-map-marker-alt" style="color: rgb(var(--color-primary));"></i>
                        </div>
                        <div>
                            <p class="font-medium">{t('contact.location', language.current)}</p>
                            <p class="text-gray-600 dark:text-gray-400">{t('contact.availableWorldwide', language.current)}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Contact Form -->
            <form bind:this={form} onsubmit={handleSubmit} class="space-y-6">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder={t('contact.form.name', language.current)}
                        required
                        class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
                    />
                </div>
                
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder={t('contact.form.email', language.current)}
                        required
                        class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
                    />
                </div>
                
                <div>
                    <input
                        type="text"
                        name="subject"
                        placeholder={t('contact.form.subject', language.current)}
                        required
                        class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent"
                    />
                </div>
                
                <div>
                    <textarea
                        name="message"
                        rows="5"
                        placeholder={t('contact.form.message', language.current)}
                        required
                        class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent resize-none"
                    ></textarea>
                </div>
                
                <button
                    type="submit"
                    disabled={sending}
                    class="w-full px-8 py-3 text-white rounded-lg transform hover:scale-[1.02] transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    style="background-color: rgb(var(--color-primary));"
                    onmouseover={(e) => e.target.style.backgroundColor = 'rgb(var(--color-primary) / 0.9)'}
                    onmouseout={(e) => e.target.style.backgroundColor = 'rgb(var(--color-primary))'}
                >
                    {sending ? t('contact.form.sending', language.current) : t('contact.form.send', language.current)}
                </button>
                
                {#if message.text}
                    <p class="text-center {message.type === 'success' ? 'text-green-500' : 'text-red-500'}">
                        {message.text}
                    </p>
                {/if}
            </form>
        </div>
    </div>
</section>
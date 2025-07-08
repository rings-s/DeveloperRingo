import { browser } from '$app/environment';

function createLanguageStore() {
    let state = $state({ 
        current: 'en',
        dir: 'ltr'
    });

    if (browser) {
        const saved = localStorage.getItem('language');
        if (saved === 'ar') {
            state.current = 'ar';
            state.dir = 'rtl';
            document.documentElement.lang = 'ar';
            document.documentElement.dir = 'rtl';
        }
    }

    return {
        get current() { return state.current; },
        get dir() { return state.dir; },
        toggle() {
            state.current = state.current === 'en' ? 'ar' : 'en';
            state.dir = state.current === 'ar' ? 'rtl' : 'ltr';
            
            if (browser) {
                localStorage.setItem('language', state.current);
                document.documentElement.lang = state.current;
                document.documentElement.dir = state.dir;
            }
        }
    };
}

export const language = createLanguageStore();
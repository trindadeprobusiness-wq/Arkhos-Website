/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                float: 'float 3s ease-in-out infinite',
                marquee: 'marquee var(--duration, 30s) linear infinite',
                'marquee-reverse': 'marquee var(--duration, 30s) linear infinite reverse',
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                marquee: {
                    to: { transform: 'translateX(-50%)' }
                },
            },
            colors: {
                background: {
                    primary: '#040404',
                    secondary: '#1F1F1F',
                },
                accent: {
                    DEFAULT: '#00C896',
                    hover: '#1BE2AC',
                },
                text: {
                    primary: '#F1F1F1',
                    secondary: 'rgba(241, 241, 241, 0.6)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Sora', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

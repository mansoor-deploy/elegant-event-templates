
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for our templates
				luxe: {
					burgundy: '#721121',
					emerald: '#0F513A',
					gold: '#D4AF37',
					cream: '#F9F1E6',
					light: '#F7E4D5'
				},
				vintage: {
					sepia: '#704214',
					cream: '#F5F0E6',
					blue: '#8CA3BB',
					tan: '#D3B88C',
					paper: '#F4E9D9'
				},
				celestial: {
					blue: '#0B4F79',
					silver: '#D7D7D7',
					purple: '#9B87F5',
					navy: '#162447',
					lightblue: '#C1E8FF'
				},
				mystic: {
					purple: '#3D2C54',
					silver: '#E0E0E0',
					midnight: '#0B1E57',
					lavender: '#9B8DE0',
					mist: '#E6E6FA'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						boxShadow: '0 0 20px rgba(255, 215, 0, 0.7)'
					},
					'50%': {
						opacity: '0.7',
						boxShadow: '0 0 40px rgba(255, 215, 0, 0.9)'
					}
				},
				'grain': {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'10%': { transform: 'translate(-5%, -10%)' },
					'30%': { transform: 'translate(3%, -15%)' },
					'50%': { transform: 'translate(12%, 9%)' },
					'70%': { transform: 'translate(9%, 4%)' },
					'90%': { transform: 'translate(-1%, 7%)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'twinkle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.3' }
				},
				'particle-flow': {
					'0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateY(-100px) translateX(20px)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'shimmer': 'shimmer 3s infinite linear',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s infinite',
				'grain': 'grain 1.5s steps(10) infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'twinkle': 'twinkle 2s ease-in-out infinite',
				'particle-flow': 'particle-flow 3s ease-out infinite'
			},
			backgroundImage: {
				'gold-gradient': 'linear-gradient(45deg, #D4AF37 0%, #F9F295 50%, #D4AF37 100%)',
				'celestial-gradient': 'linear-gradient(to right, #0B4F79, #9B87F5)',
				'vintage-paper': "url('/images/vintage-paper.png')"
			},
			backdropBlur: {
				xs: '2px'
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding'
			},
			transitionTimingFunction: {
				'smooth-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

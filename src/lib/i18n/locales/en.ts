import type { Dictionary } from '../types';

const en = {
	shell: {
		today: 'Today',
		mealPlan: 'Meal plan',
		recipes: 'Recipes',
		kitchen: 'Kitchen',
		pantry: 'Pantry',
		navigation: 'Main navigation',
		accountMenu: 'Account menu',
		account: 'Account',
		household: 'Household',
		preferences: 'Preferences',
		notifications: 'Notifications',
		units: 'Units',
		signOut: 'Sign out',
		comingSoon: 'Coming soon'
	},
	auth: {
		changeEmailBtn: 'Change email',
		codeInputLbl: 'Verification code',
		codeSent: (email) => `We sent a six-digit code to ${email}.`,
		description: 'Sign in with Apple, Google, or email',
		emailInputLbl: 'Email',
		genericError: 'Something went wrong. Please try again.',
		oauthButton: (provider) => `Continue with ${provider}`,
		requestCodeBtn: 'Send code',
		resendCodeBtn: 'Send a new code',
		securityPhrase: (phrase) => `Security phrase: ${phrase}`,
		separator: 'or continue with',
		title: 'Welcome, chef',
		verifyCodeBtn: 'Verify code'
	},
	language: {
		label: 'Language',
		options: {
			en: 'English',
			cs: 'Czech'
		}
	},
	toggleTheme: 'Toggle theme'
} satisfies Dictionary;

export default en;

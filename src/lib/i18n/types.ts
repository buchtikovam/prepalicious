export const SUPPORTED_LOCALES = ['en', 'cs'] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export interface Dictionary {
	shell: {
		today: string;
		mealPlan: string;
		recipes: string;
		kitchen: string;
		pantry: string;
		navigation: string;
		accountMenu: string;
		account: string;
		household: string;
		preferences: string;
		notifications: string;
		units: string;
		signOut: string;
		comingSoon: string;
	};

	auth: {
		changeEmailBtn: string;
		codeInputLbl: string;
		codeSent: (email: string) => string;
		description: string;
		emailInputLbl: string;
		genericError: string;
		oauthButton: (provider: string) => string;
		requestCodeBtn: string;
		resendCodeBtn: string;
		securityPhrase: (phrase: string) => string;
		separator: string;
		title: string;
		verifyCodeBtn: string;
	};
	language: {
		label: string;
		options: Record<SupportedLocale, string>;
	};
	toggleTheme: string;
}

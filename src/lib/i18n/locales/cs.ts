import type { Dictionary } from '../types';

const cs = {
	shell: {
		today: 'Dnes',
		mealPlan: 'Jídelní plán',
		recipes: 'Recepty',
		kitchen: 'Kuchyně',
		pantry: 'Spíž',
		navigation: 'Hlavní navigace',
		accountMenu: 'Menu účtu',
		account: 'Účet',
		household: 'Domácnost',
		preferences: 'Předvolby',
		notifications: 'Oznámení',
		units: 'Jednotky',
		signOut: 'Odhlásit se',
		comingSoon: 'Již brzy'
	},
	auth: {
		changeEmailBtn: 'Změnit e-mail',
		codeInputLbl: 'Ověřovací kód',
		codeSent: (email) => `Poslali jsme šestimístný kód na ${email}.`,
		description: 'Přihlas se přes Apple, Google nebo e-mail',
		emailInputLbl: 'E-mail',
		genericError: 'Něco se pokazilo. Zkus to prosím znovu.',
		oauthButton: (provider) => `Pokračuj s ${provider}`,
		requestCodeBtn: 'Poslat kód',
		resendCodeBtn: 'Poslat nový kód',
		securityPhrase: (phrase) => `Bezpečnostní fráze: ${phrase}`,
		separator: 'nebo pokračuj s',
		title: 'Vítej, kuchaři',
		verifyCodeBtn: 'Ověřit kód'
	},
	language: {
		label: 'Jazyk',
		options: {
			en: 'Angličtina',
			cs: 'Čeština'
		}
	},
	toggleTheme: 'Přepnout motiv'
} satisfies Dictionary;

export default cs;

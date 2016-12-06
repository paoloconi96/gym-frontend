import { Injectable } from '@angular/core';

@Injectable()
export class TranslatorService {

	private static lang = 'it';
	private static backupLang = 'it';
	
	translator(text:string) {
		if(typeof(TranslatorService.translation[TranslatorService.lang][text]) != 'undefined') {
			return TranslatorService.translation[TranslatorService.lang][text];
		} else if(typeof(TranslatorService.translation[TranslatorService.backupLang][text]) != 'undefined') {
			return TranslatorService.translation[TranslatorService.backupLang][text];
		} else {
			return 'String not translated yet';
		}
	}

	private static translation = {
		it: {
			'': '',
			'Inital setup': 'Configurazione iniziale',
			'Nome': 'Nome',
			'Invia': 'Invia',
			'Email': 'Email',
			'Password': 'Password',
			'Utente già registrato': 'Utente già registrato',
		}
	}
}
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
			'Si è verificato un errore, riprova più tardi': 'Si è verificato un errore, riprova più tardi',
			'La mia scheda': 'La mia scheda',
			'Le mie schede': 'Le mie schede',
			'Peso / altezza': 'Peso / altezza',
			'Nuovo esercizio': 'Nuovo esercizio',
			'Aggiunta esercizio': 'Aggiunta esercizio',
			'Tipo di esercizio': 'Tipo di esercizio',
			'A tempo': 'A tempo',
			'A ripetizioni': 'A ripetizioni',
			'Titolo': 'Titolo',
			'Durata': 'Durata',
			'Passaggio successivo': 'Passaggio successivo',
			'Peso': 'Peso',
			'Ripetizioni': 'Ripetizioni',
			'N° Serie': 'N°Serie',
			'Nuova scheda': 'Nuova scheda',
			'Aggiungi scheda': 'Aggiungi scheda'
		}
	}
}
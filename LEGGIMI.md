# Statistiche pallavolo: versione app per Android

Questa cartella contiene l'app completa. Una volta messa online con un indirizzo HTTPS, si installa dal telefono con Chrome: compare l'icona sulla schermata Home, si apre a tutto schermo e funziona anche senza rete.

## File

- `index.html`: l'app (contatori, totali, salvataggio CSV)
- `manifest.webmanifest`: nome, colori e icone dell'app
- `sw.js`: permette di usarla senza rete
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`: icone ricavate dal logo

## 1. Metterla online (una volta sola)

L'app deve stare su un indirizzo HTTPS: aprendo `index.html` direttamente dal telefono non si installa e non funziona offline. Il modo gratuito più semplice è GitHub Pages:

1. Crea un repository su GitHub (anche pubblico).
2. Carica tutti i file di questa cartella nella radice del repository.
3. Vai in Settings, poi Pages. Scegli il ramo `main` e la cartella `/ (root)`, poi salva.
4. Dopo un minuto circa l'app è raggiungibile a un indirizzo del tipo `https://nomeutente.github.io/nome-repository/`.

Va bene anche qualsiasi altro spazio web con HTTPS (un sito della società, Netlify, ecc.): basta copiare i file nella stessa cartella.

Se il repository è pubblico, chiunque con l'indirizzo può aprire l'app e vedere il logo. I dati delle partite non sono mai online: restano sul telefono.

## 2. Installarla sul telefono

1. Apri l'indirizzo con Chrome su Android.
2. Tocca il menu (i tre puntini in alto a destra) e scegli "Installa app" (oppure "Aggiungi a schermata Home").
3. Apri l'app dall'icona. La prima volta serve la rete: da quel momento funziona anche in palestra senza connessione.

## 3. Uso in partita

- Scrivi il nome della partita nel campo "Partita".
- Tocca il giocatore e poi l'azione. "Annulla ultima" corregge l'ultimo tocco.
- A fine partita tocca "Salva file CSV": il file prende il nome della partita e finisce nella cartella Download del telefono. Si apre in Excel o Fogli Google. Poi puoi usare "Azzera partita" per la successiva.

I dati sono salvati nell'app sul telefono. Se disinstalli l'app o cancelli i dati di Chrome, si perdono: salva sempre il CSV a fine partita.

## 4. Aggiornare l'app

Se cambi `index.html`, apri `sw.js` e aumenta il numero nella prima riga (`statistiche-pallavolo-v1` diventa `v2`). Carica i file aggiornati: al prossimo avvio con rete i telefoni scaricano la nuova versione. Nomi dei giocatori e statistiche non vengono toccati.

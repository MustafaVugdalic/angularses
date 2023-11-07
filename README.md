# Angular

Framework → Insieme di strumenti che permettono lo sviluppo di app

Framework difficile e molto rigido
Framework che consente allo sviluppatore la creazione di applicazioni molto complesse

Sito del framework → Angular.io

Utilizza node.js → runtime che permette di utilizzare javascript come programma di codificazione         terminale:  'node --version'
Node Package Management (NPM) → Permette di aggiungere al progetto delle librerie prese dall’internet senza sapere l’indirizzo fisico del server
Si installa automaticamnete con node.js.    terminale:  'npm --version'

Linguaggio compilato
Linguaggio che prevede prima dlell’esecuzione che il codice detto codice sorgenete venga tradotto e compilato in linguaggio macchina

Installare Angular -da terminale-
'npm install -g @angular/cli'

Aggiornare npm
'npm install -g npm@((versione)10.1.0)'

Angular --> da terminale si dice ng
Aiuto per comandi Angular --> : 'ng --help'

Bisogna che la directori vanda nel progetto
'cd (nome cartella)/'

'ng build' è il comando per creare il prodotto finale per l'utente-

Angular serve solo per realizzarla l'applicazione
Alla fine si fa il build. Ciò trasforma tutto il progetto in 5 file.
Index.html
style.css
Alri 3 o 4 file JS
A eccezione di una cartella: assets
Quindi tutto ciò che non si vuole perdere va nella cartella assets


Component è l'elemento base di angular.
quando voglio inserirlo, iserisco nel punto desidearto il suo selettore.
Ha 3 elementi:
- Il file ts (Typesript)  -->  Contiene la business logic (che calcoli fa) dell'applicazione
                                La business logic va scritta tutta nella classe
                                Li ho una variabile.
                                Nel mio template posso utilizzare solo glia attributi della classe

- Il file html --> Definisce il template
- Il file css --> Definisce lo stile del componente
- Il file .spec.ts --> contiene test automatici


Fogli di stile css
Io posso avere più fogli style.
Il secondo ridefinisce il primo e così via. L'ultimo stile è quello che riamne.

*{
    (Applicare dei parametri a tutta l'applicazione)
}


Catella app
Qui si trovano tutti i vari oggetti che angular crea l'applicazione.
Sono presenti alcuni file che iniziano tutte con app.



Decoratore --> Va a specificare delle cose

'ng serve' (Nella cartella dell'applicazione ('cd nomeApplicazione/'))--> Esegue il build dell'

Se io modifico durante il build e salvo la build cambia

ctrl+c per tornare a poter scrivere dal terminale


'ng build' compila l'applicazione e ottiene il file che sono l'applicazione finale in una cartella chiamamta dist




# Data and event binding

Il comando per aggiungere un nuovo componenete è  
'ng generate component (nome componente)'

Ogni volta che creiamo un nuovo componente si va a creare una nuova cartella

Binding --> Puo avvenre in due modi  
one way binding --> se cambio il valore della varabil ts  (da ts a html)  
two way binding --> se cambio la variabile in ts cambio il valore della v nella pagina (da ts a html e viceversa)




Apice per js e virgolette per html



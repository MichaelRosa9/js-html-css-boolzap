/* 
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
*/

var app = new Vue({
  el: '#app',
  data: {
    search:'',  // uso search per la sezione input dei contatti per poter filtrare il contatto che sto cercando
    
    text:'',
    index_dir:'0',  //uso index_dir come variabile per mostrare i messaggi di uno specifico oggetto. cliccando l'elemento li dentro l'ul "contact-list" prendo il numero della posizione e lo assegno al ciclo for dentro i messaggi
    user:{
      name:'Nome utente',
      avatar: '_io',      
    },    
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ]
  },
  methods: {
    addImageToAvatar(image){  //funzione che mi aggiunge la proprieta avatar del singolo oggetto dei contact dentro la stringa del source dell'immagine
      return `img/avatar${image}.jpg`;      
    },
    sendText(str, index){  //funzione che viene richiamato in riga 161 dell'html dove appena premao invio , il testo dell'input viene pushato nell'array messages dentro l'oggetto user
      const message = {
        date: '10/01/2020 15:50:00',
        text: '',
        status: 'sent'
      }
      message.text = str;
      this.contacts[index].messages.push(message);
      this.text = ''
     /*  const recieve_message = {
        date:
      
      } */
      /* setTimeout(() => {
        contacts[index_dir].messages.push()
      }, 2000); */
    }

  },computed: {
    filterContacts(){ //filtro per i contatti nella sezione aside.left dell'html
      return this.contacts.filter((element) => {
        return element.name.toLowerCase().includes(this.search.toLowerCase());
      })
    }
  }
  
});
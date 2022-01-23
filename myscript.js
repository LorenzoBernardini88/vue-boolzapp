let app = new Vue({
    el : '#container',

    data:{
        valoreSearch:'',
        valoreTesto: '',
        answer : null,
        block: false,
        corrente: -1,
        correnteDropDown:-1,
        
        contacts: [
            {
                name: 'Michele',
                avatar: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043232-avatar-batman-comics-hero_113278.png',
                visible: false,
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
                avatar: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043274-avatar-einstein-professor-scientist_113259.png',
                visible: false,
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
                avatar: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043262-avatar-man-muslim_113273.png',
                visible: false,
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
                avatar: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043251-avatar-female-girl-woman_113291.png',
                visible: false,
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
    methods:{
        //funzione che assegna le classe css al box_message in base allo 'status' del messaggio
        viewMessage:function(indice){
            if(this.contacts[this.corrente].messages[indice].status == 'received'){
                return 'box_message_received'
            }else{
                return 'box_message_sent'
            }
        },
        //funzione che assegna valore 'indice alla variabile d'appoggio 'corrente'
        viewChat: function(indice){
            this.corrente = indice;
            this.correnteDropDown = null;
        },
        //funzione che crea messaggio di risposta.
        answerMesssage: function(corrente){
            
            let objAnswer =
            {
                date : dayjs().format("DD/MM/YYYY HH:mm"),
                text: 'Bravo',
                status: 'received'
            }
            this.contacts[corrente].messages.push(objAnswer);
        },
        //funzione che inva messaggio.
        sendMessage : function(corrente){
            let objSend = 
            {
                date : dayjs().format("DD/MM/YYYY HH:mm"),
                text: this.valoreTesto,
                status: 'sent'
            }
            this.contacts[corrente].messages.push(objSend);
            this.valoreTesto = '';
            setTimeout(() =>{
                this.answerMesssage(corrente);
            },3000)
        },
        //funzione collegata all'input text colonna di sinistra che filtra la lista contatti.
        searchContact : function(){
            this.contacts.forEach(elemento => {
                if(!elemento.name.toLowerCase().includes(this.valoreSearch)){
                    console.log(elemento.visible);
                    elemento.visible=true;
                }else{
                    elemento.visible=false;
                }
            });
        },
        /*funzione che attribuisce alla variabile d'appoggio 'correnteDropDown' il valore indice 
        e apre solo il dropdown menu richiesto*/
        downMenuMessage: function(indice){
            this.correnteDropDown=indice
        },
        //funzione per cancellare il messaggio tramite il menu dropdown.
        deleteMessage : function(indice){
            this.contacts[this.corrente].messages.splice(indice,1);
        }
    }
}) 
export const MessageForm = {

    props: {
        pending: {
            type: Boolean,
            required: true,
        },
    },

    data(){
        return{
            newMessage: '',
        };
    },

    template: `
    <form class="input-content" @submit.prevent="sendMessage">
        <div class="input-area">
            <input 
                class="input-text" 
                type="text" placeholder="メッセージを入力する" 
                v-model="newMessage">
        </div>
        <button class="submit-button" :disabled="pending">送信</button>
    </form>
    `,

    methods: {
        sendMessage() {
            if(!this.newMessage.trim()){
                 return; 
            }
            const message = {
                id: Date.now(),
                name:'あなた',
                sender: 'user',
                content: this.newMessage.trim(),
            };
            this.$emit('message-sent',message);
            this.newMessage = '';
        }
        
    }
}
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { MessageList } from './components/message-list.js';
import { MessageForm } from './components/message-form.js';
// characterConversationをimport
import { ecceConversation } from './actions/ecce.js';

export const app = createApp({
    components: {
        'message-list': MessageList,
        'message-form': MessageForm,
    },
    data() {
            return {
                pending: false,
                messages: [
                    {
                        id: null,
                        name: null,
                        sender: null,
                        content: '好きな言葉を送って、会話を開始しましょう！',
                    },
                ],
            };
    },
    methods: {
        // sendMessageを挿し替え
        async sendMessage(message) {
            this.pending = true;
            this.messages.push(message);
            try {
                const dialogHistory = this.messages
                .filter((m) => m.sender)
                .map((m) => m.content);
                await this.conversation(dialogHistory);
            } catch (e) {
                console.error(e);
            }
            this.pending = false;
        },
        //conversationを記述
        async conversation(dialogHistory) {
          const responseText = await ecceConversation(dialogHistory);
          this.messages.push({
            id: Date.now(),
            name: 'rinna',
            sender: 'chatbot',
            content: responseText[0],
          });
        },
    },
});

app.mount('#app');
export const MessageList = {
    props: {
        pending: {
            type: Boolean,
            required: true,
        },
        messages: {
            type: Array,
            required: true,
        },
    },

    template:`
        <div class="message-area">
            <div
                class="message-box"
                v-bind:class="[message.sender === 'user' ? 'user-box' : '']"
                v-for="message in messages"
                :key="message.id"
            >
                <div class="">
                    <div class="">{{ message.name }}</div>
                    <div>{{ message.content }}</div>
                </div>
            </div>
        </div>
    `,
};
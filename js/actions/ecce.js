const apiEndpoint = 'https://ai-studio-ian3jrspdq-an.a.run.app';

// AI STUDIO Hubで作成したご自身のWeb API Keyを設定してください
const apiKey = 'bc07af7d06f25427dcc98b2a8ecf992bc4ad5b923b0fe724e8154e84b1f7c2e8';

export const ecceConversation = async (dialogHistory = []) => {
    const url = `${apiEndpoint}/models/ecce/v5.2`;
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'x-web-api-key': `${apiKey}`,
        },
        body: JSON.stringify({
            knowledgeSetId: 'ZGV2ZWxvcGVycy9yaW5uYS9VUkVfU2FtcGxlLnR4dA==',
            queries: [dialogHistory.pop()],
            dialogHistoryList: [dialogHistory.slice(-5)],
            l2ReturnNum: 3,
            l3ReturnNum: 1,
        }),
    });
    return (await result.json()).resultResponses;
};
window.watsonAssistantChatOptions = {
    integrationID: "e94dec0b-a344-4a47-9b89-b4a579433b03", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "277ec8e9-aaba-4cb6-939b-ec951019bb52", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});
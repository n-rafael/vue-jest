
import { ChatMessageService } from './';

describe("the message service",()=>{
    let chatMessageService;


    beforeEach(()=>{

        
        // Passing a default value to the service makes it easier to test.
        chatMessageService = ChatMessageService([]);

    })

    it("should add messages", async () => {

        const content = "thank you";

        expect(await chatMessageService.getMessages()).toHaveLength(0);

        await chatMessageService.submitMessage({content});

        expect(await chatMessageService.getMessages()).toHaveLength(1);

        let messages = await chatMessageService.getMessages();
        expect(messages[0].content).toEqual("thank you");
    })

    it.todo('should return an array of messages');
});
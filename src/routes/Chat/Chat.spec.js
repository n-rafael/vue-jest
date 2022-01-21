import Chat from './Chat.vue';
import { mount, shallowMount } from '@vue/test-utils'

describe('the Chat Service', () => {
    let wrapper = null;

    beforeEach(async()=>{
        wrapper = mount(Chat, {propsData:{}});
    })
    
    it('should match the snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    it('should have a list item for every message in the props', () => {
        const shallowWrapper = shallowMount(Chat, { propsData : {
            messages: [{content: "hello"}, {content: "world"}],
        }});

        expect(shallowWrapper.findAll(".message-display")).toHaveLength(2);
    });
});
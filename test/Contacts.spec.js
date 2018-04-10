import { shallow } from '@vue/test-utils';
import Contacts from '@/components/Contacts.vue';

describe('Contacts.vue', () => {
  it('Contacts: Renders li for each item in data.contacts', () => {
    const wrapper = shallow(Contacts);
    expect(wrapper.findAll('li')).lengthOf(wrapper.vm.contacts.length);
  });
});

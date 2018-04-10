import { shallow } from '@vue/test-utils';
import Programming from '@/components/Programming.vue';

describe('Programming.vue', () => {
  it('Programming header has correct text', () => {
    const wrapper = shallow(Programming);
    expect(wrapper.find('.block-body > h2').text()).to.be.equal('Coming soon...');
  });
});

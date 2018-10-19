import { shallow } from '@vue/test-utils';
import Photography from '@/components/Photography.vue';

describe('Photography.vue', () => {
  it('Photography header has correct text', () => {
    const wrapper = shallow(Photography);
    expect(wrapper.find('.block-body > h2').text()).to.be.equal('Coming soon...');
  });
});

import { shallow } from '@vue/test-utils';
import Movies from '@/components/Movies.vue';

describe('Movies.vue', () => {
  it('Movies header has correct text', () => {
    const wrapper = shallow(Movies);
    expect(wrapper.find('.block-body > h2').text()).to.be.equal('Coming soon...');
  });
});

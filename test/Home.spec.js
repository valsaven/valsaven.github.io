import { shallow } from '@vue/test-utils';
import Home from '@/components/Home.vue';

describe('Home.vue', () => {
  it('header has correct text', () => {
    const wrapper = shallow(Home);
    expect(wrapper.find('.home-item > h1').text()).to.be.equal('Site overview');
  });
});

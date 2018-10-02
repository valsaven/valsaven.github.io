import { shallow } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('App header has correct text', () => {
    const wrapper = shallow(App);
    expect(wrapper.find('#app > header > h1').text()).to.be.equal('Val Saven');
  });
});

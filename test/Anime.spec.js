import { shallow } from '@vue/test-utils';
import Anime from '@/components/Anime.vue';

describe('Anime.vue', () => {
  it('Anime header has correct text', () => {
    const wrapper = shallow(Anime);
    expect(wrapper.find('.block-body > h2').text()).to.be.equal('Coming soon...');
  });
});

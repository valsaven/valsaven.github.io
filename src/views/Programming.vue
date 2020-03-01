<template>
  <div class="programming">
    <div
      v-for="(skill, i) in skills"
      :key="i"
      class="skill"
    >
      <p class="skill-title">
        {{ skill.title }}
      </p>
      <v-progress-linear
        class="skill-progress"
        :color="skill.color"
        height="10"
        :value="skill.progress"
        striped
      />
      <br>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';

interface Skill {
  title: string;
  progress: number;
  color: string;
}

@Component({})
export default class Programming extends Vue {
  skills: Skill[] = [
    {
      title: 'HTML',
      progress: 70,
      color: '#ea6535',
    },
    {
      title: 'CSS',
      progress: 50,
      color: '#139ad3',
    },
    {
      title: 'JavaScript',
      progress: 70,
      color: '#f6d521',
    },
    {
      title: 'TypeScript',
      progress: 40,
      color: '#0076c6',
    },
    {
      title: 'Vue.js',
      progress: 60,
      color: '#3fb27f',
    },
    {
      title: 'Vuex',
      progress: 50,
      color: '#32475b',
    },
    {
      title: 'git',
      progress: 70,
      color: '#e14c2f',
    },
    {
      title: '',
      progress: 0,
      color: '',
    },
    {
      title: '',
      progress: 0,
      color: '',
    },
    {
      title: '',
      progress: 0,
      color: '',
    },

    // HTML/CSS
    // JavaScript
    // jQuery
    // JavaScript Frameworks
    // Front End Frameworks
    // CSS Preprocessors
    // RESTful Services/APIs
    // Responsive/Mobile Design
    // Cross-Browser Development
    // Content Management Systems
    // Testing/Debugging
    // Git/Version Control
    // Problem Solving
    // What’s Next?
  ]
}
</script>

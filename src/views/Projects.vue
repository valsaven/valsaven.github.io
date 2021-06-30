<template>
  <div class="projects">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="project"
    >
      <p>
        <span class="project__subtitle">Name:</span>
        {{ project.name }}
      </p>

      <p>
        <span class="project__subtitle">Description:</span>
        {{ project.description }}
      </p>

      <p>
        <span class="project__subtitle">URL:</span>
        <a
          class="project__url"
          :href="project.url"
          target="_blank"
        >
          {{ project.url }}
        </a>
      </p>

      <p>
        <span class="project__subtitle">Language:</span>{{ project.language }}
        <span class="project__subtitle">⭐:</span>{{ project.stargazersCount }}
        <span class="project__subtitle">👀:</span>{{ project.watchers }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

interface RepoData {
  name: string;
  description: string;
  url: string;
  language: string;
  stargazersCount: number;
  watchers: number;
}

const Projects = defineComponent({
  data() {
    return {
      repos: [
        'noto',
        'userstyles',
        'Sight',
        'YouTubeCC',
        'md5hash',
        'pyCoder',
        'haruweek',
        'iToolsSmsViewer',
      ],
      projects: [] as RepoData[],
    };
  },
  async mounted() {
    this.projects = await this.getProjectsData();
  },
  methods: {
    async getProjectsData(): Promise<RepoData[]> {
      const requestURL = 'https://valsaven-proxy.herokuapp.com/githubrepo?repo=';
      const requests: Promise<any>[] = [];

      this.repos.forEach((repo) => {
        requests.push(axios.get(`${requestURL}${repo}`));
      });

      return (await Promise.all([
        ...requests,
      ])).map((repo: any) => {
        const { data } = repo.data;

        return {
          name: data.name,
          description: data.description,
          url: data.url,
          language: data.language,
          stargazersCount: data.stargazers_count,
          watchers: data.watchers,
        } as RepoData;
      });
    },
  },
});

export default Projects;
</script>

<style scoped>
.project {
  border: 4px solid #f9f9f9;
  margin-bottom: 10px;
  padding: 10px;
}

.project__subtitle {
  font-weight: bold;
}

.project__url {
  word-break: break-all;
}
</style>

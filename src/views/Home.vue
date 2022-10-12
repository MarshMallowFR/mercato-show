<script setup lang="ts">
import List from '@/components/List.vue';
import { useTweets } from './Home.service';
const test = useTweets();
console.log(test);
</script>

<template>
  <List />
</template>

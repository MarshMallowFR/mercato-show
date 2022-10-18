<script setup lang="ts">
import { useTweets } from './Home.service';
import Card from '../components/Card.vue';
import { FormattedTweet } from './Home.type';
import { computed, ComputedRef, onMounted, ref } from 'vue';
import Loading from '../components/Loading.vue';

const tweets = ref<FormattedTweet[]>([]);

onMounted(() => {
  setTimeout(async () => {
    tweets.value = await useTweets();
  }, 1000);
});

const displayTweets: ComputedRef<FormattedTweet[]> = computed(() => {
  return tweets.value;
});
</script>

<template>
  <Card
    v-if="displayTweets.length > 0"
    v-for="tweet in tweets"
    :tweet="tweet"
    :key="tweet.id"
  />
  <Loading v-else />
</template>

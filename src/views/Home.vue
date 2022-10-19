<script setup lang="ts">
import { useTweets } from './Home.service';
import Card from '../components/Card.vue';
import { FormattedTweet } from './Home.type';
import { computed, ComputedRef, onMounted, ref } from 'vue';
import Loading from '../components/Loading.vue';

const tweets = ref<FormattedTweet[]>([]);

onMounted(async () => {
  tweets.value = await useTweets();
});

const displayTweets: ComputedRef<FormattedTweet[]> = computed(() => {
  return tweets.value;
});
</script>

<template>
  <Loading v-if="displayTweets.length === 0" />
  <Card v-else v-for="tweet in tweets" :tweet="tweet" :key="tweet.id" />
</template>

<script setup lang="ts">
import { FormattedTweet } from '../views/Home.type';
import { formatDate } from '../utils/tools';

const regex = /(?:https?|ftp):\/\/[\n\S]+/g;
const getLink = (text: string): string => {
  const url = text.match(regex);
  if (url) {
    return url[0];
  }
  return '';
};
const getText = (text: string): string => {
  const truncatedText = text.replace(regex, '');
  if (truncatedText) {
    return truncatedText;
  }
  return '';
};

defineProps<{
  tweet: FormattedTweet;
}>();
</script>

<template>
  <section class="card-wrapper">
    <img
      class="card-avatar"
      alt="avatar"
      data-testid="card-avatar"
      :src="tweet.author.profile_image_url"
    />
    <div class="card-content">
      <div class="card-header">
        <h2
          class="card-header-name"
          data-testid="card-name"
          :title="tweet.author.name"
        >
          {{ tweet.author.name }}
        </h2>
        <image
          v-if="tweet.author.verified"
          src="../assets/icons/verified.png"
          class="card-header-icon"
          data-testid="card-verif"
          alt="verified icon"
        />
        <h2
          class="card-header-alias"
          data-testid="card-alias"
          :title="tweet.author.username"
        >
          @{{ tweet.author.username }}
        </h2>
        <p class="card-header-time" data-testid="card-time">
          · {{ formatDate(tweet.created_at) }}
        </p>
      </div>
      <a data-testid="card-link-tweet" :href="getLink(tweet.text)">
        <p class="card-text" data-testid="card-text">
          {{ getText(tweet.text) }}
        </p>
        <img
          v-if="tweet.url"
          class="card-image"
          :src="tweet.url"
          alt="soccer player"
          :style="{
            height: tweet.height,
          }"
        />
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card-wrapper {
  color: $white-color;
  display: flex;
  // margin: 16px;
  padding: 16px 0;
  border-top: 1px solid $grey-color;
  .card-avatar {
    height: 48px;
    width: 48px;
    border-radius: 50%;
    margin-right: 8px;
    margin-left: 16px;
  }
  .card-content {
    margin-right: 16px;
    * {
      font-size: 14px;
    }
    .card-header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      &-name,
      &-alias {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 95px;
      }
      &-alias,
      &-time {
        color: $grey-color;
      }
      &-icon {
        height: 16px;
        width: 16px;
      }
      *:not(:last-child) {
        margin-right: 4px;
      }
    }

    .card-image {
      border-radius: 16px;
      margin-top: 16px;
    }
  }
}

@media (min-width: 768px) {
  .card-wrapper {
    .card-content {
      * {
        font-size: 16px;
      }
      .card-header {
        &-name,
        &-alias {
          width: unset;
        }
      }
    }
  }
}
@media (min-width: 1024px) {
  .card-wrapper {
    width: 50%;
    margin: auto;
    .card-content {
      * {
        font-size: 19px;
      }
    }
  }
}
</style>

<script setup lang="ts"></script>

<template>
  <section class="card-wrapper">
    <img
      class="card-avatar"
      src="https://pbs.twimg.com/profile_images/1486761402853380113/3ifAqala_normal.jpg"
      alt="avatar"
      data-testid="card-avatar"
    />
    <div class="card-content">
      <div class="card-header">
        <h2 class="card-header-name" data-testid="card-name">
          Fabrizio Romano
        </h2>
        <image
          src="src/assets/images/verified.svg"
          class="card-header-icon"
          data-testid="card-verif"
          alt="verified icon"
        />
        <h2 class="card-header-alias" data-testid="card-alias">
          @FabrizioRomano
        </h2>
        <p class="card-header-time" data-testid="card-time">· 27 juil.</p>
      </div>
      <a data-testid="card-link-tweet" href="https://t.co/7oNXcnHa66">
        <p
          class="card-text"
          data-testid="card-text"
          v-html="
            `Barcelona have received indications from Jules Koundé’s camp in the
          last hours: the player would be prepared to accept personal terms
          proposal. Xavi, also called him. 🚨🇫🇷 #FCB\n\nChelsea discussed personal
          terms with Koundé days ago, but still no green light from
          Sevilla/player.`
          "
        ></p>
        <img
          class="card-image"
          src="https://pbs.twimg.com/media/FYc-2bbXgAAk0r1.jpg"
          alt="soccer player"
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
    .card-text {
    }
    .card-image {
      border-radius: 16px;
      margin-top: 16px;
    }
  }
}
</style>

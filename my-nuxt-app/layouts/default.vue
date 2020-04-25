<template>
  <div class="app-layout">
    <div class="sidebar">
      <p>チャンネル一覧</p>
      <p v-for="channel in channels">
        <nuxt-link :to="`/channels/${channel.id}`">{{ channel.name }}</nuxt-link>
      </p>
    </div>
    <div class="main-content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase";

export default {
  data() {
    return {
      channels: []
    };
  },
  mounted() {
    db.collection("channels")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.channels.push({ id: doc.id, ...doc.data() });
        });
        console.log(this.channels);
      });
  }
};
</script>

<style>
.app-layout {
  display: flex;
}

.sidebar {
  width: 300px;

  /* ここを変更 */
  background: #4a4141;

  height: 100vh;
}

.main-content {
  width: 100%;

  /* ここを変更 */
  background: #f1f1f1;

  height: 100vh;
}
</style>

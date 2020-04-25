<template>
  <div class="app-layout">
    <div class="sidebar"></div>
    <div class="main-content">
      <nuxt />
    </div>
  </div>
</template>

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

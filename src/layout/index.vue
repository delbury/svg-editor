<template>
  <div class="app-warpper">
    <div class="app-top">
      <router-view name="top"></router-view>
    </div>
    <div class="app-content">
      <div class="app-content-left">
        <router-view name="left"></router-view>
      </div>
      <div class="app-content-right">
        <router-view name="content"></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'app-layout',
  setup() {
    
    return ;
  }
});
</script>
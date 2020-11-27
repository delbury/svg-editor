<template>
  <canvas-rulers>
    <div>home page</div>
  </canvas-rulers>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CanvasRulers from '/@/components/canvas-rulers/index.vue';

export default defineComponent({
  name: 'home-page',
  components: { CanvasRulers },
  setup(...args) {
    console.log(...args)
  }
});
</script>
<template>
  <canvas-rulers>
    <div class="svg-container">
      <svg
        ref="svgRef"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        v-select-area="handleSelectAreaCallback"
      >
        <circle cx="100" cy="100" r="50" fill="skyblue"></circle>
      </svg>
    </div>
  </canvas-rulers>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from 'vue';
import CanvasRulers from '/@/components/canvas-rulers/index.vue';
import { SvgContainer } from './container';
import { selectArea } from '/@/lib/directives'

export default defineComponent({
  name: 'home-page',
  components: { CanvasRulers },
  directives: { selectArea },
  setup() {
    const svgRef: Ref<SVGSVGElement | null> = ref(null);

    onMounted(() => {
      const svg: SvgContainer = new SvgContainer(svgRef.value as SVGSVGElement);
    });

    const handleSelectAreaCallback = function() {};

    return {
      svgRef,
      handleSelectAreaCallback,
    }
  }
});
</script>

<style lang="less" scoped>
.svg-container {
  box-sizing: content-box;
  width: 600px;
  height: 600px;
  border-right: 100vw solid @primary-10;
  border-bottom: 100vh solid @primary-10;

  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
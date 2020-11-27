<template>
  <div class="canvas-rulers">
    <div class="top-ruler ruler">
      <canvas ref="topRulerRef" v-show="showTopRuler && showRulers"></canvas>
    </div>
    <div class="canvas-rulers-container">
      <div class="left-ruler ruler">
        <canvas ref="leftRulerRef" v-show="showLeftRuler && showRulers"></canvas>
      </div>
      <div class="canvas-rulers-content">
        <!-- 背景辅助网格 -->
        <canvas class="bg-grid" ref="gridRef"></canvas>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, Ref } from 'vue';
import { Ruler, RulerDirections } from './ruler';
import { Grid } from './grid';

export default defineComponent({
  name: 'canvas-rulers',
  setup() {
    const showLeftRuler = ref(true);
    const showTopRuler = ref(true);
    const showRulers = ref(true);
    const topRulerRef: Ref<HTMLCanvasElement | null> = ref(null);
    const leftRulerRef: Ref<HTMLCanvasElement | null> = ref(null);
    const gridRef: Ref<HTMLCanvasElement | null> = ref(null);

    onMounted(() => {
      const topRuler: Ruler = new Ruler(topRulerRef.value as HTMLCanvasElement, RulerDirections.horizontal);
      const leftRuler: Ruler = new Ruler(leftRulerRef.value as HTMLCanvasElement, RulerDirections.vertical);
      const bgGrid: Grid = new Grid(gridRef.value as HTMLCanvasElement);
    });

    return {
      showLeftRuler,
      showTopRuler,
      showRulers,
      topRulerRef,
      leftRulerRef,
      gridRef,
    };
  }
});
</script>

<style lang="less" scoped>
@ruler-width: 16px;

.canvas-rulers {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;

  &-container {
    display: flex;
    height: 100%;
  }

  &-content {
    position: relative;
    width: 100%;

    .bg-grid {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
  }

  .ruler {
    background-color: @primary-10;
    // canvas {
    //   width: 100%;
    //   height: 100%;
    // }
  }
  .top-ruler {
    padding-left: @ruler-width;
    height: @ruler-width;
    width: 100%;
  }
  .left-ruler {
    width: @ruler-width;
    height: 100%;
  }
}
</style>

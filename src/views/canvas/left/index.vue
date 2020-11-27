<template>
  <div class="tools bg-primary">
    <a-radio-group
      class="tools-group"
      v-model:value="currentTool"
      @change="changeToolChange"
      buttonStyle="solid"
    >
      <template v-for="tool in toolList" :key="tool.key">
        <a-radio-button
          class="tool-icon-wrapper"
          :style="itemStyle"
          :value="tool.key"
          :title="tool.title"
        >
          <i class="iconfont tool-icon" :class="[tool.icon ?? '']"></i>
        </a-radio-button>
      </template>
    </a-radio-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { singleTools, SingleToolsEnum } from './tools'

interface AntdChangeEvent {
  target: {
    value: string;
  };
}
export default defineComponent({
  name: 'app-tools',
  setup() {
    const toolList = reactive(singleTools);
    const currentTool = ref(SingleToolsEnum[0]); // 当前选中的 tool

    return {
      toolList,
      currentTool,
    };
  },
  data() {
    return {
      itemStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        fontSize: '40px',
      }
    }
  },
  methods: {
    changeToolChange(ev: AntdChangeEvent) {
      console.log(ev.target.value, this.currentTool);
    }
  }
});
</script>

<style lang="less" scoped>
.tools {
  height: 100%;

  .tools-group {
    display: flex;
    flex-direction: column;
    padding: 2em 0.5em;
  }

  .tool-icon {
  font-size: 40px !important;
  }

  .tool-icon-wrapper {
    background-color: @primary-color !important;
    border: none !important;
    color: #fff;
  }
  .tool-icon-wrapper::before {
    content: none !important;
  }
  .tool-icon-wrapper:hover {
    box-shadow: none !important;
    color: @primary-8;
  }
  .tool-icon-wrapper.ant-radio-button-wrapper-checked {
    color: @primary-10 !important;
  }
}
</style>
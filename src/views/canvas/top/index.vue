<template>
  <div class="topbar bg-primary">
    <template v-for="menu in menuList" :key="menu.key">
      <a-dropdown placement="bottomCenter" :trigger="['click']">
        <a-button type="link" ghost>{{ menu.title }}</a-button>
        <template #overlay>
          <a-menu>
            <template v-for="item in menu.children" :key="item.key">
              <a-menu-item>
                <a
                  :class="{ 'bottom-border-divider': item.bottomBorder }"
                  @click="() => this.handleClickFunc(menu.key, item.key, item)"
                >
                  <span class="topbar-row">
                    <i v-if="item.checked" class="iconfont icon-queding_huaban1 topbar-row-checked"></i>
                    {{ item.title }}
                  </span>
                </a>
              </a-menu-item>
            </template>
          </a-menu>
        </template>
      </a-dropdown>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ReactiveEffect } from 'vue';
import { list, MenusEnum, FuncsEnums, FuncsEnumTypes } from './menus';
import { useStore } from '/@/store';

export default defineComponent({
  name: 'app-topbar',
  setup() {
    const store = useStore();
    const menuList = reactive(list);

    const handleClickFunc = function(menuKey: MenusEnum, funcKey: FuncsEnumTypes, row: MenuRow) {
      if('checked' in row) {
        row.checked = !row.checked;
      }
      switch(menuKey) {
        // 视图
        case MenusEnum.view: {
          switch(funcKey) {
            // 显示刻度尺
            case FuncsEnums.view.showRuler: {
              store.commit('topMenus/toggleRulersStateMutation', row.checked);
              break;
            }
            // 显示网格
            case FuncsEnums.view.showGrid: {
              store.commit('topMenus/toggleGridStateMutation', row.checked);
              break;
            }
          }
        }
      }
    };

    return {
      menuList,
      handleClickFunc,
    };
  },
});
</script>

<style lang="less" scoped>
.topbar {
  padding: 5px 20px;

  &-row {
    position: relative;
    display: block;
    padding-left: 15px;
    padding-right: 15px;

    &-checked {
      content: "1";
      display: block;
      position: absolute;
      left: -4px;
      color: @success-color;
    }
  }
}
</style>
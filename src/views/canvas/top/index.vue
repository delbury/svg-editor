<template>
  <div class="topbar bg-primary">
    <template v-for="menu in menuList" :key="menu.key">
      <a-dropdown placement="bottomCenter">
        <a-button type="link" ghost>{{ menu.title }}</a-button>
        <template #overlay>
          <a-menu>
            <template v-for="item in menu.children" :key="item.key">
              <a-menu-item>
                <a :class="{ 'bottom-border-divider': item.bottomBorder }" @click="() => this.handleClickFunc(menu.key, item.key)">{{ item.title }}</a>
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
import { list, Menus, FuncsEnum } from './menus';

export default defineComponent({
  name: 'app-topbar',
  setup() {
    const menuList = reactive(list);
    return {
      menuList,
    };
  },
  methods: {
    handleClickFunc(menuKey: Menus, funcKey: FuncsEnum) {
      console.log(menuKey, funcKey);
    }
  }
});
</script>

<style lang="less" scoped>
.topbar {
  padding: 5px 20px;
}
</style>
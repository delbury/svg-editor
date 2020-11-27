// 顶部菜单栏内选项
type MenuRow = {
  key: string;
  title: string;
  shortcutKey?: string[] | string;
  bottomBorder?: boolean;
}
// 顶部菜单栏
interface MenuOption {
  key: string;
  title: string;
  children: Array<MenuRow>;
}

// 工具栏项
interface ToolOption {
  key: string;
  title: string;
  message?: string;
  icon?: string;
  shortcutKey?: string;
}
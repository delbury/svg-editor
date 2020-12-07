// 顶部菜单栏内选项
type MenuRow = {
  key: number;
  title: string;
  shortcutKey?: string[] | string;
  bottomBorder?: boolean;
  checked?: boolean;
  disabled?: boolean;
}
// 顶部菜单栏
interface MenuOption {
  key: number;
  title: string;
  children: Array<MenuRow>;
}

// 工具栏项
interface ToolOption {
  key: number;
  title: string;
  message?: string;
  icon?: string;
  shortcutKey?: string;
}
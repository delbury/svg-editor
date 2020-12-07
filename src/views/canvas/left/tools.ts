export enum SingleToolsEnum { select, pencil, line, rect, circle };

export const singleTools: Array<ToolOption> = [
  {
    key: SingleToolsEnum.select,
    title: '选择工具',
    icon: 'icon-yidong_huaban1',
  },
  {
    key: SingleToolsEnum.pencil,
    title: '铅笔',
    icon: 'icon-qianbi1',
  },
  {
    key: SingleToolsEnum.line,
    title: '直线',
    icon: 'icon-zhixian_huaban1',
  },
  {
    key: SingleToolsEnum.rect,
    title: '矩形',
    icon: 'icon-juxinggongju_huaban1',
  },
  {
    key: SingleToolsEnum.circle,
    title: '圆形',
    icon: 'icon-yuanquan_huaban1',
  }
];

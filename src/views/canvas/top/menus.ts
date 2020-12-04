import { state } from '/@/store/top-menus';

const list: Array<MenuOption> = [
  {
    key: 'file',
    title: '文件',
    children: [
      {
        key: 'newFile',
        title: '新建文件',
      },
      {
        key: 'openSvg',
        title: '打开SVG',
      },
      {
        key: 'import',
        title: '导入',
      },
      {
        key: 'export',
        title: '导出',
      }
    ]
  },
  {
    key: 'edit',
    title: '编辑',
    children: [
      {
        key: 'revoke',
        title: '撤销',
      },
      {
        key: 'redo',
        title: '重做',
        bottomBorder: true,
      },
      {
        key: 'delete',
        title: '删除',
      },
    ]
  },
  {
    key: 'view',
    title: '视图',
    children: [
      {
        key: 'showRuler',
        title: '显示刻度尺',
        checked: state.showRulers,
      },
      {
        key: 'showGrid',
        title: '显示网格',
        checked: state.showGrid,
      },
    ]
  }
];

enum MenusEnum { file, edit, view };
enum FileFuncsEnum { newFile, openSvg, import, export };
enum EditFuncsEnum { revoke, redo, delete };
enum ViewFuncsEnum { showRuler, showGrid };

type FuncsEnumTypes = FileFuncsEnum | EditFuncsEnum | ViewFuncsEnum;

const FuncsEnums = {
  file: FileFuncsEnum,
  edit: EditFuncsEnum,
  view: ViewFuncsEnum,
};

export { list, MenusEnum, FuncsEnums, FuncsEnumTypes };
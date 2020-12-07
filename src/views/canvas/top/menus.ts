import { state } from '/@/store/top-menus';

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

const list: Array<MenuOption> = [
  {
    key: MenusEnum.file,
    title: '文件',
    children: [
      {
        key: FileFuncsEnum.newFile,
        title: '新建文件',
      },
      {
        key: FileFuncsEnum.openSvg,
        title: '打开SVG',
      },
      {
        key: FileFuncsEnum.import,
        title: '导入',
      },
      {
        key: FileFuncsEnum.export,
        title: '导出',
      }
    ]
  },
  {
    key: MenusEnum.edit,
    title: '编辑',
    children: [
      {
        key: EditFuncsEnum.revoke,
        title: '撤销',
      },
      {
        key: EditFuncsEnum.redo,
        title: '重做',
        bottomBorder: true,
      },
      {
        key: EditFuncsEnum.delete,
        title: '删除',
      },
    ]
  },
  {
    key: MenusEnum.view,
    title: '视图',
    children: [
      {
        key: ViewFuncsEnum.showRuler,
        title: '显示刻度尺',
        checked: state.showRulers,
      },
      {
        key: ViewFuncsEnum.showGrid,
        title: '显示网格',
        checked: state.showGrid,
      },
    ]
  }
];

export { list, MenusEnum, FuncsEnums, FuncsEnumTypes };
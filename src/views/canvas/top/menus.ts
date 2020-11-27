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
  }
];

enum Menus { file, edit };
enum FuncsEnum { newFile, openSvg, import, export, revoke, redo, delete };

export { list, Menus, FuncsEnum };
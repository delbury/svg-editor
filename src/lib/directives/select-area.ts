import { Directive, DirectiveBinding, VNode } from 'vue';

export interface CallbackParam {
  left: number;
  top: number;
  width: number;
  height: number;
};
interface SelectOptions {
  selectMoveCallback?: (param?: CallbackParam) => any;
  selectEndCallback?: (param?: CallbackParam) => any;
  disabled?: boolean;
}

// 模块内全局变量
let bindValue: SelectOptions;


// 矩形选择框元素
const rectElement: HTMLDivElement = document.createElement('div');
rectElement.className = 'select-rect-area';

export const selectArea: Directive = {
  updated(el: HTMLElement, binding: DirectiveBinding<SelectOptions>) {
    bindValue = binding.value;
  },
  mounted(el: HTMLElement, binding: DirectiveBinding<SelectOptions>, vnode: VNode) {
    bindValue = binding.value;

    const originPosition: [number, number] = [0, 0];
    const elementSize: DOMRect = el.getBoundingClientRect();
    // 鼠标按下事件
    const fnMouseDown = function(ev: MouseEvent) {
      if(bindValue.disabled) return;

      originPosition[0] = ev.pageX;
      originPosition[1] = ev.pageY;

      rectElement.style.left = originPosition[0] + 'px';
      rectElement.style.top = originPosition[1] + 'px';

      document.body.append(rectElement);

      // 鼠标移动事件
      const fnMouseMove = function(ev: MouseEvent) {
        const dx: number = ev.pageX - originPosition[0];
        const dy: number = ev.pageY - originPosition[1];
        let left: number, top: number, width: number, height: number;
        // 矩形框宽度及横轴位置
        if(dx >= 0) {
          left = originPosition[0];
          width = dx;
        } else {
          left = originPosition[0] + dx;
          width = -dx;
        }

        // 矩形框高度及纵轴位置
        if(dy >= 0) {
          top = originPosition[1];
          height = dy;
        } else {
          top = originPosition[1] + dy;
          height = -dy;
        }

        rectElement.style.left = left + 'px';
        rectElement.style.width = width + 'px';
        rectElement.style.top = top + 'px';
        rectElement.style.height = height + 'px';

        if(bindValue.selectMoveCallback) {
          // 计算矩形框的区域
          const size: CallbackParam = {
            left: left - elementSize.left,
            top: top - elementSize.top,
            width,
            height
          };
          bindValue.selectMoveCallback(size);
        }
      }

      // 鼠标抬起事件
      const fnMouseUp = function(ev: MouseEvent) {
        if(bindValue.selectEndCallback) {
          // 计算矩形框的区域
          bindValue.selectEndCallback();
        }

        document.removeEventListener('mousemove', fnMouseMove);
        document.removeEventListener('mouseup', fnMouseUp);
        rectElement.style.width = '0px';
        rectElement.style.height = '0px';
        rectElement.remove();
      }

      document.addEventListener('mousemove', fnMouseMove);
      document.addEventListener('mouseup', fnMouseUp);
    };


    el.addEventListener('mousedown', fnMouseDown);
  },
};
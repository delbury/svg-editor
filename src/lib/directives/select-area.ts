import { Directive, DirectiveBinding, VNode } from 'vue';

// 矩形选择框元素
const rectElement: HTMLDivElement = document.createElement('div');
rectElement.className = 'select-rect-area';

export const selectArea: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    const originPosition: [number, number] = [0, 0];
    // 鼠标按下事件
    const fnMouseDown = function(ev: MouseEvent) {
      originPosition[0] = ev.pageX;
      originPosition[1] = ev.pageY;

      rectElement.style.left = originPosition[0] + 'px';
      rectElement.style.top = originPosition[1] + 'px';

      document.body.append(rectElement);

      // 鼠标移动事件
      const fnMouseMove = function(ev: MouseEvent) {
        const dx: number = ev.pageX - originPosition[0];
        const dy: number = ev.pageY - originPosition[1];
        
        // 矩形框宽度及横轴位置
        if(dx >= 0) {
          rectElement.style.left = originPosition[0] + 'px';
          rectElement.style.width = dx + 'px';
        } else {
          rectElement.style.left = originPosition[0] + dx + 'px';
          rectElement.style.width = -dx + 'px';
        }

        // 矩形框高度及纵轴位置
        if(dy >= 0) {
          rectElement.style.top = originPosition[1] + 'px';
          rectElement.style.height = dy + 'px';
        } else {
          rectElement.style.top = originPosition[1] + dy + 'px';
          rectElement.style.height = -dy + 'px';
        }
      }

      // 鼠标抬起事件
      const fnMouseUp = function(ev: MouseEvent) {
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
/**
 * canvas 网格
 */

import { BaseCanvas } from '/@/lib/base-classes';

type GridParams = {
  shortStep: number; // 最小步进
  longStep: number; // 长刻度的步进
  totalScale: number; // 整体缩放
};

export class Grid extends BaseCanvas {
  constructor(element: HTMLCanvasElement) {
    super(element);

    this.setCanvasSize();
  }
}
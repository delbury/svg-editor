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
  private params: GridParams = {
    shortStep: 5,
    longStep: 50,
    totalScale: 1,
  };
  constructor(element: HTMLCanvasElement) {
    super(element);

    this.setCanvasSize();
    this.createGrid();
    this.bindResizeEvent();
  }

  // @override
  resizeCallback() {
    this.createGrid();
  }

  // 绘制网格
  createGrid(): void {
    this.ctx.save();
    this.ctx.strokeStyle = '#ccc';
    this.ctx.setLineDash([2, 4]);
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 绘制纵轴
    const width: number = this.width;
    const height: number = this.height;
    for(let i = 0; i < width; i += this.params.longStep) {
      this.ctx.beginPath();
      this.ctx.moveTo(i + 0.5, 0);
      this.ctx.lineTo(i + 0.5, height);
      this.ctx.stroke();
    }

    // 绘制横轴
    for(let i = 0; i < height; i += this.params.longStep) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, i + 0.5);
      this.ctx.lineTo(width, i + 0.5);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }
}
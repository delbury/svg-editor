/**
 * canvas 标尺
 */
import { BaseCanvas } from '/@/lib/base-classes';

type RulerParams = {
  longLengthScale: number; // 长刻度的比例
  shortLengthScale: number; // 短刻度的比例
  middleLengthScale: number; // 中等刻度的比例
  shortStep: number; // 最小步进
  longStep: number; // 长刻度的步进
  totalScale: number; // 整体缩放
};

export enum RulerDirections { horizontal, vertical }; // 标志的方向

export class Ruler extends BaseCanvas {
  private _direction: RulerDirections; // 方向
  
  private params: RulerParams = {
    longLengthScale: 1,
    shortLengthScale: 0.25,
    middleLengthScale: 0.35,
    shortStep: 5,
    longStep: 50,
    totalScale: 1,
  };
  constructor(element: HTMLCanvasElement, direction: RulerDirections)  {
    super(element);
    
    this._direction = direction;
    this.setCanvasSize();
    this.createScale(direction);
    this.bindResizeEvent();
  }

  // resize回调
  // @Override
  resizeCallback(): void {
    this.createScale(this.direction);
  }
  
  // 绘制刻度
  createScale(direction: RulerDirections): void {
    if(!this._isShow) return;

    const fontSize: number = 9;
    this.ctx.save();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = '#fff';
    this.ctx.fillStyle = '#fff';
    this.ctx.font = `normal ${fontSize}px 'Lucida Grande', sans-serif`;
    this.ctx.imageSmoothingEnabled = false;
    // this.ctx.imageSmoothingQuality = 'low';
    this.ctx.clearRect(0, 0, this.width, this.height);
    switch(direction) {
      case RulerDirections.horizontal:
        this.createScaleHorizontal(fontSize);
        break;
      case RulerDirections.vertical:
        this.createScaleVertical(fontSize);
        break;
      default:
        break;
    }
    this.ctx.restore();
  }

  // 绘制横向刻度
  createScaleHorizontal(fontSize: number) {
    const length = this.width;
    const shortStep = this.params.shortStep * this.params.totalScale;
    const longStep = this.params.longStep * this.params.totalScale;
    for(let x = 0; x <= length; x += shortStep) {
      let scale: number;
      if(x % longStep === 0) {
        scale = this.params.longLengthScale;
        
        this.ctx.fillText((x / this.params.totalScale).toString(), x + 2, fontSize) // 绘制值
      } else if(x / this.params.totalScale % 2 === 0) {
        scale = this.params.middleLengthScale;
      } else {
        scale = this.params.shortLengthScale;
      }

      this.ctx.beginPath();
      this.ctx.moveTo(x + 0.5, this.height);
      this.ctx.lineTo(x + 0.5, this.height * (1 - scale));
      this.ctx.stroke();
    }
  }

  // 绘制纵向刻度
  createScaleVertical(fontSize: number) {
    const length = this.height;
    const shortStep = this.params.shortStep * this.params.totalScale;
    const longStep = this.params.longStep * this.params.totalScale;
    for(let y = 0; y <= length; y += shortStep) {
      let scale: number;
      if(y % longStep === 0) {
        scale = this.params.longLengthScale;
        
        const text: string = (y / this.params.totalScale).toString();
        for(let i = 0; i < text.length; i++) {
          this.ctx.fillText(text[i], 1, y + (i + 1) * fontSize) // 绘制值
        }
      } else if(y / this.params.totalScale % 2 === 0) {
        scale = this.params.middleLengthScale;
      } else {
        scale = this.params.shortLengthScale;
      }

      this.ctx.beginPath();
      this.ctx.moveTo(this.width * (1 - scale), y + 0.5);
      this.ctx.lineTo(this.width, y + 0.5);
      this.ctx.stroke();
    }
  }

  get direction(): RulerDirections {
    return this._direction;
  }
};
export class BaseCanvas {
  private _timer: number | null = null; // 帧计时器
  protected _isShow: boolean = true; // 是否显示
  protected canvas: HTMLCanvasElement;
  protected ctx: CanvasRenderingContext2D;

  constructor(element: HTMLCanvasElement) {
    this.canvas = element;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    if(!this.ctx) throw(new Error('create canvas context error!'));
  }

  // 设置 canvas 的宽高
  setCanvasSize(width?: number, height?: number) {
    const size: DOMRect = (this.canvas.parentElement as HTMLElement).getBoundingClientRect();

    this.canvas.width = width ?? size.width;
    this.canvas.height = height ?? size.height;
  }

  // 监听窗口大小改变
  bindResizeEvent(): () => void {
    const fn = () => {
      if(!this._timer) {
        this._timer = window.requestAnimationFrame(() => {
          this.setCanvasSize();
          this.resizeCallback();
          this._timer = null;
        });
      }
    };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }

  // resize回调
  resizeCallback(): void {}

  get width(): number {
    return this.canvas?.width;
  }
  get height(): number {
    return this.canvas?.height;
  }
  show(): void {
    this._isShow = true;
  }

  hide(): void {
    this._isShow = false;
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  get isShow(): boolean {
    return this._isShow;
  }
}
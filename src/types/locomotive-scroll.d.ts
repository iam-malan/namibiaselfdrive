declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el?: HTMLElement | null;
    name?: string;
    offset?: [number, number];
    repeat?: boolean;
    smooth?: boolean;
    smoothMobile?: boolean;
    direction?: string;
    inertia?: number;
    class?: string;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    getSpeed?: boolean;
    getDirection?: boolean;
    multiplier?: number;
    firefoxMultiplier?: number;
    touchMultiplier?: number;
    resetNativeScroll?: boolean;
    tablet?: {
      smooth?: boolean;
      direction?: string;
      horizontalGesture?: boolean;
    };
    smartphone?: {
      smooth?: boolean;
      direction?: string;
      horizontalGesture?: boolean;
    };
    reloadOnContextChange?: boolean;
    lerp?: number;
  }

  export default class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);

    destroy(): void;
    update(): void;
    start(): void;
    stop(): void;
    scrollTo(target: string | number | HTMLElement, options?: object): void;
    setScroll(x: number, y: number): void;
    on(event: string, func: (args?: any) => void): void;
    off(event: string, func: (args?: any) => void): void;
  }
}

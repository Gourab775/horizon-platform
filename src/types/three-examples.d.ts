declare module "three/examples/jsm/postprocessing/EffectComposer" {
  import { WebGLRenderer, WebGLRenderTarget } from "three";
  export class EffectComposer {
    constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);
    addPass(pass: any): void;
    setSize(width: number, height: number): void;
    render(): void;
    dispose(): void;
  }
}

declare module "three/examples/jsm/postprocessing/RenderPass" {
  import { Scene, Camera } from "three";
  export class RenderPass {
    constructor(scene: Scene, camera: Camera);
  }
}

declare module "three/examples/jsm/postprocessing/UnrealBloomPass" {
  import { Vector2 } from "three";
  export class UnrealBloomPass {
    constructor(
      resolution: Vector2,
      strength: number,
      radius: number,
      threshold: number
    );
  }
}

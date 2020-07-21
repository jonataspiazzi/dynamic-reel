import { AssetInfo, VideoInfo, ImageInfo } from "../../dFlow/assetInfo";

export const assets = {
  frameInitial: new ImageInfo(require('./stand-splash.jpg'), 498332, 'image/jpg', 1),
  video180: new VideoInfo(require('./stand-180.mp4'), 3478475),
  videoCameraB: new VideoInfo(require('./stand-camera-b.mp4'), 6620145),
  videoCameraF: new VideoInfo(require('./stand-camera-f.mp4'), 6815145),
  videoNotebookB: new VideoInfo(require('./stand-notebook-b.mp4'), 3801815),
  videoNotebookF: new VideoInfo(require('./stand-notebook-f.mp4'), 3679800),
  videoPromoterB: new VideoInfo(require('./stand-promoter-b.mp4'), 4098461),
  videoPromoterF: new VideoInfo(require('./stand-promoter-f.mp4'), 4152317),
  cursorLeft: new ImageInfo(require('./cursor-arrow-left.png'), 8503),
  cursorRight: new ImageInfo(require('./cursor-arrow-right.png'), 20192),
  layerHelp: new ImageInfo(require('./help-layer.png'), 124389),
  layerCameraHighlight: new ImageInfo(require('./overlay-camera.png'), 72825),
  layerNotebookHighlight: new ImageInfo(require('./overlay-notebook.png'), 74385),
  layerPromoterHighlight: new ImageInfo(require('./overlay-promoter.png'), 62118)
};

export const assetsList: AssetInfo[] = Object.getOwnPropertyNames(assets).map(prop => (assets as any)[prop]);
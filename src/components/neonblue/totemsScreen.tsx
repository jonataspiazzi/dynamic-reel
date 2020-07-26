import React, { useState } from 'react';
import { assets } from './assetsConfig';
import { useAssetSource } from '../../dFlow/components/hooks';
import Overlay from '../../dFlow/components/overlay';

export type ScreenName = 'camera' | 'promoter' | 'notebook';

export interface TotemsScreenProps {
  goTo: (screen: ScreenName) => void;
}

export default function TotemsScreen(props: TotemsScreenProps) {
  const [bg] = useAssetSource(assets.frameInitial);
  const [cursorLeft] = useAssetSource(assets.cursorLeft);
  const [cursorRight] = useAssetSource(assets.cursorRight);
  const [highlightCamera, setHighlightCamera] = useState(false);
  const [highlightPromoter, setHighlightPromoter] = useState(false);
  const [highlightNotebook, setHighlightNotebook] = useState(false);
  const [visible, setVisible] = useState(true);

  function mouseOn(totem: ScreenName, on: boolean) {
    switch (totem) {
      case 'camera': setHighlightCamera(on); break;
      case 'promoter': setHighlightPromoter(on); break;
      case 'notebook': setHighlightNotebook(on); break;
    }
  }

  function goTo(totem: ScreenName) {
    setVisible(false);
    setTimeout(() => {
      props.goTo(totem);
    }, 300);
  }

  return (
    <div className={`screen totem-screen ${visible ? '' : 'hide'}`}>
      <img className="background" src={bg} alt="" />
      <Overlay asset={assets.layerTotemCameraHighlight} visible={highlightCamera} />
      <Overlay asset={assets.layerTotemPromoterHighlight} visible={highlightPromoter} />
      <Overlay asset={assets.layerTotemNotebookHighlight} visible={highlightNotebook} />
      <svg viewBox="0 0 1280 720" className="action-layer">
        <polygon points="0 382.59 426.66 382.59 558 251.25 558 0 0 0 0 382.59" style={{ cursor: `url(${cursorLeft}), auto` }} />
        <polygon points="1280 382.59 853.34 382.59 722 251.25 722 0 1280 0 1280 382.59" style={{ cursor: `url(${cursorRight}), auto` }} />
        <path d="M490.45,638.92c0,13-15.89,22.84-49.92,30.82-29,6.8-67.45,11.16-108.4,12.28q-10.39.29-20.55.28c-33.23,0-64-2.27-88.37-6.59-34.81-6.18-51.19-15.23-51.55-28.48-.29-10.56,10.11-19.15,31.79-26.26a284.31,284.31,0,0,1,40.3-9.43V596.41l11-2-11-1.08V569.91l14-2.2-14-1.31V543.07l53.63-7.69v-3.21l-2.5-1v-23h16.67l4,4.66.72-.66h5.84v-12h16.6l3,12.13h9.55l4.57-3.46,14.19.47v18.07L426,531v22l-13.81,2.16L426,556v22.26L415.5,580l10.5.74v21.77L414,605l12,.81V608c16.85,2.3,31,5.43,41.34,9.12,5.62,2,22.73,8.16,23.1,21.36C490.44,638.63,490.45,638.77,490.45,638.92Z" transform="translate(0 0)" onMouseEnter={() => mouseOn('camera', true)} onMouseLeave={() => mouseOn('camera', false)} onClick={() => goTo('camera')} />
        <path d="M784.5,608a12.51,12.51,0,0,1-.57,3.73c-2.17,6.9-10,15.6-51.69,22-23.84,3.69-54.2,5.72-85.49,5.72-35.12,0-68.21-2.49-93.17-7C522.75,626.91,509,619.35,509,608c0-3,1.13-7.53,6.51-11.7a35.62,35.62,0,0,1,6-3.66,84.09,84.09,0,0,1,13.09-4.83l2.33-.64c2.41-.65,5-1.27,7.69-1.87,1.26-.29,2.62-.57,4-.85,4-.82,8.56-1.61,13.38-2.35l.47-.07v-11l2.86-6.82H562.5V547.33l2.86-6.08H562.5V524l7.29-13H621a50.94,50.94,0,0,1,1.92-9.12c.37-1.2,1.33-5.75,2-9.91l-.88-.15.69-7.4a43.52,43.52,0,0,1,1.25-6.6l1.54-5.09,1.13-.12c0-.35-.07-1-.13-1.71-.55-7.07-.83-13.26,1.38-17.45a14.93,14.93,0,0,1,7.1-6.56c.06-1,.08-2.24.09-3.55,0-4.52.09-9.64,2.09-13.83A16.25,16.25,0,0,1,654.12,420,16.8,16.8,0,0,1,670,431c1.44,4.07,1.53,8.9,1.61,13.17,0,.93,0,2.1.08,3.13a16.06,16.06,0,0,1,4.19,5c2.29,4.11,2.09,9.21,1.9,14.14-.06,1.67-.13,3.39,0,4.42a26.94,26.94,0,0,0,1.1,4.7,39.11,39.11,0,0,1,1.57,7,77.19,77.19,0,0,1,.2,8.83,63.33,63.33,0,0,0,.16,7.66,15.41,15.41,0,0,0,.79,2.3,24,24,0,0,1,2.1,9.67H725l5.72,13.49v16.76h-2.39l2.39,6.43v16.57h-2.38l2.38,7.14V582c3.24.48,6.3,1,9.11,1.5,5.06.92,9.68,1.9,13.72,2.91,1.63.4,3.36.85,5.26,1.39,2.87.84,5.27,1.63,7.38,2.41A44.59,44.59,0,0,1,778,596.28l.4.32.59.49,0,0C783.55,601.07,784.5,605.21,784.5,608Z" transform="translate(0 0)" onMouseEnter={() => mouseOn('promoter', true)} onMouseLeave={() => mouseOn('promoter', false)} onClick={() => goTo('promoter')} />
        <path d="M1130.68,650.31c-.28,6.87-5.12,11.79-10.67,15.25a65.73,65.73,0,0,1-14.87,6.42c-13,4.14-31.43,7.34-53.29,9.27-16,1.4-33.58,2.11-51.86,2.11-10,0-20.23-.21-30.53-.64-31.8-1.32-62.21-4.56-88-9.37-20-3.72-36.65-8.33-48.19-13.34-5.54-2.4-22.4-9.71-21.84-23,.54-13,17.45-18.91,23-20.83,10.25-3.55,23.85-6.4,40.49-8.48v-2.4h7.78l1-.06-8.8-1.77v-23.1l6.73-.33L875,578.93V554.54h2.75l-2.75-.41V530h7.78l60.33-3.65,13.27,2V498.23l52.5,4.69V536l50.29,7.38v25.92l-5.63.26,5.63.87v24.14l-8.82.71,8.82,1.54v16.93l1.84.34c19.89,3.72,36.47,8.33,48,13.32C1114.45,629.8,1131.22,637.1,1130.68,650.31Z" transform="translate(0 0)" onMouseEnter={() => mouseOn('notebook', true)} onMouseLeave={() => mouseOn('notebook', false)} onClick={() => goTo('notebook')} />
      </svg>
    </div>
  )
}
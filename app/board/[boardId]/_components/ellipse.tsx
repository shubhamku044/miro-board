import { rgbColorToHex } from '@/lib/utils';
import React from 'react';
import { EllipseLayer } from '@/types/canvas';

interface IProps {
  id: string;
  layer: EllipseLayer;
  onPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

const Ellipse = ({ id, layer, onPointerDown, selectionColor }: IProps) => {
  return (
    <ellipse
      className="drop-shadow-md"
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        transform: `translate(${layer.x}px, ${layer.y}px)`,
      }}
      cx={layer.width / 2}
      cy={layer.height / 2}
      rx={layer.width / 2}
      ry={layer.height / 2}
      fill={layer.fill ? rgbColorToHex(layer.fill) : '#000'}
      stroke={selectionColor || 'transparent'}
      strokeWidth="1"
    />
  );
};

export default Ellipse;

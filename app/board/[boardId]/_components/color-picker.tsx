import { rgbColorToHex } from '@/lib/utils';
import { Color } from '@/types/canvas';
import React from 'react';

interface IProps {
  onColorChange: (color: Color) => void;
}
const colors = [
  { r: 255, g: 218, b: 185 },
  { r: 230, g: 230, b: 250 },
  { r: 152, g: 251, b: 152 },
  { r: 135, g: 206, b: 235 },
  { r: 200, g: 162, b: 200 },
  { r: 255, g: 255, b: 102 },
  { r: 176, g: 224, b: 230 },
  { r: 240, g: 128, b: 128 },
];

export const ColorPicker = ({ onColorChange }: IProps) => {
  return (
    <div className="mr-2 flex max-w-[164px] flex-wrap items-center gap-2 border-r border-neutral-300 pr-2">
      {colors.map((color) => (
        <ColorButton
          key={`${color.r}-${color.g}-${color.b}`}
          onClick={onColorChange}
          color={color}
        />
      ))}
    </div>
  );
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <div
      onClick={() => onClick(color)}
      className="flex size-8 items-center justify-center overflow-hidden transition hover:opacity-75"
    >
      <div
        className="size-8 rounded-md border border-neutral-400"
        style={{
          backgroundColor: rgbColorToHex(color),
        }}
      />
    </div>
  );
};

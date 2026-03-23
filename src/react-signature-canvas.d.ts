declare module 'react-signature-canvas' {
  import * as React from 'react';

  export interface ReactSignatureCanvasProps {
    penColor?: string;
    backgroundColor?: string;
    clearOnResize?: boolean;
    canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>;
    minWidth?: number;
    maxWidth?: number;
    throttle?: number;
    velocityFilterWeight?: number;
  }

  export default class SignatureCanvas extends React.Component<ReactSignatureCanvasProps> {
    clear(): void;
    isEmpty(): boolean;
    fromDataURL(dataURL: string): void;
    toDataURL(type?: string, encoderOptions?: number): string;
    getTrimmedCanvas(): HTMLCanvasElement;
  }
}
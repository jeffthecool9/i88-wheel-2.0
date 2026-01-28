
export interface Prize {
  id: number;
  label: string;
  value: string;
  color: string;
}

export enum SpinState {
  IDLE = 'IDLE',
  SPINNING = 'SPINNING',
  FINISHED = 'FINISHED'
}

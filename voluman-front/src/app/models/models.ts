
export interface ScheduleClass{
  maxLoad:number,
  load:number,
  accepted?:boolean,
  schedule:NeedClass[]
}
export interface NeedClass{
  date:string,
  slots:SlotClass[]
}

export interface SlotClass{
  startTime:string,
  endTime:string,
  isShift:boolean;
  availability?:boolean,
  actions?:ActionClass[],
}

export interface ActionClass{
  action: string,
  need:number,
  scheduled:number,
  your:boolean
}
export interface ActionDescClass{
  shortName: string,
  name: string,
  parentAction: string,
  startDate: string,
  endDate: string,
  place: string,
  description: string,
  reaction?:string,
}
export enum EventTypes {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}
export interface ToastEvent {
  type: EventTypes;
  title: string;
  message: string;
}

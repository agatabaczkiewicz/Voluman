
export interface ScheduleClass{
  maxLoad:string,
  load:string,
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
  shortName?: string,
  name?: string,
  parentAction?: string,
  startDate?: string,
  endDate?: string,
  place?: string,
  description?: string,
  reaction?:string,
}

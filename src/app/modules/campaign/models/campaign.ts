export namespace Campaign {
  export interface State {
    items: Model[];
  }

  export interface Model {
    id: string;
    title: string;
    description: string;
    point: number;
    date: Date;
  }
}

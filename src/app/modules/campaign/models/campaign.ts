export namespace Campaign {
  export interface State {
    items: Model[];
    selectedItem: Model | null;
  }

  export interface Model {
    id: string;
    title: string;
    description: string;
    point: number;
    date: Date;
  }
}

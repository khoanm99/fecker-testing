export interface IAccordionItem {
  title: string;
  item: any;
}

export type IAccordionList = IAccordionItem[];

export interface IAccordion {
  list: IAccordionList;
}

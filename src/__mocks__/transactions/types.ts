export interface MockTransaction {
  trace: {
    result: any[];
  };
  receipt: {
    result: any;
  };
  description: string;
  expectedTransfers: number;
}
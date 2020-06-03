interface IResData {
  resultCode: number;
  error: boolean;
  result: any;
}

interface IGlobalModels {
  loading: {
    global: boolean;
    models: any;
    effects: any;
  };
}

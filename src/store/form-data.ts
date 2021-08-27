import { makeAutoObservable } from 'mobx';

class FormStore {
  data = {};

  constructor() {
    makeAutoObservable(this);
  }

  get allData() {
    return this.data;
  }

  setData(newData: any) {
    this.data = { ...newData };
  }
}

export default new FormStore();

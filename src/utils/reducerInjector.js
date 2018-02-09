class ReducerInjector {
  constructor() {
    this._emitChange = null;
    this._reducers = {};
  }

  getReducers() {
    return { ...this._reducers };
  }

  inject(name, reducer) {
    this._reducers = { ...this._reducers, [name]: reducer };

    if (this._emitChange) this._emitChange(this.getReducers());
  }

  setChangeListener(listener) {
    this._emitChange = listener;
  }
}

export default new ReducerInjector();

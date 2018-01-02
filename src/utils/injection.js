const injector = {};

export function injectApp (app) {
	injector.app = app;
}

export function injectModel(model) {
  if (!injector[model.namespace]) {
    injector.app.model(model);
    injector[model.namespace] = 1;
  }
}

export default {injectApp, injectModel};
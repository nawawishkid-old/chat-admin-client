/**
 * Should rename to RouteGroup
 */
class Router {
  routes = [];

  constructor(basePath) {
    // Slice out trailing slash of basepath, to prevent duplicate slash path.
    basePath =
      basePath[basePath.length - 1] === "/" ? basePath.slice(0, -1) : basePath;
    this.basePath = basePath;
  }

  add = (path, component, options = {}) =>
    console.log(this.basePath + path, component.constructor.name) ||
    this.routes.push({ path: this.basePath + path, component, options });

  default = component => this.routes.push({ component, options: {} });
}

/*
options = {
  exact: Boolean,
  redirect: String,
  auth: Boolean,
  permission: String
}
*/

export { Router };

export default Router;

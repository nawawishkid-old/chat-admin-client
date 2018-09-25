// @format
/**
 * Should rename to RouteGroup
 */
class RouteGroup {
  /**
   * @property {Array} Array of member routes
   */
  routes = [];

  /**
   * Create route groups.
   * @param {String} basePath Base path of this route group.
   */
  constructor(basePath) {
    // Slice out trailing slash of basepath, to prevent duplicate slash path.
    this.basePath =
      basePath[basePath.length - 1] === "/" ? basePath.slice(0, -1) : basePath;
  }

  /**
   * Add route specific detail to the group
   *
   * @param {String} path Route's path
   * @param {React.Component} component Component to be displayed for the route
   * @param {Object} options Additional options of route.
   */
  add = (path, component, options = {}) =>
    console.log(this.basePath + path, component.constructor.name) ||
    this.routes.push({ path: this.basePath + path, component, options });

  /**
   * Default page when there is no matched route.
   *
   * @param {React.Component} component Component to be displayed.
   */
  default = component => this.routes.push({ component, options: {} });
}

/*
routeOptions = {
  exact: Boolean,
  redirect: String,
  auth: Boolean,
  permission: String // Future feature, maybe.
}
*/

export { RouteGroup };

export default RouteGroup;

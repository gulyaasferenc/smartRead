export const MenuPoint = function (name, displayName) {
  this.name = name
  this.displayName = displayName
  this.url = `/${this.name.replace('-', '/')}`
}

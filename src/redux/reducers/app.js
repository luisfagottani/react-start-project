export default function app(state = { toggleMenu: false }, action) {
  switch (action.type) {
    case "FIRST":
      return {};
    default:
      return state;
  }
}

export const writeText = (element) => {
  const text = element.textContent;
  if (text !== "JQUERY") {
    element.textContent = "JQUERY";
  } else {
    element.textContent = "jquery";
  }
};
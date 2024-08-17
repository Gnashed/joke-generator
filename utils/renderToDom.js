const renderToDom = (divId, contentToRender) => {
  const selectId = document.querySelector(divId);
  selectId.innerHTML = contentToRender;
};

export default renderToDom;

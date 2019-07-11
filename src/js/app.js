import * as DOM from "./DOM";

function setInvoiceAddButtonText(btn, isMed) {
  if (isMed) {
    btn.textContent = "Add Invoice";
  } else {
    btn.textContent = "ADD";
  }
}

window.onload = () => {
  // toggle navigation on mobile
  const navToggleEl = document.querySelector(DOM.sel.navToggleEl);
  const navEl = document.querySelector(DOM.sel.navEl);
  const overlayEl = document.querySelector(DOM.sel.overlayEl);

  navToggleEl.addEventListener("click", () => {
    navEl.classList.toggle(DOM.cls.navHidden);
    overlayEl.classList.toggle(DOM.cls.overlayHidden);
  });

  // show / hide invoice search form
  const invoicesSearchInputEl = document.querySelector(
    DOM.sel.invoiceSearchInput
  );
  const invoicesSearchForm = document.querySelector(DOM.sel.invoicesSearchForm);

  invoicesSearchInputEl.addEventListener("focus", () => {
    if (!invoicesSearchForm.classList.contains(DOM.cls.searchFormVisible)) {
      invoicesSearchForm.classList.add(DOM.cls.searchFormVisible);
    }
  });

  invoicesSearchInputEl.addEventListener("blur", event => {
    if (event.target.value < 1) {
      invoicesSearchForm.classList.remove(DOM.cls.searchFormVisible);
    }
  });

  // change add invoice button text depending on window size

  const invoiceAddButtonEl = document.querySelector(DOM.sel.invoiceAddButton);

  let windowIsMed = window.matchMedia("(min-width: 650px)").matches;
  setInvoiceAddButtonText(invoiceAddButtonEl, windowIsMed);

  window.onresize = () => {
    // get window width
    const matchNow = window.matchMedia("(min-width: 650px)").matches;
    if (windowIsMed !== matchNow)
      setInvoiceAddButtonText(invoiceAddButtonEl, matchNow);
    windowIsMed = matchNow;
    //
  };
};

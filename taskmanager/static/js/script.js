document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  

// modal initialization
  let modal = document.querySelectorAll('.modal');
  M.Modal.init(modal);


// datepicker initialisation
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {done: "Select"}
  })
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

});
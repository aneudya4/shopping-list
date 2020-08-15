function handdleShoppingList() {
  const form = $('form');
  const controlsDiv = `<div class="shopping-item-controls">
  <button class="shopping-item-toggle">
    <span class="button-label">check</span>
  </button>
  <button class="shopping-item-delete">
    <span class="button-label">delete</span>
  </button>
</div>`;

  form.submit((e) => {
    e.preventDefault();

    const input = $('form input');
    // value entered by user
    if (!input.val()) {
      // if input was empty  alert the user
      alert('Your input was empty');
    } else {
      // appending list item and buttons to ul
      $('ul.shopping-list').append(`<li>
    <span class="shopping-item" >${input.val()}</span>
   ${controlsDiv}
    </li>`);

      input.val('');
      //  sets input value back to empty
    }
  });

  $('ul').on('click', 'button.shopping-item-delete', function (event) {
    $(this).closest('li').remove();
    // removes li
  });

  $('ul').on('click', 'button.shopping-item-toggle', function (event) {
    const item = $(this).closest('li').find('span.shopping-item');
    item.toggleClass('shopping-item__checked ');
  });
}

$(handdleShoppingList);

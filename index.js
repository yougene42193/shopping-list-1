'use strict';
function handleAddItem() {
  //this function will add items to the list in the dom
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const addItem = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${addItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );
  });
}

function handleCheck() {
  //this function will toggle the strikethrough for the check button
  $('.shopping-list').on('click', '.shopping-item-toggle', function() {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    console.log('Check Clicked');
  });
}

function handleDelete() {
  //this will delete the item from the list with the delete button
  $('.shopping-list').on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
    console.log('Delete Clicked');
  })
}

$(handleAddItem);
$(handleCheck);
$(handleDelete);
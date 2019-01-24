/**
 * Set Order for edit.
 *
 * @param url
 */
function setSetingOrder(url) {
    var setElement = document.getElementById("order_id").value;
    var url = url;

    new Ajax.Request(url, {
        metod: 'post',
        parameters: {order_id: setElement},
        onComplete: function (response) {
            location.href = response.transport.responseURL;
        }
    });
}

/**
 * Edit product Qty in RMA.
 *
 * @param button
 *
 * @param url
 *
 * @param entityId
 */
function editRmaQty(button, url, entityId) {
    var newQty = $(button).previous('input').getValue();

    new Ajax.Request(url, {
        method: 'post',
        parameters: {
            entityId: entityId,
            newQty: newQty
        },
        onComplete: function (response) {
            location.href = '';
        }
    });
}

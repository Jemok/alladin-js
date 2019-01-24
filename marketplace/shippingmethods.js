function addShippingMethod() {
    var fieldset = $('flatrate_fieldset');
    var clone_header = fieldset.previous().clone(true);
    var clone_content =  fieldset.clone(true);

    clone_content.select('input').each(function (input) {
        input.clear();
    });

    $('flatrate_fieldset').insert({ 'after' : clone_content });
    $('flatrate_fieldset').insert({ 'after' : clone_header });

}

function removeShippingMethod(index) {
    var confirmation = confirm('Are you sure you want to remove this method? If so, please remember to Save Supplier');
    if(!confirmation) {
        return;
    }

    var fieldset = $('flatrate_fieldset' + '[' + index + ']');
    var id = fieldset.down('input').getValue();

    var currentRemoved = $('removedItems').getValue();
    var currentRemovedArray = currentRemoved.split(',');
    currentRemovedArray.push(id);
    $('removedItems').setValue(currentRemovedArray.join(','))

    fieldset.previous().toggle().remove();
    fieldset.toggle().remove();
}


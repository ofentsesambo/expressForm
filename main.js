$(function () {

    $('#get-button').on('click', function () {
        $.ajax({
            url: '/visitorInfo',
            contentType: 'application/json',
            success: function (response) {
                let tbodyEl = $('tbody');

                tbodyEl.html('');

                response.visitorInfo.forEach(function (visitor) {
                    tbodyEl.append('\
                        <tr>\
                            <td class="id">' + visitor.id + '</td>\
                            <td><input type="text" class="name" value="' + visitor.name + '"></td>\
                            <td>\
                                <button class="update-button">UPDATE</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                });
            }
        });
    });


    $('#create-form').on('submit', function (event) {


        let createInput = $('#create-input'),
            str = createInput.val()

        document.getElementById("display").innerHTML = "";
        $.ajax({
            url: '/visitorInfo',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                name: str
            }),
            success: function (response) {

                console.log(response);
                createInput.val('');
                $('#get-button').click();
            }
        });

    });

    $('table').on('click', '.update-button', function () {
        let rowEl = $(this).closest('tr'),
            id = rowEl.find('.id').text(),
            newName = rowEl.find('.name').val();

        $.ajax({
            url: '/visitorInfo/' + id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({
                newName: newName
            }),
            success: function (response) {
                console.log(response);
                $('#get-button').click();
            }
        });
    });


    $('table').on('click', '.delete-button', function () {
        let rowEl = $(this).closest('tr'),
            id = rowEl.find('.id').text();

        $.ajax({
            url: '/visitorInfo/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            success: function (response) {
                console.log(response);
                $('#get-button').click();
            }
        });
    });
});
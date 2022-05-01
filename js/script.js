$(function () {
    $('table.table tr').click(function () {
        window.location.href = $(this).data('url');
    });
})
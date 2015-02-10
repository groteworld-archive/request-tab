function createBin() {
    $('.get-link').text('Creating new bin...');
    $.ajax({'url': 'http://requestb.in/api/v1/bins', 'type': 'POST',
        'data': {'private': $('.private').prop("checked")},
        'success': function(data) {
            $('.get-container').slideUp();

            $('.inspect-code').text(data.name);
            $('.inspect-link').click(function() { window.open("http://requestb.in/"+data.name+"?inspect"); });
            $('.inspect-container').slideDown();
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.get-link').addEventListener('click', createBin);
});

chrome.browserAction.setIcon({'path': 'logo-2x.png'});
chrome.browserAction.setIcon({'path': 'logo-2x.png'});

function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}

function createBin() {
    $('.get-link').text('Creating new bin...');

    $.ajax({'url': 'http://requestb.in/api/v1/bins', 'type': 'POST',
        'data': {'private': $('.private').prop("checked")},

        'success': function(data) {
            console.log(chrome);
            $('.get-container').slideUp();

            var binUrl = "http://requestb.in/" + data.name;
            copyToClipboard(binUrl);

            $('.inspect-code').text(data.name);
            $('.inspect-link').click(function() { window.open(binUrl + "?inspect"); });
            $('.inspect-container').slideDown();
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.get-link').addEventListener('click', createBin);
});

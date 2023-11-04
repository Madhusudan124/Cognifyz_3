// JavaScript (optional)
document.querySelectorAll('.gallery a').forEach(function (thumb) {
    thumb.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').slice(1);
        var targetImage = document.getElementById(targetId);
        document.querySelector('.gallery-preview').style.display = 'flex';
        targetImage.style.display = 'block';
    });
});

document.querySelector('.gallery-preview').addEventListener('click', function () {
    this.style.display = 'none';
    document.querySelectorAll('.gallery-preview img').forEach(function (img) {
        img.style.display = 'none';
    });
});
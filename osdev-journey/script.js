// Copy build commands to clipboard
document.querySelectorAll('pre').forEach(function(pre) {
    var btn = document.createElement('button');
    btn.textContent = 'Copy';
    btn.className = 'copy-btn';
    btn.onclick = function() {
        navigator.clipboard.writeText(pre.innerText).then(function() {
            btn.textContent = 'Copied!';
            setTimeout(function() { btn.textContent = 'Copy'; }, 2000);
        });
    };
    pre.style.position = 'relative';
    pre.appendChild(btn);
});

fetch('header.html')
    .then(response => response.text())
    .then(data => {
        // Chèn nội dung vào div có id "includedContent"
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => {
        console.error('Lỗi khi tải tệp HTML: ' + error);
});

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        // Chèn nội dung vào div có id "includedContent"
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => {
        console.error('Lỗi khi tải tệp HTML: ' + error);
});



document.getElementById('skillsButton').addEventListener('click', () => {
    document.getElementById('skills').style.display= 'block';
    document.getElementById('coverPageId').style.display= 'none';
})

document.getElementById('btnReturn').addEventListener('click', () => {
    document.getElementById('coverPageId').style.display= 'block';
    document.getElementById('skills').style.display= 'none';
    })


const social = document.querySelector('.share-section');
const shareBtn = document.getElementById('share-button');
const removeStyle = document.getElementById('remove-button');

shareBtn.addEventListener('click', () => {
    social.classList.toggle('action')
})

removeStyle.addEventListener('click', () => {
    social.classList.remove('action')
})
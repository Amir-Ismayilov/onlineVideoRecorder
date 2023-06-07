const video = document.querySelector('video');

const myVideo = navigator.mediaDevices.getUserMedia({ video: true }).then(mediaStream => {
    video.srcObject = mediaStream;
}).catch(err => {
    console.log('Video error >> ', err)
})
console.log(myVideo)


const getUserVideo = async () => {
    try {
        const response = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = response;
    } catch(err) {
        console.log('Error >>> ', err);
    }

}

getUserVideo()
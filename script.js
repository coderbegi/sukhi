
const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Sunny Ray xo cosplay',
        'name': 'sunnyrayxo.mp4',
        'duration': '00:38',
    },
    {
        'id': 'a2',
        'title': 'sunny ray xo cosplay',
        'name': 'sunny ray xo.mp4',
        'duration': '00:06',
    },
    {
        'id': 'a3',
        'title': 'tiktok booty',
        'name': 'tiktok booty.mp4',
        'duration': '00:12',
    },

    {
        'id': 'a4',
        'title': 'she or he ',
        'name': 'iam lady boy.mp4',
        'duration': '00:30',
    },
    {
        'id': 'a5',
        'title': 'mimsy heart cosplay',
        'name': 'mimsyheart cosplay.mp4',
        'duration': '00:07',
    },
    {
        'id': 'a6',
        'title': 'mimsy heart cosplay',
        'name': 'mimsyheart-cosplay.mp4',
        'duration': '00:05',
    },
    {
        'id': 'a7',
        'title': 'never seen before',
        'name': 'never seen before.mp4',
        'duration': '0:29',
    },

    {
        'id': 'a8',
        'title': 'raven cosplay',
        'name': 'raven cosplay.mp4',
        'duration': '00:08',
    },
    {
        'id': 'a9',
        'title': 'sunny ray xo cosplay',
        'name': 'sunny ray xoxo.mp4',
        'duration': '00:12',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
console.log(Player);

const iframe = document.querySelector('iframe');
console.log(iframe);

const player = new Player(iframe);

player.on('timeupdate', throttle(onCurrentTime, 1000));

function onCurrentTime({ seconds }) {
  let time = `${seconds}`;

  // Запись в  localStorage
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
}

// получение из localStorage
const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
console.log(currentTime);

//   возобновить воспроизведение с сохраненной позиции.
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

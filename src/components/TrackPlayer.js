import React, { Component } from 'react';

class TrackPlayer extends Component {

  constructor(props) {
    super(props);
    // this.playerContainer = document.getElementById('player-container');
    this.audioPlayer = null;
    this.isPlaying = false;
    this.playBtn = document.getElementById('play-btn');
    this.progressBar = document.getElementById('seek-obj');

    this.togglePlay = this.togglePlay.bind(this);
    this.initProgressBar = this.initProgressBar.bind(this);
    this.seek = this.seek.bind(this);

    this.initTime = '--:--'

    this.state = {
      isPaused: true,
      currentTime: this.initTime,
      totalLength: this.initTime,
      remainingTime: this.initTime,
      currentTitle: 'train trac'
    }

  }

  componentDidMount() {
    
  }
  
  togglePlay() {

    if (this.state.isPaused === true) {
      this.audioPlayer.play();
    } else {
      this.audioPlayer.pause();
    }

    this.setState({
      isPaused: !this.state.isPaused
    })

  }

  initProgressBar() {
    
    // console.log(this.audioPlayer);
    let length = this.audioPlayer.duration;
    let current_time = this.audioPlayer.currentTime;
    let remaining_time = length - current_time;


    // // calculate total length of value
    let totalLength = this.calculateTotalValue(length);

    // // calculate current value time
    let currentTime = this.calculateCurrentValue(current_time);

    let remainingTime = this.calculateCurrentValue(remaining_time);


    
    this.progressBar.value = (this.audioPlayer.currentTime / this.audioPlayer.duration);
    // this.progressBar.addEventListener("click", seek);

    // if (this.audioPlayer.currentTime == this.audioPlayer.duration) {
    //   // document.getElementById('play-btn').className = "";
    // }



    this.setState({
      totalLength: totalLength,
      currentTime: currentTime,
      remainingTime: remainingTime
    })
  }

  seek(event) {
    let percent = (event.clientX - this.progressBar.getBoundingClientRect().x) / this.progressBar.offsetWidth;
    this.audioPlayer.currentTime = percent * this.audioPlayer.duration;
    this.progressBar.value = percent / 100;
  }


  calculateTotalValue(length) {
    let minutes = Math.floor(length / 60),
      seconds_int = length - minutes * 60,
      seconds_str = seconds_int.toString(),
      seconds = seconds_str.substr(0, 2),
      time = minutes + ':' + seconds

    return time;
  }

  calculateCurrentValue(currentTime) {
    let
      current_minute = parseInt(currentTime / 60) % 60,
      current_seconds_long = currentTime % 60,
      current_seconds = current_seconds_long.toFixed(),
      current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

    return current_time;
  }

  render() {
    return (
      <div>
        <div className="audio-player">

          <div class="track-title">
            {this.state.currentTitle}
          </div>

          <div className="audio-player-interface">

            <div 
              id="play-btn" 
              ref={div => this.playBtn = div} 
              onClick={this.togglePlay}
              className= { this.state.isPaused ? "paused" : "" }
              >
              <i class="fas fa-play"></i>
              <i class="fas fa-pause"></i>
            </div>

            <div className="player-controls scrubber">
              
              <div class="seek-obj-container">
                <progress id="seek-obj" value="0" max="1" 
                  ref={progress => this.progressBar = progress}
                  onClick={this.seek}
                  ></progress>
              </div>
              
            </div>

            <div id="start-time">
              {this.state.remainingTime}
            </div>
          
          </div>
          

          <div className="audio-wrapper" id="player-container">
            <audio id="audioPlayer" 
              ref={audioElement => this.audioPlayer = audioElement}
              onTimeUpdate={this.initProgressBar}
              >
              <source src="/musik/dimension-intrusion/0.mp3" type="audio/mp3" />
            </audio>
          </div>
          
        </div>
      </div>
    );
  }
}

export default TrackPlayer;
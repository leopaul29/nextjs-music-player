import React, { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";

class PlayControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMuted: false,
      isPlaying: false,
      isLoop: false,
      speed: 1,
      isDrawing: false,
      onPrevClick: false,
      onNextClick: false,
      tracks: [
        {
          index: 0,
          title: "Drippin",
          artist: "Pandrezz",
          audioSrc: "musics/Pandrezz - Mithril (Beat Tape) - 01 Drippin'.mp3",
          duration: "2:49",
        },
        {
          index: 1,
          audioSrc: "musics/Pandrezz - Mithril (Beat Tape) - 02 dating you.mp3",
          title: "Dating you",
          duration: "2:02",
        },
        {
          index: 2,
          audioSrc:
            "musics/Pandrezz - Mithril (Beat Tape) - 03 leaving you.mp3",
          title: "Leaving you",
          duration: "2:10",
        },
      ],
    };
  }

  render() {
    return (
      <section class="section__audioPlayer">
        <div className="audioPlayer">
          <nav className="audioPlayer__leftControls">
            {this.state.isPlaying ? (
              <button
                type="button"
                className="pause"
                aria-label="pause"
                onClick="stop()"
              >
                Stop
              </button>
            ) : (
              <button
                type="button"
                className="play"
                aria-label="play"
                onClick={() => songPlay()}
              >
                Play
              </button>
            )}
            <button onClick="mute()">Mute</button>
            <button onClick="unmute()">Unmute</button>
            <button onClick="reset()">Reset</button>
            <button onClick=" loop()">Loop</button>
            <button onClick="volumeUp()">fade out</button>
            <button onClick="volumeDown()">fade in</button>
            <button onClick="speedUp()">speed up</button>
            <button onClick="speedDown()">speed down</button>
          </nav>
          <div className="progress">
            <div id="outside">
              <div id="currentTime">0:00</div>
              <div id="songDuration">0:00</div>
              <div id="inside"></div>
            </div>
          </div>
          <AudioPlayer tracks={this.state.tracks} />
        </div>
      </section>
    );
  }
}

export default PlayControls;

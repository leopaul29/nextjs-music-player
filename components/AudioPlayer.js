import { useEffect, useState } from "react";


export default function AudioPlayer() {
  const [play, setPlay] = useState(false);


  return (
    <section class="section__audioPlayer">
      <div className="audioPlayer">
        <nav className="audioPlayer__leftControls">
          <button onClick="play()">Play</button>
          <button onClick="stop()">Stop</button>
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
        <div className="audio-element">
          <audio id="audio" controls preload="auto">
            <source
              id="audio-src"
              src="musics/Pandrezz - Mithril (Beat Tape) - 01 Drippin'.mp3"
              type="audio/mp3"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
    </section>
  );
}

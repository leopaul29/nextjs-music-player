export default function Playlist() {
  return (
    <section className="selectionPlaylist">
      <div className="selectionPlaylist__artwork">
        <img className="cover" src="images/cover.jpg" alt="artwork_cover" />
      </div>
      <div className="selectionPlaylist__trackList">
        <ul id="trackList">
          <li
            className=""
            onClick="playTrack('Pandrezz - Mithril (Beat Tape) - 01 Drippin\'.mp3')"
          >
            <div
              className="track"
              data-song="Pandrezz - Mithril (Beat Tape) - 01 Drippin'.mp3"
            >
              <div className="track__title">Drippin'</div>
            </div>
          </li>
          <li className="">
            <div className="track">
              <div className="track__title">
                Pandrezz - Mithril (Beat Tape) - 02 dating you
              </div>
            </div>
          </li>
          <li className="">
            <div className="track">
              <div className="track__title">
                Pandrezz - Mithril (Beat Tape) - 03 leaving you
              </div>
            </div>
          </li>
          <li className="">
            <div className="track">
              <div className="track__title">
                Pandrezz - Mithril (Beat Tape) - 04 san francisco (feat.
                Idealism)
              </div>
            </div>
          </li>
          <li className="">
            <div className="track">
              <div className="track__title">
                Pandrezz - Mithril (Beat Tape) - 05 I'm Sorry For This Love
                Ballad
              </div>
            </div>
          </li>
          <li className="">
            <div className="track">
              <div className="track__title">
                Pandrezz - Mithril (Beat Tape) - 06 A Stranger at Home
              </div>
            </div>
          </li>
          <li className="">
            <div className="track">
              <div className="track__title">
                Pandrezz - Mithril (Beat Tape) - 07 I Don't Mind
              </div>
            </div>
          </li>
          <li className="">
            <div className="track">
              <div className="track__title">
                Pandrezz - Mithril (Beat Tape) - 08 Lazy Monday
              </div>
            </div>
          </li>
          <li className="">
            <div className="track">
              <div className="track__title">
                Pandrezz - Mithril (Beat Tape) - 09 Irish Pub
              </div>
            </div>
          </li>
          <li className="">
            <div className="track">
              <div className="track__title">
                Pandrezz - Mithril (Beat Tape) - 10 Soft & Quick
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

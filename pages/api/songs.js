// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json([
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
      audioSrc: "musics/Pandrezz - Mithril (Beat Tape) - 03 leaving you.mp3",
      title: "Leaving you",
      duration: "2:10",
    },
    {
      index: 3,
      audioSrc:
        "musics/Pandrezz - Mithril (Beat Tape) - 04 san francisco (feat. Idealism).mp3",
      title: "San Francisco",
      duration: "2:30",
    },
    {
      index: 4,
      audioSrc:
        "musics/Pandrezz - Mithril (Beat Tape) - 05 I'm Sorry For This Love Ballad.mp3",
      title: "I'm Sorry For This Love Ballad",
      duration: "2:27",
    },
  ]);
};

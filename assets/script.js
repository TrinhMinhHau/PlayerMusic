$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
const header = $("header h2");
const cdThum = $(".cd-thumb");
const audio = $("#audio");
const playlist = $(".playlist");
const cd = $(".cd");
const playBtn = $(".btn-toggle-play");
const playing = $(".player");
const progress = $("#progress");
const nextSong = $(".btn-next");
const prevSong = $(".btn-prev");
const random = $(".btn-random");
const repeat = $(".btn-repeat");
const app = {
  currentIndex: 0,
  songs: [
    {
      name: "Mashup Nevada x Di Di Di",
      singer: "Daniel Mastro",
      path: "assets/music/Mashup Nevada x Di Di Di - Daniel Mastro.mp3",
      image: "assets/img/dididixnevada.jpg",
    },
    {
      name: "Nevada",
      singer: "Vicetone Cozi Zuehlsdorff",
      path: "assets/music/Nevada - Vicetone_ Cozi Zuehlsdorff.mp3",
      image: "assets/img/nevada.jpg",
    },

    {
      name: "Nơi này có anh piano cover",
      singer: "An Coong",
      path: "assets/music/NoiNayCoAnhPianoCover-AnCoong-4780660.mp3",
      image: "assets/img/nơi-nay-co-anh-piano.jpg",
    },

    {
      name: "Reality",
      singer: "Lost Frequencies",
      path: "assets/music/Reality - Lost Frequencies_ Janieck Devy.mp3",
      image: "assets/img/reality.jpg",
    },

    {
      name: "Set fire to the rain remix",
      singer: "Adele",
      path: "assets/music/Set Fire To The Rain Remix_ - Adele.mp3",
      image: "assets/img/set-fire-to-the-rain.jpg",
    },

    {
      name: "Sugar",
      singer: "Maroon 5",
      path: "assets/music/Sugar - Maroon 5.mp3",
      image: "assets/img/sugar.jfif",
    },

    {
      name: "Mashup x Something just like this",
      singer: "WilliamYT",
      path: "assets/music/y2mate.com -  Tik Tok  Umbrella x Something Just Like This x Take A While Remix  Nhạc Mashup Tik Tok Cực Hay.mp3",
      image:
        "assets/img/Umbrella x Something Just Like This x Take A While Remix.jpg",
    },

    {
      name: "Mood",
      singer: "24kFoldn",
      path: "assets/music/y2mate.com - 24kGoldn  Mood Official Video ft iann dior.mp3",
      image: "assets/img/mood.jpg",
    },

    {
      name: "Despair Remix",
      singer: "SeVen.13",
      path: "assets/music/y2mate.com - Despair Remix  风靡全网的背景  Tik Tok  抖音 DouYin  Bài Hát Hot Trên TikTok Trung Quốc.mp3",
      image: "assets/img/despair.jpg",
    },

    {
      name: "Funk you",
      singer: "EA7",
      path: "assets/music/y2mate.com - Funk You Extended Mix  EA7 Funk You五四蹦迪第一弹  Nhạc Nên Tik Tok  Tik Tok  抖音 Douyin.mp3",
      image: "assets/img/funk-you.jpg",
    },

    {
      name: "Larg",
      singer: "Elgit Doada",
      path: "assets/music/y2mate.com - Larg.mp3",
      image: "assets/img/larg.jpg",
    },

    {
      name: "Harehare Ya",
      singer: "Kiyod",
      path: "assets/music/y2mate.com - Lyrics ハレハレヤHarehare Ya  Cover by Kityod猫瑾醒了吗 full.mp3",
      image: "assets/img/stream-hare-hare-ya.jpg",
    },

    {
      name: "Ông trời làm tội anh chưa Beat",
      singer: "MINH HANH x RASTZ x QNT ft TUẤN CRY",
      path: "assets/music/y2mate.com - ÔNG TRỜI LÀM TỘI ANH CHƯA  MINH HANH x RASTZ x QNT ft TUẤN CRY INSTRUMENTAL.mp3",
      image: "assets/img/ong-troi-lam-toi-anh-chua.jpg",
    },

    {
      name: "Love is gone cover",
      singer: "Slander",
      path: "assets/music/y2mate.com - SLANDER  Love Is Gone ft Dylan Matthew Acoustic.mp3",
      image: "assets/img/love-is-gone.jpg",
    },

    {
      name: "You Don't Know Me",
      singer: "Ofenbach",
      path: "assets/music/y2mate.com - VietsubLyrics You Dont Know Me  Ofenbach Brodie Barclay.mp3",
      image: "assets/img/you-dont-no-me.jpg",
    },

    {
      name: "MiMiMi",
      singer: "Dramma",
      path: "assets/music/y2mate.com - 抖音Tiktok Dramma  МиМиМи Mimimi  Bài hát hot Tiktok.mp3",
      image: "assets/img/mimimi.jpg",
    },
  ],
  render: function () {
    var htmls = this.songs.map(function (song, index) {
      return `<div class="song ${
        index === app.currentIndex ? "active" : ""
      }" data-index="${index}">
      <div
        class="thumb"
        style="
          background-image: url(${song.image});
        "
      ></div>
      <div class="body">
        <h3 class="title">${song.name}</h3>
        <p class="author">${song.singer}</p>
      </div>
      <div class="option">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>`;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperty: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    // Xu ly CD quay/dung
    const cdthumb = cdThum.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity, // Lap vo han
    });
    cdthumb.pause();
    // Xu ly phong to hoac thu nho
    const cdWidth = cd.offsetWidth;
    document.onscroll = function () {
      const newWidth = cdWidth - window.scrollY;
      cd.style.width = newWidth > 0 ? newWidth + "px" : 0;
      cd.style.opacity = newWidth / cdWidth;
    };
    // Xu ly play
    playBtn.onclick = function () {
      if ($(".player.playing")) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    // Khi song duoc play
    audio.onplay = function () {
      playing.classList.add("playing");
      cdthumb.play();
    };
    // Khi song bi pause
    audio.onpause = function () {
      playing.classList.remove("playing");
      cdthumb.pause();
    };
    // tien do bai hat thay doi theo thanh
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercentage = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercentage;
      }
    };
    progress.onchange = function (e) {
      const seekTime = (e.target.value / 100) * audio.duration;
      audio.currentTime = seekTime;
    };
    nextSong.onclick = function () {
      _this = this;
      if ($(".btn-random.active")) {
        app.playramdom();
      } else {
        app.nextsong();
      }
      audio.play();
      app.render();
      app.ScrollonTop();
    };
    prevSong.onclick = function () {
      if ($(".btn-random.active")) {
        app.playramdom();
      } else {
        app.prevsong();
      }
      audio.play();
      app.render();
      app.ScrollonTop();
    };

    // Xu ly tron bai hat
    random.onclick = function (e) {
      if ($(".btn-random.active")) {
        $(".btn-random.active").classList.remove("active");
      } else {
        random.classList.add("active");
      }
    };
    // Xu li khi ket thuc bai hat , hat tiep
    audio.onended = function () {
      if ($(".btn-repeat.active")) {
        audio.play();
      } else {
        nextSong.click();
      }
    };
    // Xu li khi ket thuc bai hat , lap lai
    // Xu li lap lai bai hat
    repeat.onclick = function (e) {
      if ($(".btn-repeat.active")) {
        $(".btn-repeat.active").classList.remove("active");
      } else {
        repeat.classList.add("active");
      }
    };
    // Lang nghe su kien khi click vao playlist
    playlist.onclick = function (e) {
      if (
        e.target.closest(".song:not(.active)") ||
        e.target.closest(".option")
      ) {
        // Xu ly khi click vao bai hat
        const songNode = e.target.closest(".song:not(.active)");
        if (songNode) {
          app.currentIndex = Number(songNode.dataset.index);
          app.loadCurrentSong();
          audio.play();
          app.render();
        }
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  nextsong: function () {
    if (this.currentIndex > this.songs.length) {
      this.currentIndex = 0;
    }
    this.currentIndex++;
    this.loadCurrentSong();
  },
  prevsong: function () {
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.currentIndex--;
    this.loadCurrentSong();
  },
  playramdom: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (this.currentIndex == newIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  ScrollonTop: function () {
    setTimeout(function () {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }, 500);
  },
  repeatended: function () {
    this.loadCurrentSong();
    audio.play();
  },
  loadCurrentSong: function () {
    header.innerHTML = this.currentSong.name;
    cdThum.style.backgroundImage = `url(${this.currentSong.image})`;
    audio.src = this.currentSong.path;
  },
  start: function () {
    // Dinh nghia cac thuoc tinh cho object
    this.defineProperty();
    // Lang nghe cac su kien
    this.handleEvents();
    // Render List bai hat
    this.render();
    // Load bai hat hien tai
    this.loadCurrentSong();
  },
};
app.start();

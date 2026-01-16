const games = [
  {
    name: "Cat Block Puzzle",
    thumbnail: "thumbnails/cat-block-puzzle.png",
    links: {
      Android: "https://play.google.com/store/apps/details?id=com.gb.block.puzzle.catpuzzle.sudoku.woodoku.tetris",
      iOS: "https://apps.apple.com/vn/app/cat-block-puzzle/id6504985074",
      Video: "https://drive.google.com/file/d/1Bpf-PmEpwZejrxjboNEaWNapO5HYuhnm/view"
    }
  },
  {
    name: "Mini Games Collection - AIO",
    thumbnail: "thumbnails/mini-games-collection.png",
    links: {
      Android: "https://play.google.com/store/apps/details?id=com.offline.mini.game.relax.wd",
      iOS: "https://apps.apple.com/vn/app/mini-games-collection-aio/id6745855687",
      Video: "https://drive.google.com/file/d/1ij01F72IE3WkjAd-51-bS3-fazEaHGvD/view"
    }
  },
  {
    name: "Cooking Story 3D",
    thumbnail: "thumbnails/cooking-story-3d.png",
    links: {
      iOS: "https://apps.apple.com/vn/app/cooking-story-3d-match-3-food/id6752007095",
      Video: "https://drive.google.com/file/d/11PJpv44hP7x-66BQx8EacC_BCvXNbvu6/view"
    }
  },
  {
    name: "Tile Aqua Girl",
    thumbnail: "thumbnails/tile-aqua-girl.png",
    links: {
      Android: "https://play.google.com/store/apps/details?id=com.gplay.tile.aqua.girl",
      Video: "https://drive.google.com/file/d/157bNtH8slIj66grvAjQsIrfiRWOJ1D1a/view"
    }
  },
  {
    name: "Wool Pull Girl 3D",
    thumbnail: "thumbnails/wool-pull-girl-3d.png",
    links: {
      Android: "https://play.google.com/store/apps/details?id=com.gplay.wool.pull.girl3d",
      Video: "https://drive.google.com/file/d/1W3WXT0grpd2VGvq6lwMQmdytQSWhU8qs/view"
    }
  },
  {
    name: "Wood Cube Out",
    thumbnail: "thumbnails/wood-cube-out.png",
    links: {
      Android: "https://play.google.com/store/apps/details?id=com.gplay.wood.cube.out",
      iOS: "https://apps.apple.com/vn/app/wood-cube-out-3d/id6742124552",
      Video: "https://www.youtube.com/watch?v=98OUQxE58Fs"
    }
  },
  {
    name: "Slap Tower: Climb Troll Obby",
    thumbnail: "thumbnails/slap-tower.png",
    links: {
      Android: "https://play.google.com/store/apps/details?id=com.push.tower.troll.brain2025"
    }
  },
  {
    name: "Blood Dungeon (GMTK 2025)",
    thumbnail: "thumbnails/blood-dungeon.png",
    links: {
      Itch: "https://namphuthuy.itch.io/blood-dungeon",
      Video: "https://youtu.be/UdEwljzyADc?si=zLRVywcmXRYtpe1i"
    }
  },
  {
    name: "Bubseidon (GGJ VN 2025)",
    thumbnail: "thumbnails/bubseidon.png",
    links: {
      Itch: "https://namphuthuy.itch.io/bubseidon",
      Video: "https://www.youtube.com/watch?v=8PO7MGplLQI"
    }
  }
];

const container = document.getElementById("portfolio");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "card";

  let linksHTML = "";
  for (let key in game.links) {
    linksHTML += `<a href="${game.links[key]}" target="_blank">${key}</a>`;
  }

  card.innerHTML = `
    <div class="thumbnail" style="background-image:url('${game.thumbnail}')"></div>
    <div class="card-content">
      <h3>${game.name}</h3>
      <div class="links">
        ${linksHTML}
      </div>
    </div>
  `;

  container.appendChild(card);
});

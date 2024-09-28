import { http,HttpResponse } from 'msw';

export const songs = [
  { id: 1, title: "Cruel Summer", artist: "Taylor Swift", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",},
  { id: 2, title: "Paint The Town Red", artist: "Doja Cat", url:  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",},
  { id: 3, title: "Calm Down", artist: "Selena Gomez", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",},
  { id: 4, title: "Vampire", artist: "Olivia Rodrigo", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",},
  { id: 5, title: "Last Last", artist: "Bruna Boy", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { id: 6, title: "Dance The Night", artist: "Dua Lipa", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { id: 7, title: "What Was I Made For", artist: "Billie Eilish", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { id: 8, title: "Kill Bill", artist: "SZA", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
  { id: 9, title: "Flowers", artist: "Miley Cyrus", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
  { id: 10, title: "As It Was", artist: "Harry Styles", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },

];

export const handlers = [
  http.get('/api/songs', (resolver) => {
    return HttpResponse.json(songs);
  }),

  http.get('/api/songs/:id', (req, res, ctx) => {
    const { id } = req.params;
    const song = songs.find(song => song.id === Number(id));
    return song ? res(ctx.json(song)) : res(ctx.status(404));
  }),

  http.post('/api/songs', async (req, res, ctx) => {
    const newSong = await req.json();
    const newId = songs.length + 1;
    songs.push({ ...newSong, id: newId });
    return res(ctx.json({ ...newSong, id: newId }));
  }),

  http.patch('/api/songs/:id', async (req, res, ctx) => {
    const { id } = req.params;
    const updates = await req.json();
    const songIndex = songs.findIndex(song => song.id === Number(id));
    if (songIndex > -1) {
      songs[songIndex] = { ...songs[songIndex], ...updates };
      return res(ctx.json(songs[songIndex]));
    }
    return res(ctx.status(404));
  }),

  http.delete('/api/songs/:id', (req, res, ctx) => {
    const { id } = req.params;
    const songIndex = songs.findIndex(song => song.id === Number(id));
    if (songIndex > -1) {
      songs.splice(songIndex, 1);
      return res(ctx.status(204));
    }
    return res(ctx.status(404));
  }),
];

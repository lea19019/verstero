<script>
  import { httpsCallable } from "firebase/functions";
  import { collection, getDocs } from "firebase/firestore";
  import { db, functions, docStore } from "$lib/firebase";
	import { onMount } from "svelte";
  
  let songName = ''
  let songArtist = ''
  /**
	 * @type {any[]}
	 */
  let songs = []
  const generateSongInterpretation = async () => {
    const response = await fetch('http://127.0.0.1:5001/song-sense/us-central1/generateSongInterpretation', {
      method: 'POST',
      body: JSON.stringify({ songName, songArtist  }),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    getAllSongs()
  }

  const getAllSongs = async () => {
    const querySnapshot = await getDocs(collection(db, "songs"));
    songs = querySnapshot.docs.map(doc => {return { id: doc.id, ...doc.data() } })
  }

  onMount(async () => {
    getAllSongs()
  })
  
</script>



<!-- 
  We should have a way to look for the songs lyrics and then use those lyrics plus a prompt to generate the song thing 
  Step 1: Look for the song
  Step 2: Look for the lyrics
  Step 3: Generate the song

  Step 1
    From this step we will look at the Spotify API and get the 
    - song name
    - artist
    - album
    - album image cover
    - preview url
    - spotify track id

-->
<!-- 
  loop over "songs" and display them
 -->

 <div>
  <h1>Interpretador de Canciones</h1>
  <form on:submit|preventDefault={generateSongInterpretation}>
    <input placeholder="Song Name" type="text" id="songName" name="songName" bind:value={songName}><br>
    <input placeholder="Song Artist" type="text" id="songArtist" name="songArtist" bind:value={songArtist}><br>
    <button type="submit" >Let's Go!</button>
  </form>
</div>
<br>

<hr>
<br>
{#each songs as song}
  <div>
    <h3>{song.songName}</h3>
    <p>{song.songArtist}</p>
    <p>{song.interpretation}</p>
    <br>
    <hr>
    <br>
  </div>
{/each}




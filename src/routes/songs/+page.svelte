<!-- 
    Page to view a couple of popular songs
 -->

 <script>
    import { collection, getDocs } from "firebase/firestore";
    import { db } from "$lib/firebase";
    import { onMount } from "svelte";
    
    /**
	 * @type {any[]}
	 */
    let songs = []
  
    const getAllSongs = async () => {
      const querySnapshot = await getDocs(collection(db, "songs"));
      songs = querySnapshot.docs.map(doc => {return { id: doc.id, ...doc.data() } })
    }
  
    onMount(async () => {
      getAllSongs()
    })
    
  </script>


<h1>Songs Page</h1>
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

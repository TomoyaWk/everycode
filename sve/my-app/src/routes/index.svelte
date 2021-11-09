<script>
import { onMount } from "svelte";
import { pokemon, fetchPokemon } from "../stores/pokestore";
import CardBox from "../components/cardBox.svelte";
    
    let searchTerm = "";
    let filteredPoke = [];
    onMount(() => {
        fetchPokemon();
    })
    $: {
        if (searchTerm) {
            //search pokemon
            filteredPoke = $pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));

        } else {
            filteredPoke = [...$pokemon];
        }
    }
    

</script>

<svelte:head>
    <title>Svelte Pokedex</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Svelte kit Pokedex</h1>
<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" 
    type="text" placeholder="Search Pokemon" bind:value="{searchTerm}">
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPoke as poke }
        <CardBox pokemon={poke}></CardBox>
    {/each}
</div>


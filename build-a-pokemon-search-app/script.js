document.getElementById("search-button").addEventListener("click", async () => {
    const input = document.getElementById("search-input").value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${input}`;
  
    // Clear previous details
    clearDetails();
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Pokémon not found");
      }
      const data = await response.json();
  
      // Populate details
      populateDetails(data);
    } catch (error) {
      alert(error.message);
    }
  });
  
  function clearDetails() {
    document.getElementById("pokemon-name").textContent = "";
    document.getElementById("pokemon-id").textContent = "";
    document.getElementById("weight").textContent = "";
    document.getElementById("height").textContent = "";
    document.getElementById("types").innerHTML = "";
    document.getElementById("hp").textContent = "";
    document.getElementById("attack").textContent = "";
    document.getElementById("defense").textContent = "";
    document.getElementById("special-attack").textContent = "";
    document.getElementById("special-defense").textContent = "";
    document.getElementById("speed").textContent = "";
    document.getElementById("sprite").src = "";
  }
  
  function populateDetails(data) {
    document.getElementById("pokemon-name").textContent = data.name.toUpperCase();
    document.getElementById("pokemon-id").textContent = `#${data.id}`;
    document.getElementById("weight").textContent = `Weight: ${data.weight}`;
    document.getElementById("height").textContent = `Height: ${data.height}`;
    document.getElementById("hp").textContent = data.stats[0].base_stat;
    document.getElementById("attack").textContent = data.stats[1].base_stat;
    document.getElementById("defense").textContent = data.stats[2].base_stat;
    document.getElementById("special-attack").textContent = data.stats[3].base_stat;
    document.getElementById("special-defense").textContent = data.stats[4].base_stat;
    document.getElementById("speed").textContent = data.stats[5].base_stat;
  
    // Set sprite
    document.getElementById("sprite").src = data.sprites.front_default;
  
    // Set types
    data.types.forEach((typeInfo) => {
      const typeElement = document.createElement("div");
      typeElement.textContent = typeInfo.type.name.toUpperCase();
      document.getElementById("types").appendChild(typeElement);
    });
  }
  
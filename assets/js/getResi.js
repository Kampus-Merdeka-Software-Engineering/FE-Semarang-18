document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
  
    const SearchButton = document.getElementById("search");
    // const HitungHargaButton = document.getElementById("hitungharga");


    const baseURL = 'https://localhost:3000/data/'

    SearchButton.addEventListener("click", async () => {
      const Resi =  document.getElementById("getResi").value;
      // const email = document.getElementById("createEmail").value;

      const response = await fetch(baseURL + '/', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({nomor_resi}),
      });

      const result = await response.json();
      output.innerHTML = JSON.stringify(result);
    });

    HitungHargaButton.addEventListener("click", async () => {
      const name =  document.getElementById("findresi").value;

      const response = await fetch(baseURL + '/' + name, {
        method: "GET",
      });
      const result = await response.json();
      output.innerHTML = JSON.stringify(result);
    });

    updateUserEmailButton.addEventListener("click", async () => {
      const name =  document.getElementById("updateName").value;
      const email = document.getElementById("updateEmail").value;

      const response = await fetch(baseURL + '/' + name, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      });

      const result = await response.json();
      output.innerHTML = JSON.stringify(result);
    });

    deleteUserButton.addEventListener("click", async () => {
      const name =  document.getElementById("deleteName").value;

      const response = await fetch(baseURL + '/' + name, {
        method: "DELETE",
      });
      console.log(response);
      if (response === null) {
        output.innerHTML = "Sukses delete!";
        return;
      }
      const result = await response.json();
      output.innerHTML = JSON.stringify(result);
    });
  });
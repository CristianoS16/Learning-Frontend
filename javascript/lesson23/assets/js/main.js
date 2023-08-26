// fetch("people.json")
//   .then((response) => response.json())
//   .then((json) => loadElements(json));

axios("people.json").then((response) => loadElements(response.data));

const loadElements = (json) => {
  const table = document.createElement("table");
  for (let person of json) {
    const tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerHTML = person.nome;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = person.idade;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = person.salario;
    tr.appendChild(td);

    table.appendChild(tr);
  }
  const results = document.querySelector(".results");
  results.appendChild(table);
};

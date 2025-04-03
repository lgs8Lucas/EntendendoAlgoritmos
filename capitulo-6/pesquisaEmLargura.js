const grafo = {};
grafo["Lucas"] = ["Ana", "Pedro", "Marcos"];
grafo["Ana"] = ["Lucas", "João", "Leticia"];
grafo["Pedro"] = ["Lucas", "Maria"];
grafo["Marcos"] = [];
grafo["João"] = ["Ana"];
grafo["Leticia"] = ["Ana"];
grafo["Maria"] = [];

function eEscolhido(no) {
	return no === "Maria";
}

function pesquisaEmLargura(grafo, no) {
	const fila = [no];
	const visitados = [];
	while (fila.length > 0) {
		const noAtual = fila.shift();
		if (!visitados.includes(noAtual)) {
			visitados.push(noAtual);
			if (eEscolhido(noAtual)) return noAtual;
			fila.push(...grafo[noAtual]);
		}
	}
    return null;
}

pesquisaEmLargura(grafo, "Lucas");

grafo = {};
grafo["inicio"] = { A: 6, B: 2 };
grafo["A"] = { fim: 1 };
grafo["B"] = { A: 3, fim: 5 };
grafo["fim"] = {};

const infinito = Infinity;
const custos = {};
custos["A"] = 6;
custos["B"] = 2;
custos["fim"] = infinito;

const pais = {};
pais["A"] = "inicio";
pais["B"] = "inicio";
pais["fim"] = null;

const processados = [];

function menorCusto(custos) {
	let menor = Infinity;
	let menorNo;
	for (const no in custos) {
        
        const custo = custos[no];
		if (custo < menor && !processados.includes(no)) {
			menor = custo;
			menorNo = no;
		}
	}
    return menorNo;
}

let no = menorCusto(custos);

while (no && Object.keys(grafo[no]).length > 0) {        
    let custo = custos[no];
    vizinhos = grafo[no];
    for (const vizinho in vizinhos) {        
        let novoCusto = custo + vizinhos[vizinho];
        if (custos[vizinho] > novoCusto) {
            custos[vizinho] = novoCusto;
            pais[vizinho] = no;
        }
        processados.push(no);
        no = menorCusto(custos);
        console.log(`Próximo: ${no}`);
    }
}

console.log(custos);
console.log(pais);
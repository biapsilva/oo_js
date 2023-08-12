function FuncaoMae(a, b) {}

function FuncaoFilha() {
    FuncaoMae.call(this, "feitico A", "feitico B");
}

function feiticoLumus() {
    this.segundosTempoAtefeiticolanca = function() { return 20; };
}

function feiticoAguamenti() {
    this.segundosTempoAtefeiticolanca = function() { return 15; };
}

function feiticoEstupefaco() {
    this.segundosTempoAtefeiticolanca = function() { return 5; };
}

function feiticoExpelliarmus() {
    this.segundosTempoAtefeiticolanca = function() { return 10; };
}

function bruxo() {
    let _salario = 0;
    this.retornaSalario = function() {
        return _salario;
    };
    this.atribuiSalario = function(valor) {
        _salario = valor;
    };
}

const funcionarioA = new bruxo();

function getSalarioBruxo() {
    if (funcionarioA.retornaSalario === undefined) {
        // Faz algo se o salário do bruxo não estiver definido
    }
}

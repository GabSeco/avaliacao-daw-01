getAlunos = () => {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var alunos = JSON.parse(this.response);

            for (let i in alunos) {
                var tr = $("<tr></tr>");
                var tdName = $("<td></td>");
                var tdEmail = $("<td></td>");

                $("#alunosTable").append(tr);
                $(tr).append(tdName);
                $(tr).append(tdEmail);
                $(tdName).html(alunos[i].nome);
                $(tdEmail).html(alunos[i].email);
            }
        }
    }

    xhttp.open("GET", "/alunos", true);
    xhttp.send();
}

$(document).ready(getAlunos());

filtraAlunos = () => {

    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var alunosJson = JSON.parse(this.response);
            var searchTable = $("#alunosTableFiltro")[0];

            while (searchTable.firstChild) {
                searchTable.removeChild(searchTable.firstChild);
            }

            for (let i in alunosJson) {

                var tr = $("<tr></tr>");
                var tdName = $("<td></td>");
                var tdEmail = $("<td></td>");

                $("#alunosTableFiltro").append(tr);
                $(tr).append(tdName);
                $(tr).append(tdEmail);
                $(tdName).html(alunosJson[i].nome);
                $(tdEmail).html(alunosJson[i].email);

            }
        }
    }

    let filtro = $("#filtraNome").val();
    xhttp.open("GET", "/alunos/search?filtro=" + filtro, true);
    xhttp.send();
}
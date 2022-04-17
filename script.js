function corrigir() {
  let acertos = 0;

  let nom = document.getElementById("texto").value;
  let resum = document.getElementById("resumo");
  resum.classList.remove("hide");
  document.getElementById("nome").innerHTML = "Nome: " + nom;

  let q01 = document.getElementById("Q01").value;
  if (q01 == "informatica") {
    acertos += 1;
  }

  let q02 = document.getElementById("Q02").value;
  let regex01 = q02.includes("Informática");
  let regex02 = q02.includes("Administração");
  let regex03 = q02.includes("Enfermagem");
  if (regex01 && regex02 && regex03) {
    acertos += 1;
  }

  if (
    document.getElementById("check2").checked &&
    document.getElementById("check4").checked
  ) {
    acertos += 1;
  }

  if (document.getElementById("con").checked) {
    acertos += 1;
  }

  if (document.getElementById("ver").checked) {
    acertos += 1;
  }

  document.getElementById("corretas").innerHTML =
    "questoes acertadas: " + acertos + " de 5";
  let max = 5;
  let percent = (acertos / max) * 100;
  document.getElementById("percentual").innerHTML =
    "Vc acertou essa porcentagem amigo: " + percent + "%";
}

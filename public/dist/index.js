let planets = [];
//salvar planeta
function savePlanet(name, coordinates, situation) {
    const planet = {
        name,
        coordinates,
        situation,
        satellites: []
    };
    planets.push(planet);
    alert(`O planeta ${planet.name} foi salvo com sucesso`);
    return planet;
}
//encontrar planeta
function findPlanet(planet) {
    return planets.find((p) => p.name === planet) || null;
}
//mudar situação
function changeSituation(planet, situation) {
    const planetToChange = findPlanet(planet.name);
    if (planetToChange) {
        planet.situation = situation;
    }
    else {
        alert("Planeta não encontrado");
    }
}
//adiciona satelite
function addSatellite(planet, name) {
    planet.satellites.push(name);
    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}`);
}
//remove satelite
function removeSatellite(planet, name) {
    planet.satellites = planet.satellites.filter((satellite) => satellite !== name);
    alert(`O satélite ${name} foi removido do planeta ${planet.name}`);
}
//lista planetas
function planetsList() {
    let list = "Planetas:\n";
    planets.forEach((planet) => {
        list += `
        Nome: ${planet.name}
        Coordenadas: (${planet.coordinates.join(".")})
        Situação: ${planet.situation}
        Satélites: ${planet.satellites.length}
      `;
        planet.satellites.forEach((satellite) => {
            list += `    - ${satellite}\n`;
        });
    });
    alert(list);
}
//mostrar menu
function showMenu() {
    let userOption = 0;
    while (userOption !== 6) {
        const menu = "Escolha uma opção:\n" +
            "1 - Adicionar novo planeta \n" +
            "2 - Mudar situação de um planeta\n" +
            "3 - Adicionar Satélite\n" +
            "4 - Remover Satélite\n" +
            "5 - Listar Planetas\n" +
            "6 - Sair";
        userOption = Number(prompt(menu));
        switch (userOption) {
            case 1:
                firstOption();
                break;
            case 2:
                secondOption();
                break;
            case 3:
                thirdOption();
                break;
            case 4:
                fourthOption();
                break;
            case 5:
                planetsList();
                break;
            case 6:
                alert("Encerrando o sistema...");
                break;
            default:
                alert("Opção inválida! Retornando ao painel principal...");
                break;
        }
    }
}
//Escolher situação do planeta
function choosePlanetSituation() {
    const option = Number(prompt(`Qual a situação do planeta:
    1 - Habitado
    2 - Habitavel
    3 - Inabitavel
    4 - Inexplorado`));
    let situation;
    switch (option) {
        case 1:
            situation = "Habitado";
            break;
        case 2:
            situation = "Habitavel";
            break;
        case 3:
            situation = "Inabitavel";
            break;
        case 4:
            situation = "Inexplorado";
            break;
        default:
            alert(`Situação inválida, informe um número de 1 a 4`);
            break;
    }
    return situation;
}
function validatePlanet() {
    let planetName = prompt(`Informe o nome do planeta`);
    const planet = findPlanet(planetName);
    if (planet) {
        return planet;
    }
    else {
        alert(`Planeta não encontrado, retornando ao menu...`);
    }
}
//Menu - Opção 1
function firstOption() {
    const planetName = prompt("Informe o nome do planeta");
    let planetCoordinates = [0, 0, 0, 0];
    for (let i = 0; i < 4; i++) {
        let coordinate = Number(prompt(`Informe a coordenada ${i + 1}: `));
        planetCoordinates[i] = coordinate;
    }
    const planetSituation = choosePlanetSituation();
    savePlanet(planetName, planetCoordinates, planetSituation);
}
//Menu - Opção 2
function secondOption() {
    let planet = validatePlanet();
    if (planet) {
        const situation = choosePlanetSituation();
        changeSituation(planet, situation);
        alert(`A situação do planet ${planet.name} foi alterada para ${situation}`);
    }
}
//Menu - Opção 3
function thirdOption() {
    let planet = validatePlanet();
    if (planet) {
        const newSatellite = prompt(`Qual o nome do satélite?`);
        addSatellite(planet, newSatellite);
    }
}
//Menu - Opção 4
function fourthOption() {
    let planet = validatePlanet();
    if (planet) {
        const satellite = prompt(` Planeta selecionado: ${planet.name}
  Satélites: ${planet.satellites.join(", ")} 
  Qual o nome do satélite que deseja remover?`);
        removeSatellite(planet, satellite);
    }
}
showMenu();

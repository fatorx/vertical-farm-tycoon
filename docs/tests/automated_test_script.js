// Script de Testes Automatizados (Smoke Test) - Vertical Farm Tycoon
// Este script pode ser executado no console do navegador para uma verificação rápida.

const TestRunner = {
    run: function() {
        console.log("🚀 INICIANDO SMOKE TEST AUTOMATIZADO 🚀");
        this.testSuite = [];

        // Executar testes
        this.runTest("ST-A01: Carregamento e Inicialização", this.testInitialization);
        this.runTest("ST-A02: Plantio de Culturas", this.testPlanting);
        this.runTest("ST-A03: Avanço do Jogo e Crescimento", this.testGameLoopAndGrowth);
        this.runTest("ST-A04: Colheita", this.testHarvesting);
        this.runTest("ST-A05: Controles da Simulação", this.testSimulationControls);

        // Exibir resultados
        this.displayResults();
    },

    runTest: function(name, testFunction) {
        try {
            const result = testFunction();
            this.testSuite.push({ name, status: "✅ PASSOU", details: result });
        } catch (error) {
            this.testSuite.push({ name, status: "❌ FALHOU", details: error.message });
        }
    },

    displayResults: function() {
        console.log("\n🏁 RESULTADOS DO SMOKE TEST 🏁");
        console.table(this.testSuite);
        const failures = this.testSuite.filter(t => t.status.includes("FALHOU"));
        if (failures.length === 0) {
            console.log("🎉 Todos os testes passaram! A build está estável. 🎉");
        } else {
            console.error(`🔥 ${failures.length} teste(s) falharam. A build está instável! 🔥`);
        }
    },

    // --- Casos de Teste ---

    testInitialization: function() {
        if (!window.floor || !window.gameLoop) {
            throw new Error("Variáveis globais (floor, gameLoop) não foram inicializadas.");
        }
        const initialStats = floor.getStats();
        if (initialStats.totalPlants !== 0) {
            throw new Error(`Contagem inicial de plantas deveria ser 0, mas foi ${initialStats.totalPlants}.`);
        }
        if (document.getElementById("dayCounter").textContent !== "1") {
            throw new Error("Dia inicial na UI não é 1.");
        }
        return "Jogo e UI inicializados corretamente.";
    },

    testPlanting: function() {
        // Simula o clique no botão de plantar
        plantRandomCrop();
        plantRandomCrop();
        plantRandomCrop();
        const stats = floor.getStats();
        if (stats.totalPlants !== 3) {
            throw new Error(`Esperava 3 plantas, mas encontrou ${stats.totalPlants}.`);
        }
        updateUI(); // Força a atualização da UI para o próximo teste
        if (document.getElementById("plantCount").textContent !== "3") {
            throw new Error("Contador de plantas na UI não foi atualizado para 3.");
        }
        return "3 plantas criadas com sucesso.";
    },

    testGameLoopAndGrowth: function() {
        // Avança o tempo do jogo manualmente
        const initialGrowthStage = floor.plants.find(p => p).growthStage;
        // Simula a passagem de 2 dias de jogo
        for (let i = 0; i < (framesPerGameDay * 2); i++) {
            if (i % framesPerGameDay === 0) floor.update();
        }
        const finalGrowthStage = floor.plants.find(p => p).growthStage;
        if (finalGrowthStage <= initialGrowthStage) {
            throw new Error("Plantas não cresceram após 2 dias de jogo.");
        }
        return `Plantas cresceram do estágio ${initialGrowthStage} para ${finalGrowthStage}.`;
    },

    testHarvesting: function() {
        // Força uma planta a ficar madura para colheita
        const plantToHarvest = floor.plants.find(p => p);
        if (!plantToHarvest) throw new Error("Nenhuma planta encontrada para o teste de colheita.");
        plantToHarvest.growthStage = 4; // Estágio de colheita
        
        const initialPlantCount = floor.getStats().totalPlants;
        
        // Simula a colheita
        const gridX = Math.floor(plantToHarvest.x / floor.cellSize);
        const gridY = Math.floor(plantToHarvest.y / floor.cellSize);
        const harvested = floor.harvest(gridX, gridY);

        if (!harvested) {
            throw new Error("A função harvest() não retornou a planta colhida.");
        }
        const finalPlantCount = floor.getStats().totalPlants;
        if (finalPlantCount !== initialPlantCount - 1) {
            throw new Error("Contagem de plantas não diminuiu após a colheita.");
        }
        return "Planta madura colhida com sucesso.";
    },

    testSimulationControls: function() {
        // Teste de Pausa/Retomada
        toggleSimulation(); // Pausa
        if (isSimulationRunning) throw new Error("A simulação não pausou.");
        toggleSimulation(); // Retoma
        if (!isSimulationRunning) throw new Error("A simulação não retomou.");

        // Teste de Reset
        resetFloor();
        const stats = floor.getStats();
        if (stats.totalPlants !== 0 || gameDay !== 1) {
            throw new Error("O reset não limpou as plantas e/ou o contador de dias.");
        }
        return "Controles de Pausa, Retomada e Reset funcionam.";
    }
};

// Para executar, copie e cole este script no console do navegador e chame:
// TestRunner.run();

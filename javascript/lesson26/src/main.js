import CpfGenerator from './modules/CpfGenerator';

import './assets/css/style.css';

(function() {
    const generator = new CpfGenerator();
    const generatedCpf = document.querySelector('.generated-cpf');
    generatedCpf.innerHTML = generator.generateNewCpf();
})();
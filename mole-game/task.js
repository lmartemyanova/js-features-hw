const deadMoles = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let index = 1; index < 10; index++) {
    const hole = document.getElementById(`hole${index}`);
    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            deadMoles.textContent = Number(deadMoles.textContent) + 1
        } else {
            lost.textContent = Number(lost.textContent) + 1
        }
        if (Number(deadMoles.textContent) === 5) {
            alert("Вы победили! :)");
            lost.textContent = '0';
            deadMoles.textContent = '0';
        } 
        else if (Number(lost.textContent) === 5) {
            alert("Вы проиграли! :(");
            lost.textContent = '0';
            deadMoles.textContent = '0';
        }
    }
}
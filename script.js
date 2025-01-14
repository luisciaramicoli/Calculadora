function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculateResult() {
    try {
      const display = document.getElementById('display');
      display.value = eval(display.value);
    } catch (error) {
      alert('Expressão inválida!');
      clearDisplay();
    }
  }
  
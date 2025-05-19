export function initialize(binaryString) {
    const N = parseInt(binaryString, 10);
    return {
      registers: {
        N,
        binary: 0,
        rem: 0,
        sum: 0,
        bit_position: 1,
        ten: 10,
        two: 2,
      },
      memory: [],
      step: "start"
    };
  }
  
  export function stepExecution(state) {
    const r = { ...state.registers };
    let nextStep = state.step;
    let done = false;
  
    switch (state.step) {
      case "start":
        r.binary = Math.floor(r.N / r.ten);
        r.binary *= r.ten;
        r.rem = r.N - r.binary;
        nextStep = r.rem <= 0 ? "done" : "loop";
        break;
  
      case "loop":
        r.N = Math.floor(r.N / r.ten);
        r.rem = r.rem * r.bit_position;
        r.sum += r.rem;
        r.bit_position *= r.two;
        r.binary = Math.floor(r.N / r.ten) * r.ten;
        r.rem = r.N - r.binary;
        nextStep = r.N > 0 ? "loop" : "done";
        break;
  
      case "done":
        done = true;
        break;
  
      default:
        break;
    }
  
    return {
      state: {
        registers: r,
        memory: state.memory,
        step: nextStep
      },
      done
    };
  }
  
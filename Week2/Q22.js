function* seperateSequences(seq1) {
    let seq2 = [0, 1];
    let idx = 0,
      idx2 = 0;
    while (true) {
      if (idx < seq1.length) {
        yield seq1[idx++];
      } else {
        if (idx == seq1.length) {
          console.log("fibonacci starts here !!");
          idx++;
        }
        let fib = seq2[seq2.length - 1] + seq2[seq2.length - 2];
        seq2.push(fib);
        yield seq2[idx2++];
      }
    }
  }
  let seq1 = [1, 2, 3, 4, 5, 6];
  const gen = seperateSequences(seq1);
  
  for (let i = 0; i < 10; i++) {
    console.log(gen.next().value);
  }
  
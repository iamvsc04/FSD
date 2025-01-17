function* seperateSequences(seq1, seq2) {
  let idx = 0,
    idx2 = 0;
  while (true) {
    if (idx < seq1.length) {
      if (idx == 0) console.log("First Sequence:");
      yield seq1[idx++];
    } else {
      if (idx2 < seq2.length) {
        if (idx == seq1.length) {
          console.log("Second Sequence starts here !!");
          idx++;
        }
        yield seq2[idx2++];
      }
    }
  }
}
let seq1 = [1, 2, 3, 4, 5, 6];
let seq2 = [0, 1, 1, 2, 3, 5, 8, 13, 21];
const gen = seperateSequences(seq1, seq2);

for (let i = 0; i < 12; i++) {
  console.log(gen.next().value);
}

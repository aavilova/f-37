const synth = {
  volume: -20,
  detune: 0,
  portamento: 0.02,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'sawtooth',
    modulationType: 'sawtooth',
    phase: 0,
    harmonicity: 0.5
  }
}

const chorus = {
  wet: 0.3,
  type: 'sawtooth',
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  spread: 180
}

const bitCrusher = {
  wet: 0.4,
  bits: 4
}

const distortion = {
  wet: 0.4,
  distortion: 2,
  oversample: '2x'
}

const freeverb = {
  wet: 0.3,
  type: 'sawtooth',
  roomSize : 1 ,
  dampening : 3000
}

const sequence = {
  steps: [
    {
      time: '0:0:4',
      noteName: 'C2',
      duration: '2n',
      velocity: 1
    },
    {
      time: '0:3:6',
      noteName: 'G2',
      duration: '1n',
      velocity: 1
    },
    {
      time: '0:3:0',
      noteName: 'C2',
      duration: '1n',
      velocity: 1
    },
    {
      time: '1:3:0',
      noteName: 'E2',
      duration: '1n',
      velocity: 1
    },
    {
      time: '2:3:0',
      noteName: 'B2',
      duration: '3n',
      velocity: 1
    },
    {
      time: '2:0:3',
      noteName: 'A2',
      duration: '1n',
      velocity: 1
    },
    {
      time: '3:3:0',
      noteName: 'G2',
      duration: '2n',
      velocity: 1
    },
    {
      time: '1:3:6',
      noteName: 'C1',
      duration: '1n',
      velocity: 1
    }
  ],
  duration: '2m'
}

export { synth, chorus, bitCrusher, freeverb, sequence, distortion }

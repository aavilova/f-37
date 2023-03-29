const synth = {
  volume: 5,
  detune: 0,
  portamento: 0.05,
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
    type: 'triangle',
    modulationType: 'triangle',
    phase: 0,
    harmonicity: 0.5
  }
}

const chorus = {
  wet: 0.3,
  type: 'triangle',
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  spread: 180
}

const bitCrusher = {
  wet: 0.2,
  bits: 4
}

const distortion = {
  wet: 0.2,
  distortion: 5,
  oversample: '4x'
}

const freeverb = {
  wet: 0.3,
  type: 'triangle',
  roomSize : .5 ,
  dampening : 3000
}

const sequence = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'E3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:0:1',
      noteName: 'E3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:0:2',
      noteName: 'E3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:0:3',
      noteName: 'E3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:0:4',
      noteName: 'Gm3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:0:5',
      noteName: 'Gm3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:1:0',
      noteName: 'Gm3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:1:1',
      noteName: 'Gm3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:1:2',
      noteName: 'E3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:1:3',
      noteName: 'E3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:1:4',
      noteName: 'E3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:1:5',
      noteName: 'E3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:2:0',
      noteName: 'Gm3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:2:1',
      noteName: 'Gm3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:2:2',
      noteName: 'Gm3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:2:3',
      noteName: 'Gm3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:2:4',
      noteName: 'B3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:2:5',
      noteName: 'B3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:3:0',
      noteName: 'B3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:3:1',
      noteName: 'B3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:3:2',
      noteName: 'E3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:3:3',
      noteName: 'E3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:3:4',
      noteName: 'E3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:3:5',
      noteName: 'E3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:4:0',
      noteName: 'Gm3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:4:1',
      noteName: 'Gm3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:4:2',
      noteName: 'Gm3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:4:3',
      noteName: 'Gm3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:4:4',
      noteName: 'B3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:4:5',
      noteName: 'B3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:5:0',
      noteName: 'B3',
      duration: '.25n',
      velocity: 0.3
    },
    {
      time: '0:5:1',
      noteName: 'B3',
      duration: '.25n',
      velocity: 0.3
    },
  ],
  duration: '1m'
}

export { synth, chorus, bitCrusher, freeverb, sequence, distortion }

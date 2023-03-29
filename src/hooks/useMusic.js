import {useState} from "react";
import * as Tone from "tone";
import * as melodySettings from "../constants/tunes/melody";
import * as bassSettings from "../constants/tunes/bass";

let melodySynth;
let melodyChorus;
let melodyFreeverb;
let melodyDistortion;
let melodyBitCrusher

let bassSynth;
let bassChorus;
let bassDistortion;
let bassFreeverb;
let bassBitCrusher;

function useMusic() {
  const [isMelodyStarted, setIsMelodyStarted] = useState(false);
  const [isBassStarted, setIsBassStarted] = useState(false);
  const [melody, setMelody] = useState(melodySettings);
  const [bass, setBass] = useState(bassSettings);

  const playMelody = () => {
    melodySynth = new Tone.Synth(melody.synth)
    melodyChorus = new Tone.Chorus(melody.chorus).start()

    melodyBitCrusher = new Tone.BitCrusher(
      melody.bitCrusher
    ).toDestination()

    melodyFreeverb = new Tone.Freeverb(
      melody.freeverb
    ).toDestination()

    melodyDistortion = new Tone.Distortion(
      melody.distortion
    ).toDestination()

    melodySynth.chain(melodyChorus, melodyBitCrusher, melodyFreeverb, melodyDistortion)

    const melodyPart = new Tone.Part((time, note) => {
      melodySynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, melody.sequence.steps).start(0)

    melodyPart.loopEnd = melody.sequence.duration
    melodyPart.loop = true

    Tone.Transport.start()
  }

  const playBass = () => {
    bassSynth = new Tone.Synth(bass.synth)
    bassChorus = new Tone.Chorus(bass.chorus).start()

    bassBitCrusher = new Tone.BitCrusher(
      bass.pingPongDelay
    ).toDestination()

    bassFreeverb = new Tone.Freeverb(
      bass.freeverb
    ).toDestination()

    bassDistortion = new Tone.Distortion(
      bass.distortion
    ).toDestination()

    bassSynth.chain(bassChorus, bassBitCrusher, bassFreeverb, bassDistortion)

    const bassPart = new Tone.Part((time, note) => {
      bassSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, bass.sequence.steps).start(0)

    bassPart.loopEnd = bass.sequence.duration
    bassPart.loop = true

    Tone.Transport.start()
  }

  const handleMelodyValueChange = (property, value) => {
    if (!isMelodyStarted) {
      playMelody();
      setIsMelodyStarted(true);
    }

    const newMelodySettings = {...melodySettings};

    if (property === 'chorusWet') {
      melodyChorus.wet.value = value
      melodySettings.chorus.wet = value
    } else if (property === 'synthEnvelopeAttack') {
      melodySynth.envelope.attack = value
      newMelodySettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      melodySynth.envelope.decay = value
      newMelodySettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      melodySynth.envelope.sustain = value
      newMelodySettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      melodySynth.envelope.release = value
      newMelodySettings.synth.envelope.release = value
    } else if (property === 'freeverbWet') {
      melodyFreeverb.wet.value = value
      newMelodySettings.freeverb.wet = value
    } else if (property === 'distortionWet') {
      melodyDistortion.wet.value = value
      newMelodySettings.distortion.wet = value
    } else if (property === 'bitCrusherWet') {
      melodyBitCrusher.wet.value = value
      newMelodySettings.bitCrusher.wet = value
    }

    setMelody(newMelodySettings);
  }

  const handleBassValueChange = (property, value) => {
    if (!isBassStarted) {
      playBass();
      setIsBassStarted(true);
    }

    const newBassSettings = {...bassSettings};

    if (property === 'synthEnvelopeAttack') {
      bassSynth.envelope.attack = value
      newBassSettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      bassSynth.envelope.decay = value
      newBassSettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      bassSynth.envelope.sustain = value
      newBassSettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      bassSynth.envelope.release = value
      newBassSettings.synth.envelope.release = value
    } else if (property === 'freeverbWet') {
      bassFreeverb.wet.value = value
      newBassSettings.freeverb.wet = value
    } else if (property === 'chorusWet') {
      bassChorus.wet.value = value
      newBassSettings.chorus.wet = value
    } else if (property === 'distortionWet') {
      bassDistortion.wet.value = value
      newBassSettings.distortion.wet = value
    } else if (property === 'bitCrusherWet') {
      bassBitCrusher.wet.value = value
      newBassSettings.bitCrusher.wet = value
    }

    setBass(newBassSettings);
  }

  return {playMelody, playBass, handleMelodyValueChange, handleBassValueChange};
}

export default useMusic;

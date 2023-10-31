// /* eslint-disable jsx-a11y/media-has-caption */
// /* eslint-disable react/jsx-boolean-value */
// import { styled } from '@mui/material'
// import React, { useState } from 'react'
// import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder'

// export const Recording = () => {
//    const [file, setFile] = useState(null)

//    const recorderControls = useAudioRecorder()

//    const addAudioElement = (blob) => {
//       const audioFile = new File([blob], 'recording.webm', {
//          type: 'audio/webm',
//       })
//       setFile(audioFile)
//    }
//    console.log(file)

//    return (
//       <div>
//          <AudioRec>
//             <AudioRecorder
//                onRecordingComplete={addAudioElement}
//                audioTrackConstraints={{
//                   noiseSuppression: true,
//                   echoCancellation: true,
//                }}
//                // downloadOnSavePress={true}
//                downloadFileExtension="webm"
//                recorderControls={recorderControls}
//             />
//          </AudioRec>
//          <button type="button" onClick={recorderControls.stopRecording}>
//             Stop
//          </button>
//       </div>
//    )
// }

// const AudioRec = styled('div')({
//    '::after': {
//       content: '"<span>hello</span>"',
//    },
// })

import React, { useState } from 'react'
import { ReactMic } from 'react-mic'

function Example() {
   const [record, setRecord] = useState(false)

   const startRecording = () => {
      setRecord(true)
   }

   const stopRecording = () => {
      setRecord(false)
   }

   const onData = (recordedBlob) => {
      console.log('chunk of real-time data is: ', recordedBlob)
   }

   const onStop = (recordedBlob) => {
      console.log('recordedBlob is: ', recordedBlob)
   }

   return (
      <div>
         <ReactMic
            record={record}
            className="sound-wave"
            onStop={onStop}
            onData={onData}
            strokeColor="#ffffff"
            backgroundColor="#000000"
         />
         <button onClick={startRecording} type="button">
            Start
         </button>
         <button onClick={stopRecording} type="button">
            Stop
         </button>
      </div>
   )
}

export default Example

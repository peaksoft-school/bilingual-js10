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
import ReactMic from 'react-mic'

export const Recording = () => {
   const [isRecording, setIsRecording] = useState(false)

   const startRecording = () => {
      setIsRecording(true)
   }

   const stopRecording = () => {
      setIsRecording(false)
   }

   // const onData = (recordedData) => {
   //    // Обработка данных, записанных в реальном времени.
   // }

   // const onStop = (recordedData) => {
   //    // Обработка данных после остановки записи.
   // }

   return (
      <div>
         <button onClick={startRecording}>Начать запись</button>
         <button onClick={stopRecording}>Остановить запись</button>
         <ReactMic
            record={isRecording}
            className="sound-wave"
            onStop={onStop}
            onData={onData}
         />
      </div>
   )
}

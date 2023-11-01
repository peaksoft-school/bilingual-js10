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
import { styled } from '@mui/material'
import { Background } from '../../layout/Background'
import Button from '../UI/Buttons/Button'
import { SpeakIcon } from '../../assets'

function Recording() {
   const [record, setRecord] = useState(false)
   const [file, setFile] = useState(null)
   console.log(file)
   const startRecording = () => {
      setRecord(true)
   }

   const stopRecording = () => {
      setRecord(false)
   }

   const onData = (blob) => {
      console.log('chunk of real-time data is: ', blob)
   }

   const onStop = (blob) => {
      const audioFile = new File([blob], 'recording.webm', {
         type: 'audio/webm',
      })
      setFile(audioFile)
   }

   return (
      <div>
         <Background>
            <div>
               <div>
                  <div>
                     <Title>Record yorself saying the statement below:</Title>
                  </div>
                  <div>
                     <div>
                        <SpeakIcon />
                     </div>
                     <div>&quot; My uncle is at work &quot;.</div>
                  </div>
               </div>
               <hr />
               <div>
                  <Button defaultStyle="#3A10E5" hoverStyle="#4E28E8">
                     record now
                  </Button>
               </div>
            </div>
         </Background>

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

export default Recording

const Title = styled('div')({
   color: ' #4C4859',
   fontSize: '24px',
   fontWeight: '400',
})
